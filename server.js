const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const apiRoutes = require("./routes/apiRoutes");
app.use("/", apiRoutes);



app.listen(PORT, ()=>{
    console.log(`server connected: http://localhost:${PORT}`);
});