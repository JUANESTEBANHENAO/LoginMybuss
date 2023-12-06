const express = require("express");
const auth = require("./routes/auth");
const authD = require("./routes/authD");

const app = express();

app.use(express.json());

let port = process.env.PORT || 3000;

app.use("/auth", auth);
app.use("/authD", authD);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
