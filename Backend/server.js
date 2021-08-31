import express from "express"
import {data} from './stocklist.js'; 
import http from "http";
import fs from "fs";

const app = express();




app.use(bodyParser.json());
app.use(Cors());
// app.use("/api/search",SearchRoute)

const server = http.createServer(app);
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`server started at ${port}`);
});

// read file sample.json file
