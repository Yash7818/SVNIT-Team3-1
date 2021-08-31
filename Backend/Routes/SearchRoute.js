import express from "express";
const router = express.Router();
import {data} from '../stocklist';

router.post("/search", async (req,res)=>{
    try{
        const send = data.filter(item=>item.symbol==req.symbol);
        res.send({
            result:send
        })
    }
    catch{

    }
})

const fs = require('fs');

function filteredData(key, startDate, endDate) {
  var data = fs.readFileSync('Stock_List.json');

  const jsonData = JSON.parse(data);
  const filteredData = jsonData.filter((item) => item.key === key);
  const simplifiedData = filteredData.map((item) => {
    return {
      symbol: item.symbol,
      open: item.open,
      close: item.close,
      high: item.high,
      low: item.low,
      volume: item.volume,
      date: new Date(item.date),
    };
  });

  const dataByDate = simplifiedData.filter(
    (item) => item.date >= startDate && item.date <= endDate
  );
  if (!startDate && !endDate) {
    return simplifiedData;
  } else return dataByDate;
}

module.exports = filteredData;

export default router;