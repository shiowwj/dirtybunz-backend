import dotenv from 'dotenv';

const result = dotenv.config();
if( result.error ) {
 dotenv.config({ path: '.env.default'})
}

import express, { Request, Response, NextFunction } from 'express';
import compression from 'compression';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';

// 
import ApplicationError from './errors/application-error';
import routes from './routes';


const app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3000);

/*
//Serving static files in Express
info: https://expressjs.com/en/starter/static-files.html
// Cache control 
info: http://expressjs.com/en/resources/middleware/serve-static.html 
*/ 

// app.use(express.static(path.join(__dirname, 'public'), { maxAge: 0 }));


app.get("/", (req, res) => {
 res.send("Hello App Test")
})

app.use( '/api', routes );

app.use(( err: ApplicationError, req: Request, res: Response, next: NextFunction) => {
 if( res.headersSent ) {
  return next(err);
 } 

 return res.status(err.status || 500 ).json({
  error: process.env.NODE_ENV === 'development' ? err : undefined,
  message: err.message
 })
})

app.listen(app.get('port') ,(): void => {
 console.log(`Server is running in http://localhost:${app.get('port')}`)
})