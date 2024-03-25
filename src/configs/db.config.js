import mongoose from 'mongoose'; 
 import { logger } from '../utils/logger.js'; 
  
 export default (function database() { 
     const startdb = () => { 
         mongoose.set('strictQuery', false) 
         mongoose.connect(process.env.MONGODB_URI, { 
             dbName: 'Redcluster' 
         }) 
         .then(() => { 
             logger.info('Database connected successfully...') 
         }) 
         .catch(err => { 
             logger.error('Error connecting to the database:', err) 
             logger.info('Reconnecting to database...') 
             startdb() 
         }) 
     } 
  
     startdb() 
 })
