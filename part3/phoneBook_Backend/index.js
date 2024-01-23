const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())
app.use(express.static('dist'))
let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]


app.get('/', (req, res) => res.sendFile('./dist/index.html'))

app.get('/api/persons/', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req,res)=>{
    console.log(typeof (+req.params.id));
    const id = +req.params.id
})

app.get('/info', (req, res) => {
    // console.log({date: new Date()});
    console.log(persons.length);
    res.send(`<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p>`)
})

app.listen(PORT, () => {
    console.log(`The app in running in ${PORT}`);
})