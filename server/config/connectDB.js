import mongoose from "mongoose"
export const connectDB=async ()=>{
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Database connected Succesfully");
    
    
  } catch (error) {
      console.error("Error connecting to Database",error)
      process.exit(1)
  }
}