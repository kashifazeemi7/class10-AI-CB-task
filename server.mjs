const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

// date config:
const timeElapsed = Date.now();

let members = [];
app.use(express);
app.use(express.json())
app.use(morgan('short'));

app.use((req, res, next) => {

    console.log("a request came", req.body);
    next()
  })

  app.get('/members', (req, res) => {
    res.send(users)
  })

  app.get('/user/:id', (req, res) => {

    if (users[req.params.id]) {
      res.send(users[req.params.id])
    } else {
      res.send("user not found");
    }
  
  })
  


app.get('/home', (req, res) => {
    res.send('Welcome to Home!')
})

app.get('/', (req, res) => {
    res.send('Welcome to the heroku app!')
})

app.get('/profile', (req, res) => {
    res.send('Welcome to Profile!')
})

app.get('/feed', (req, res) => {
    res.send('Welcome to Feed!')
})

app.use((req, res, next) => {
    console.log('a request came!', new Date(timeElapsed));
    next();
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})