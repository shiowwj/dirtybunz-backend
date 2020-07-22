import { Router } from 'express';
import commonServices from './common/commonServices';

const routes = Router();

routes.use('/common', commonServices)

if( process.env.NODE_ENV === 'development') {
 console.log('Development mode....do something....')
}

export default routes;