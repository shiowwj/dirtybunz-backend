import { Router } from 'express';

const commonServices = Router();

commonServices.get('/get', ( req, res ) => {
 res.send('Hello Common Services.....')
});

export default commonServices;