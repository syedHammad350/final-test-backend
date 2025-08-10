import mongoose from "mongoose";


const MongoDb_connect=()=>{
    try {
        const Connect=mongoose.connect(process.env.MONOGO_URI)
        console.log("mongo db is connected");
        
    } catch (error) {
        console.log("mongo db is not connected",error.message);
        
    }
    
}
export default MongoDb_connect