const express = require("express");
const cors = require("cors");

const subscriptionRoutes = require("./routes/subscriptionRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/subscriptions", subscriptionRoutes);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});