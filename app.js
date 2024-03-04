import express from 'express';

import connectdb from './db/connectdb.js';
import {join} from "path"
import web from "./routes/web.js";
import test from "./routes/test.js";
import web1 from "./routes/web1.js";
import QA from "./routes/QA.js";
import fileUpload from 'express-fileupload';
import cors from 'cors';
import mutton from "./routes/mutton.js";
import beef from "./routes/beef.js";
import seafood from "./routes/seafood.js"




const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017';

connectdb(DATABASE_URL);

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
app.use("/QA",express.static(join(process.cwd(),"public")));
app.use("/admin", web);
app.use("/test", test);
app.use("/mutton", mutton);
app.use("/beef", beef);
app.use("/seafood", seafood);
app.use("/QA", QA);


app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
