const cors = require('cors');

// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
app.use(
    cors({
         origin: "http://localhost/cystack/certimanager/public/get-all-num",
        // corsOptions

    })
)
app.get("/get-all-num",(req,res) =>{
     res.json({name:"Abdullah",age:25})
 })
 app.listen(3000)