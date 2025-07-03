import express from 'express';
import cors from 'cors';
import mainRouter from './routes/main.js';

const app = express();

/**To parser JSON and FORM data in request body */
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const corsOptions = {
    origin: 'https://financial-assist.vercel.app/',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
};
/** To Allow some clients to access this app resources */
app.use(cors(corsOptions));

/** Routes */
app.use('/api',mainRouter)


export default app;
