const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose
        .connect("mongodb://127.0.0.1:27017//mongodb_crud")
        .then(() => console.log("connected to database")) ;
    }catch (error) {
        console.log(error);
    }
};

module.exports = connectDb;