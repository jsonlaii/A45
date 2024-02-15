import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import bodyParser from "body-parser"
import {connectDB} from './database/database.js'
import express from 'express'
import monsters from "./routes/monsters.route.js"


const app = express();
const port = 8000;
connectDB();






app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/monsters", monsters);
app.listen(port, function(){
  console.log(`App is listening on port ${port}! `)
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();