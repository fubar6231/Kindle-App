require("dotenv").config()
const mongoose= require("mongoose")

module.exports.connectToDatabase= async function (){
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connection Established")
    }catch (err) {
        console.error("Failed to connect")
    }
}
