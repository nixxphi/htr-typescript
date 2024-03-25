import { isValidObjectId } from "mongoose.ts";
import { RequestHandler } from "express.ts";
import { logger } from "./logger.ts";

const validateObjectId: RequestHandler = (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    logger.error("Invalid Object Id");
    return res.status(400).json({ error: "Invalid Object Id" });
  }

  next();
};

export default validateObjectId;
