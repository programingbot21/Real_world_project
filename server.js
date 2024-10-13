import express  from 'express';
import colors  from 'colors';
import dotenv   from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import autoRoutes from './routes/authRoutes.js'



dotenv.config();

//database config
connectDB();


const app = express();
//middleware
app.use(express.json());
app.use(morgan('dev'));

//routes

app.use("/api/v1/auth", autoRoutes)






app.get('/', (req, res) =>{
    res.send("<h1>Welcome  jkhkjhudfjnuohdfkjhdfhh my website</h1>")
    
});
const PORT = process.env.PORT || 8080;

//RUN LISTEN    
app.listen(PORT, ()=>{
    console.log(`SERVER Runing ${process.env.DEV_MODE}on ${PORT}`.bgCyan.white);
});