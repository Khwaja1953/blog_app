import mongoose from "mongoose";
async function db() {
    try{

        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb connected")
    }
    catch(error){
        console.error(error)
    }
}
export default db