const { response } = require("express");
const express=require("express");
const mongoose=require("mongoose");

const adminRoute=require("./routes/adminRoute");
const userRoute=require("./routes/userRoute");
const productRoute=require("./routes/productRoute");
const cors = require('cors')


const app=express();
app.use(express.json())

mongoose.connect("mongodb+srv://dharma:dharma1234@cluster0.yeifyz0.mongodb.net/food_order?retryWrites=true&w=majority",{
   useNewUrlParser:true,
   useUnifiedTopology:true,
},
(err)=>{
  if(!err)
  {
    console.log("Database connected successfully");
  }
  else
   
    console.log("Error occured" + err);
}
)

app.use(cors({credentials:true,
  origin: "http://localhost:4200"
}))

app.use('/api/admin',adminRoute);
app.use('/api/user',userRoute);
app.use('/product',productRoute);

app.listen(3000,()=> {

  console.log("Server is running on port no. 3000")
})  


