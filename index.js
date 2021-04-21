import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes/route.js';

const app = express();
const PORT = 5000 ;

app.use(bodyParser.json());

app.use('/product',routes);

app.get('/',(req,res) => {
    console.log('hello from console');
    res.send("Hello from Homepage");
})

app.use(bodyParser.json());
app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`) );