const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
  });

app.get('/image', (req, res) => {
  res.sendFile('assets/image1.jpg' , { root : __dirname})
});

app.get('/video', (req, res) => {
    res.sendFile('assets/video1.mp4' , { root : __dirname})
  });
  

app.listen(process.env.PORT || 8000, () => {
  console.log('Example app listening on port 8000!')
});