const express = require("express");
const axios = require("axios").default; 
const app = express();
const port = 5001;

app.get("/", async (req, res) => {

  /*

  const users = await axios.get("https://randomuser.me/api?results=5");
  const json = users.data.results[0];
  const name = json.name.first
  const dob = new Date(json.dob.date).getFullYear();
  res.send({firstname:name, year:dob});

  */

/*
  // Print today time and tomorrow Same time
  const currentTime = new Date().toString();
  const tomorrowSameTime = new Date((new Date().getTime()) + (24*60*60*1000)).toString();
  res.send({currentTime:currentTime, tomorrowSameTime:tomorrowSameTime});
*/

/*
  // Calculate Remaining time for Break
  const currentTime = new Date().toISOString();
  const now = new Date(currentTime).getTime();
  const breakTime = new Date("2022-11-30 16:00:00").getTime();
  const remainingTime = (breakTime - now) / 1000 / 60;
  res.send({remainingTime:remainingTime});
*/


/*
  // Dates
  const time = "1963-01-20T21:13:47.858Z";
  const val = time.split("T")[1].split(":");
  const val1 = val[0]+":"+val[1];
  const val2 = time.substring(11,16);
  const val3 = new Date(time).getUTCHours()+":"+new Date(time).getUTCMinutes();
  const val4 = time.slice(11,16);
  res.send({date:time, val1:val1, val2:val2, val3:val3, val4:val4});
  */


});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});