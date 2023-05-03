const express = require('express')
const app = express()
const port = 5000

const fkdata = require('./Data/data.json');
app.get('/', (req, res) => {
  res.send(fkdata);
});



app.listen(port, () => {
  console.log(`SM shop run ${port}`)
})