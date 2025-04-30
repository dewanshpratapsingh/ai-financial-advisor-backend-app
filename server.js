import dotenv from 'dotenv';
import http from 'http';
dotenv.config();
import app from './app';

const server = http.createServer(app);
const PORT = process.env.PORT || 3000 ;

server.listen(PORT,()=>{
    console.log(`Server is listening in port ${PORT}`);
})

process.on('unhandledRejection', (err, promise) => {
    console.error(`Unhandled Rejection: ${err.message}`);
});
