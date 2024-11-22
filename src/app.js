const express = require("express");
const app = express();

// const {adminAuth,userAuth}=require('./middleware/auth')

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

// app.use("/admin",adminAuth)
// app.use("/user",userAuth)

// app.get("/admin/getAllData", (req, res)=>{
//   //logic of checking the request is authorized
//    res.send("All Data sent")
// })

// app.get('/user',userAuth, (req, res)=>{
//   res.send("user route is calling")
// })

// app.get("/admin/deleteUser",(req,res)=>{
//     res.send("Deleted a user")
// })

//error handling
//  there are two ways to handle error in node js
// alwats use try and  catch funtionality

//1
// app.use("/user",(err, req, res, next) => {
//     if(err){
//       res.status(500).send("Something went wrong")
//     }
// });
// //2
// app.use("/user",(req, res) => {
//   try {
//     throw new Error("User not found")
//     res.send("User data sent")
//   } catch (error) {
//     res.status(500).send("Something went wrong")
//   }
// });

// episode - 6

const connectDB = require("./config/database");
const User = require("./modals/user");
require("./config/database");

app.use(express.json());

app.post("/signup", async (req, res) => {
  //creating a new instance of user modal
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User registered successfully");
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

// app.get("/user", async (req, res) => {
//   const userEmail = req.body.email;

//   try {

//     const users=await User.findOne({email: userEmail});
//     res.send(users)
//     //const users = await User.find({ email: userEmail });
//     // if (users.length === 0) {
//     //   res.status(404).send("User not found");
//     // } else {
//     //   res.send(users);
//     // }
//   } catch (error) {
//     res.status(400).send("something went wrong");
//   }
// });

// app.get("/feed", async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.send(users);
//   } catch (error) {
//     res.status(400).send("something went wrong");
//   }
// });

//epispde 7 -deleted

app.delete("/users", async (req, res) => {
  const userId = req.body.userId;

  try {
       const user=await User.findByIdAndDelete({_id: userId });
    //const user = await User.findByIdAndDelete({ userId });

    res.send("user deleted");
  } catch (error) {
    res.status(400).send("something went wrong");
  }
});

app.patch("/users", async (req, res) => {
  const userId = req.body.userId;
  const data=req.body;

  console.log("line166"+userId);
  console.log("line167"+JSON.stringify(data));
  try{
      await User.findByIdAndUpdate({_id:userId,data},data)
      res.send("user updated sucessfully")
  }catch (error) {
      res.status(400).send("something went wrong")
  }
});

connectDB()
  .then(() => {
    console.log("database connection established");
    app.listen(8080, () => {
      console.log("Server is listening on port 8080");
    });
  })
  .catch((err) => console.log("database connection error"));
