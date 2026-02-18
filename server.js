const express = require("express");
    const dotenv = require ("dotenv");
    const cors = require("cors");
    const connectDB = require("./config/db");

    dotenv.config();
    connectDB();

     const app = express();

     app.use(cors());
     app.use(express.json());
     app.use(express.static("public"));

     app.use("/api/jobs", require("./routes/jobRoutes"));
     app.use("/api/applications", require("./routes/applicationRoutes"));

     app.listen(5001,() => {
        console.log(`server is running in the port 5001`)
     })
