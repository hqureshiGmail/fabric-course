const express = require('express')
const query = require('./controllers/query')
const invoke = require('./controllers/invoke')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/query', (req, res) => query.query(req, res))

app.get('/invoke', (req, res) => invoke.invokecc(req, res))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
