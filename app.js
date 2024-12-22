const CONFIG = require('./config/config')
const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const signup = require('./routes/signup')
const login = require('./controllers/login')
const blog = require('./routes/blog')

const app = express()

const PORT = process.env.PORT


console.log(CONFIG.DATABASE_CONNECT_STRING)
// connect to db
require('./middleware/db')(CONFIG.DATABASE_CONNECT_STRING)

// parse information from request
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/signup', signup)
app.use('/api/login', login)
app.use('/api/blog', blog)

// use error handler middleware
app.use(errorHandler)


//  renders the login page
app.get('/login', (req, res) => {
    res.render('login');
});

// renders the signup page
app.get('/signup', (req, res) => {
    res.render('signup');
});


// renders the blogs page
app.get('/blogs', async (req, res) => {
    try {
        const user = req.user; 
        const blogs = await Blog.find() ;
        res.render('blogs', { user, blogs })
    } catch (err) {
        console.error('Error fetching blogs:', err.message);
        res.status(500).send('Internal Server Error');
    }
});




app.get("/", (req, res)=>{ 

    res.send("Welcome to Blog API")
})



app.set('views', 'views');
app.set('view engine', 'ejs');


app.listen(PORT, ()=> {
    console.log(`Server is listening at port :${PORT}`)
})