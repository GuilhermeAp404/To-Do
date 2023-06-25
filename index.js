const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

const Task = require('./models/Task')
const taskRoutes = require('./routes/taskRoutes')


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
    }),
)

//analisa o corpo da requisição em formato json
app.use(express.json())

app.use(express.static('public'))

app.use('/task', taskRoutes)

app.get('/', (req,res)=>{
    res.redirect('/task')
})

conn
    .sync({force: true})
    .then(()=>{
        app.listen(3000)
    }).catch((err)=> console.log(err))
