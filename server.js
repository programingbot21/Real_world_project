import express  from 'express'
import colors  from 'colors'
import dotenv   from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
// import autoRoutes from './routes/authRoutes.js'
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import cors from 'cors'
// import { hash } from 'bcryptjs'



dotenv.config();

//database config
connectDB();


const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);






app.get('/', (req, res) =>{
    res.send("<h1>Welcome  jkhkjhudfjnuohdfkjhdfhh my website</h1>")
    
});
const PORT = process.env.PORT || 8000;

//RUN LISTEN    
app.listen(PORT, ()=>{
    console.log(`SERVER Runing ${process.env.DEV_MODE}on ${PORT}`);
});
