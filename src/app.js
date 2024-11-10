const express = require("express");
const app = express();

const {adminAuth,userAuth}=require('./middleware/auth')

// app.get("/user", (req, res) => {

//   res.send({ firstName: "Amar", lastName: "Pratap" });
// });

// app.post("/user", (req, res) => {
//   // here is the code to submit the data to the backend
//   res.send("Data successfully registered");
// });

// app.delete("/user", (req, res) => {
//   // here is the code to submit the data to the backend
//   res.send("Delete successfully");
// });

// app.put("/user", (req, res) => {
//   // here is the code to submit the data to the backend
//   res.send("data updated successfully");
// });
// app.patch("/user", (req, res) => {
//   // here is the code to submit the data to the backend
//   res.send("data patched successfully");
// });

// episode-4 notes

//next() is the function which is responsible to execute the next route handler .agar last wala handler me bhi next() raha to wo uske next ko dundega aur agar nahi mila to error dega

// app.use(
//   "/user",
//   (req, res, next) => {
//     console.log("handling the route user");
//     // res.send("response1");
//     next();
//   },
//   (req, res, next) => {
//     console.log("handling route user 2");
//     res.send("response2");
//     next();
//   },
//   (req, res, next) => {
//     console.log("handling route user 2");
//     res.send("response2");
//     next();
//   },
//   (req, res, next) => {
//     console.log("handling route user 2");
//     res.send("response2");
//     next();
//   },
//   (req, res) => {
//     console.log("handling route user 2");
//     res.send("response2");
//   }
// );



//Episode -5 


app.use("/admin",adminAuth)
app.use("/user",userAuth)

app.get("/admin/getAllData", (req, res)=>{
  //logic of checking the request is authorized
   res.send("All Data sent")
})

app.get('/user',userAuth, (req, res)=>{
  res.send("user route is calling")
})

app.get("/admin/deleteUser",(req,res)=>{
    res.send("Deleted a user")
})

app.listen(8080, () => {
  console.log("Server is listening on port 8080"); 
});
