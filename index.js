const connectToMongo = require("./db");
const cors = require("cors");
connectToMongo();

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const corsOptions = {
  origin: 'http://localhost:3001', // Replace with your frontend's URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // If you're using cookies or authentication
  optionsSuccessStatus: 204, // Some legacy browsers (IE) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());

// Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`NoteBook App listening on port ${port}`);
});
