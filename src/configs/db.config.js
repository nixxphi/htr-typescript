import mongoose, { ConnectOptions } from 'mongoose';
import { logger } from '../utils/logger.js';

export default (function database() {
    const startdb = () => {
        mongoose.set('strictQuery', false);
        const options: ConnectOptions = {
            dbName: 'Redcluster',
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true 
        };
        mongoose.connect(process.env.MONGODB_URI, options)
        .then(() => {
            logger.info('Database connected successfully...');
        })
        .catch(err => {
            logger.error('Error connecting to the database:', err);
            logger.info('Reconnecting to database...');
            startdb();
        });
    };

    startdb();
});
