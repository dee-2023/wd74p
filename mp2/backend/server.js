const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const port = 5000;
const secretKey = 'MySecretkey2023xxx';

app.use(bodyParser.json());
app.use(cors());

const LoginProfiles = [
    {
        id: 1,
        fname: "Asta",
        username: "admin",
        password: "passwd123",
        isAdmin: true,
    },
    {
        id: 2,
        fname: "Finral",
        username: "staff",
        password: "123456",
        isAdmin: false,
    },
    {
        id: 3,
        fname: "Gauche",
        username: "vice",
        password: "abrakadabra",
        isAdmin: false,
    },
{
        id: 4,
        fname:"Nero",
        username: "super",
        password: "69843",
        isAdmin: true,
    },
{
        id: 5,
        fname: "Magna",
        username: "user",
        password: "123",
        isAdmin: false,
    }
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    const user = LoginProfiles.find(profile => profile.username === username && profile.password === password);
    
    if (user) {
        const token = jwt.sign({ username: user.username, isAdmin: user.isAdmin }, secretKey);
        res.json({ success: true, user });
    } else {
        res.json({ success: false, message: 'Invalid credentials' });
    }
}); [];

app.get('/api/firstname', (req, res) => {
    res.json(LoginProfiles);
  });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});