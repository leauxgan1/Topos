const express = require('express');
const redis = require('redis');

const app = express();

const port = 3000;


// const rclient = await redis.createClient()
//   .on('error', err => {console.log("Redis client error: ",err)})
//   .connect();

async function setupRedisData() {
  // let initialized = await rclient.hGetAll("init");
  // if (initialized.length() > 0) {
  //   return
  // } else {
  //   //Populate db with usernames and passwords
  //   rclient.set("init", "1");
  //   rclient.sAdd("001","Username: asdf, Password: qwer");

  // }
}

setupRedisData();

app.use(express.static("public"));

// app.get('/', (req,res) => {

//   res.sendFile(__dirname + '/styles/main.css');
//   res.sendFile(__dirname + '/index.html');

// });

// app.get('/login', (req,res) => {

// });



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});