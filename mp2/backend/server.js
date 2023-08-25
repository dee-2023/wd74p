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
        email: 'astaroth@gmail.com',
    },
    {
        id: 2,
        fname: "Finral",
        username: "staff",
        password: "123456",
        isAdmin: false,
        email: 'finral@rocketmail.com',
    },
    {
        id: 3,
        fname: "Gauche",
        username: "vice",
        password: "abrakadabra",
        isAdmin: false,
        email: 'gauchemarie@yahoo.com'
    },
{
        id: 4,
        fname:"Nero",
        username: "super",
        password: "69843",
        isAdmin: true,
        email: 'nerotheblack@ymail.com'
    },
{
        id: 5,
        fname: "Magna",
        username: "user",
        password: "123",
        isAdmin: false,
        email: 'funglasquent@gmail.com'
    }
];

//for login
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
app.get('/user-email', (req, res) => {
  const email = req.body.email;
  const useremail = LoginProfiles.find(profile => profile.email);
  res.json(LoginProfiles);
})

app.get('/api/firstname', (req, res) => {
    res.json(LoginProfiles);
  });

//for OnlineShop
app.post('/products', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.json(newProduct);
  });

  app.get('/products', (req, res) => {
    res.json(products);
  });

  app.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = products.find(product => product.id === productId);
    
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(product);
    }
  });

  

  app.put('/products/:id', (req, res) => {
    const productId = req.params.id;
    const updatedProduct = req.body;
  
    const index = products.findIndex(product => product.id === productId);
  
    if (index === -1) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      products[index] = { ...products[index], ...updatedProduct };
      res.json(products[index]);
    }
  });

  app.delete('/products/:id', (req, res) => {
    const productId = req.params.id;
    products = products.filter(product => product.id !== productId);
    res.json({ message: 'Product deleted' });
  });
//dashboard
app.put('/update-email', (req, res) => {
  const newEmail = req.body.email;
  LoginProfiles.email = newEmail;

  res.json({ message: 'Email updated successfully' });
});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});