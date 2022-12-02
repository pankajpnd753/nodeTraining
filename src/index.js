const express = require("express")
const mongoose = require("mongoose")

require('dotenv').config()
const port = 5001;

async function main(){
    console.log("Connecting to MongoDb.....",process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDb.")

    const app = express();

    app.use(express.json());

    app.use('/api/products', require('./api_products/products.routes'));

    app.listen(port, () => {
        console.log(`Server started on port ${port}!`);
      });
}

main()
