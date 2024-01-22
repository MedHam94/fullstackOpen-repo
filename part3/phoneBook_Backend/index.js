const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())

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

const generateID = ()=>{
    return Math.floor(Math.random().toFixed(2)*100)
}

app.get('/', (req, res) => res.send('<h1>Hello World</h1>'))

app.get('/api/persons/', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req,res)=>{
    console.log(typeof (+req.params.id));
    const id = +req.params.id
    const person = persons.find(person=> person.id === id)

    if(person){
        res.json(person)
    }else{
        res.status(404).end()
    }
})

app.get('/info', (req, res) => {
    // console.log({date: new Date()});
    console.log(persons.length);
    res.send(`<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p>`)
})

app.post('/api/persons', (req,res)=>{
    console.log(req.body);
    const person = {
        name: 'med',
        number:'456123',
        id:generateID()
    }

    persons = persons.concat(person)
    res.json(person)

})

app.delete('/api/persons/:id', (req,res)=>{
    const id = +req.params.id
    console.log(id);
    persons = persons.filter(person => person.id !== id)
    console.log(persons);
    res.status(204).end()
})

app.listen(PORT, () => {
    console.log(`The app in running in ${PORT}`);
})