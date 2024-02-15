import mongoose from 'mongoose'

const connectdb = async (DATABASE_URL)=>{
    try{
        const DB_OPTIONS = {dbName : 'school',};
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("connect succecfull");
    }catch(err){
         console.log(err);
    }
}

export default connectdb;