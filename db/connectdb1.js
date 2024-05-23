import mongoose from 'mongoose'

const connectdb1 = async (DATABASE_URL1)=>{
    try{
        const DB_OPTIONS = {dbName : 'QP',};
        await mongoose.connect("mongodb+srv://taimoorto12345:LG0e4siXhsOCgoZg@cluster0.wizrqfn.mongodb.net/?retryWrites=true&w=majority",DB_OPTIONS);
        console.log("connect1 succecful1");
    }catch(err){
         console.log(err);
    }
}

export default connectdb1;