require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const { getFileStream } = require("./util/s3");

const authRoutes = require("./routes/auth");
const modelRoutes = require("./routes/model");
const dataRoutes = require("./routes/data");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
app.use(cors());

// LOGGING
app.use(morgan('dev'));

// FOR DOWNLOADING THE IMAGE
app.get('/image/:key', (req,res,next)=>{
  const key=req.params.key;
  const readStream = getFileStream(key);

  readStream.pipe(res);
});

app.get("/", (req, res) => {
  return res.status(200).json({
    body: "Backend working",
  });
});

// ROUTES
app.use("/auth", authRoutes);
app.use("/model", modelRoutes);
app.use("/data", dataRoutes);

// ERROR HANDLING
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({
    message: message,
    data: data,
  });
});

mongoose
  .set("strictQuery", true)
  .connect(process.env.TEST_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
    app.listen(process.env.PORT || 8080, () => {
      console.log("Exposed port:",process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
