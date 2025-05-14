import express from 'express';
import cors from 'cors';
import mainRouter from './routes/main.js';

const app = express();

/**To parser JSON and FORM data in request body */
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/** To Allow some clients to access this app resources */
app.use(cors({
    origin : ['http://localhost:3000', 'https://myfrontend.com']
}));

/** Routes */
app.use('/api',mainRouter)


export default app;
