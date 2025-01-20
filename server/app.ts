import express from 'express';
import dotenv from 'dotenv';
import emailRoute from './routes/emailRoute';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api/email', emailRoute);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
