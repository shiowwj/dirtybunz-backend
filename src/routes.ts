import { Router } from 'express';
import commonServices from './common/commonServices';
import { resolveNaptr } from 'dns';

const routes = Router();


routes.get('/testDbsApi', (req,res)=>{
 console.log('REQUEST header!', req.headers)
 console.log('REQUEST body!', req.body)
 res.send('hello test');
})
routes.use('/common', commonServices)

if( process.env.NODE_ENV === 'development') {
 console.log('Development mode....do something....')
}

export default routes;