const express = require("express")
const mongoose = require("mongoose")

require('dotenv').config()

async function main(){
    console.log("Connecting to MongoDb.....",process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDb.")

    const app = express();

    app.use(express.json());

    app.use('/api/products', require('./api_products/products.routes'));

    app.listen(process.env.port || 3000, () => {
        console.log(`Server started`);
      });
}

main()
