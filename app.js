import express from 'express';

import connectdb from './db/connectdb.js';
// import connectdb1 from './db/connectdb1.js';
import {join} from "path"
import web from "./routes/web.js";
import test from "./routes/test.js";
import web1 from "./routes/web1.js";
import QA from "./routes/QA.js";
import fileUpload from 'express-fileupload';
import cors from 'cors';
import mutton from "./routes/mutton.js";
import submit from "./routes/submit.js";
import beef from "./routes/beef.js";
import orderList from "./routes/orderList.js";
import verifiedorder from "./routes/verifiedorder.js";
import seafood from "./routes/seafood.js"




const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017';

connectdb(DATABASE_URL);

// const port1 = process.env.PORT1 || '3000';
// const DATABASE_URL1 = process.env.DATABASE_URL1 || 'mongodb://localhost:27017';

// connectdb1(DATABASE_URL1);




// Use cors middleware
app.use(cors());


app.use(express.urlencoded(({extended:false})));
app.use(fileUpload());
app.use(express.static(join(process.cwd(),"public")));
app.use("/",web1);
app.use("/admin",express.static(join(process.cwd(),"public")));
app.use("/admin/edit",express.static(join(process.cwd(),"public")));
app.use("/mutton/edit",express.static(join(process.cwd(),"public")));
app.use("/beef/edit",express.static(join(process.cwd(),"public")));
app.use("/seafood/edit",express.static(join(process.cwd(),"public")));
app.use("/order/edit",express.static(join(process.cwd(),"public")));
app.use("/QA",express.static(join(process.cwd(),"public")));
app.use("/admin", web);
app.use("/test", test);
app.use("/mutton", mutton);
app.use("/beef", beef);
app.use("/seafood", seafood);
app.use("/QA", QA);
app.use("/order", orderList);
app.use("/verifiedorder", verifiedorder);
app.use("/submit", submit);


app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
  // console.log(`Server listening at http://localhost:${port1}`);
});
