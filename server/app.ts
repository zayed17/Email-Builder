import express from 'express';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes
// app.use('/api', routes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
