const express = require('express')
const getData = require('./Controllers/getData')
const carsData = getData()

const app = express()
const PORT = 2000

app.set('view engine', 'ejs')
app.set('views','./Views')

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/cars', (req, res) => {
    res.render('cars', {data: carsData})
})

app.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`)
})