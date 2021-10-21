const exp = require('constants')
const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')

//


app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('dashboard')
    res.setHeader('Content-Type', 'text/html')
    res.end()
})

app.get('/customer-list', (req, res) => {
    res.render('customer-list')
    res.end()
})


app.get('/item-list', (req, res) => {
    res.render('item-list')
    res.end()
})

app.get('/order-details', (req, res) => {
    res.render('order-details')
    res.end()
})

app.get('/signup', (req, res) => {
    res.render('signup')
    res.end()
})

app.get('/signin', (req, res) => {
    res.render('signin')
    res.end()
})


app.listen(3000)