const express = require("express");
const axios = require("axios").default; 

const app = express();
const port = 5001;

app.set("view engine", "ejs");

app.use("/single-user", async (req, res)=>{
    const response = await axios.get("https://randomuser.me/api?results=5");
    const json = response.data;
    const user = json.results[0];

    res.render("user.ejs", {user});
});


app.use("/user-list", async (req, res)=>{
    const response = await axios.get("https://randomuser.me/api?results=5");
    const json = response.data;
    const userlist = json.results;

    const sumOfAge = userlist.map(user => user.dob.age ).reduce((a,b) => a + b);
    const averageAge = sumOfAge/userlist.length;


    res.render("user-list.ejs", {userlist,averageAge});
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });