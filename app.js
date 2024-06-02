import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import dotenv from 'dotenv'
import indexRouter from './routes/index.js';
import gatheringsRouter from './routes/gatherings.js';
dotenv.config()

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/neighborhood');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Routes
app.use('/', indexRouter);
app.use('/gatherings', gatheringsRouter);

const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;
