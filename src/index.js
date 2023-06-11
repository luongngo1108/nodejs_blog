const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

// Xử lý dữ liệu từ server trả về
app.use(express.urlencoded({
    extended: true
}))

// Xử lý dữ liệu đẩy lên server
app.use(express.json())


// HTTP logger
// app.use(morgan('combined'))

// Templates engine
app.engine('hbs', engine({
    extname: 'hbs'
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/new', (req, res) => {
    res.render('news')
})

app.get('/search', (req, res) => {
    res.render('search')
})

app.post('/search', (req, res) => {
    console.log(req.body)
    res.render('search')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})