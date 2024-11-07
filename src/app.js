const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Amar", lastName: "Pratap" });
});

app.post("/user", (req, res) => {
  // here is the code to submit the data to the backend
  res.send("Data successfully registered");
});

app.delete("/user", (req, res) => {
    // here is the code to submit the data to the backend
    res.send("Delete successfully");
  });

  app.put("/user", (req, res) => {
    // here is the code to submit the data to the backend
    res.send("data updated successfully");
  });
  app.patch("/user", (req, res) => {
    // here is the code to submit the data to the backend
    res.send("data patched successfully");
  });

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
