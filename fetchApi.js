const axios = require("axios").default; //.default need to check


async function run(){
    const response = await axios.get("https://randomuser.me/api?results=5");
    // console.log(response.data);
    // console.log(response.data.results[0].name.first);
    // let names = [];
    // for(value of response.data.results){
    //     names.push(value.name.first); 
    // }
    // console.log(names.toString()); 
    const json = response.data.results;
    // const names = json.map(user => user.name.first);
    const names = json.map(user => user.gender+" "+user.name.first+" "+user.name.last);
    console.log(names);

    // Sort with first name
    /*
    console.log(names.join("\n "));
    const names2asc = names.sort();// Only for Strings
    console.log(names2asc.join(", "));
    const names2desc = names.sort(function(a, b){return a - b});// Only for Strings and Integer both
    console.log(names2desc.join(", "));
    const names3asc = names.reverse();// Only for Strings
    console.log(names3asc.join(", "));
    const names3desc = names.sort(function(a, b){return b - a});// Only for Strings and Integer both
    console.log(names3desc.join(", "));
    */

    // Sort with last name

/*
    filter_male.sort((userA, userB) => userA.name.last.localeCompare(userB.name.last));// Sorting inside json objects with column 

    const lnames = filter_male.map((user) => user.name.first+" "+user.name.last);
    console.log(lnames.join(", "));
*/
    
  // Filter with gender and sort with last name

  /*
    const filter_male = json.filter((user) => user.gender === "male");
    // const filter_female = json.filter((user) => user.gender === "female");
    filter_male.sort((userA, userB) => userA.name.last.localeCompare(userB.name.last));// Sorting inside json objects with column 

    const lnames = filter_male.map((user) => user.name.first+" "+user.name.last);
    console.log(lnames.join(", "));
    */
    

}
run();