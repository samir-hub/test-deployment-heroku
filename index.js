const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
  });

app.get('/image', (req, res) => {
  res.sendFile('C:/Users/slilienfeld/Tutorials/test-deployment-heroku/assets/image1.jpg')
});

app.get('/video', (req, res) => {
    res.sendFile('C:/Users/slilienfeld/Tutorials/test-deployment-heroku/assets/video1.mp4')
  });
  

app.listen(process.env.PORT || 8000, () => {
  console.log('Example app listening on port 8000!')
});