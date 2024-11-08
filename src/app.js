const express = require("express");
const app = express();

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



app.use("/user", (req, res,next) => {
  console.log("handling the route user")
  // res.send("response1");
  next();
},(req,res)=>{
  console.log("handling route user 2")
  res.send("response2");
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
 