const express =require("express");
const cors = require("cors");
const playerRoutes=require("./routes");


const app = express();
app.use(cors());
app.use(express.json());
app.use("/",playerRoutes)

const DEFAULT_PORT=3000
const port = process.env.PORT || DEFAULT_PORT

app.listen(port,()=>{
    console.log(`server works https://localhost${port}`)
});