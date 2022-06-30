const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello app ');
})

const users = [
    {id: 1, name: 'Shabana', email: 'shabana@gmail.com', phone: '017555255555'},
    {id: 2, name: 'Farida Akhtar Babita', email: 'faridaakhtarbabita@gmail.com', phone: '0175552425555'},
    {id: 3, name: 'Rozina', email: 'Rozina@gmail.com', phone: '0175512555'},
    {id: 4, name: 'Champa', email: 'Champa@gmail.com', phone: '0145555555'},
    {id: 5, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '41245555'},
    {id: 6, name: 'Shabnaz', email: 'Shabnaz@gmail.com', phone: '01755555'},
]

app.get('/users', (req, res) => {
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter( user => user.name.toLowerCase().includes(search));
        res.send(matched)
    }
    else{
        res.send(users);
    }
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find( u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('Request ', req.body)
    res.send('Post Method success')
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
})

app.get('fruits/mango/fazle', (req, res) => {
    res.send('sour sour fazle flavour')
})

app.listen(port, () => {
    console.log('Listening my port', port);
})