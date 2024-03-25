import { Document, Model, QueryOptions } from 'mongoose';

interface SearchFilter {
    page?: number;
    limit?: number;
    deleted?: boolean;
    [key: string]: any;
}

class GenericService<T extends Document> {
    private model: Model<T>;

    constructor(model: Model<T>) {
        this.model = model;
    }

    async create(data: any): Promise<T> {
        return this.model.create(data);
    }

    async update(filter: any, data: any): Promise<T | null> {
        return this.model.findOneAndUpdate(filter, data, { new: true })
            .select('-__v -updatedAt -deleted');
    }

    async delete(filter: any): Promise<T | null> {
        return this.model.findOneAndDelete(filter);
    }

    async find(filter: any): Promise<T | null> {
        filter = { deleted: false, ...filter };
        return this.model.findOne(filter)
            .select('-__v -updatedAt -deleted');
    }

    async search(filter: SearchFilter): Promise<{ data: T[]; currentPage: number; totalPages: number }> {
        const page = filter.page ? parseInt(filter.page.toString()) : 1;
        const perPage = filter.limit ? parseInt(filter.limit.toString()) : 0;

        delete filter.page;
        delete filter.limit;

        let data: T[] = [];
        let totalCount: number;

        if (filter) {
            filter = filter.deleted ? filter : filter.hasOwnProperty('deleted') ? filter : { deleted: false, ...filter };

            totalCount = await this.model.countDocuments(filter);
            data = await this.model.find(filter)
                .skip((page - 1) * perPage)
                .limit(perPage)
                .sort({ createdAt: -1 })
                .select('-__v -updatedAt -deleted');
        } else {
            totalCount = await this.model.countDocuments({ deleted: false });
            data = await this.model.find({ deleted: false })
                .skip((page - 1) * perPage)
                .limit(perPage)
                .sort({ createdAt: 1 })
                .select('-__v -updatedAt -deleted');
        }

        return {
            data,
            currentPage: page,
            totalPages: Math.ceil(totalCount / perPage),
        };
    }
}

export default GenericService;
