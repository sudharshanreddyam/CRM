import express from 'express'
import mongoose, { mongo } from 'mongoose'
import bodyParser from 'body-parser'
import routes from './src/routes/crmRoutes'


const app = express();
const PORT = 4000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useMongoClient: true
});

//bodyParser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>
    res.send(`Node and Express server is running at port ${PORT}`)
)

app.listen(PORT, () => 
    console.log(`Your server is running at port number ${PORT}`)
)