const express = require('express');
const httpProxy = require('http-proxy');
const app = express();
const proxy = httpProxy.createProxyServer();

// Example routes for your services
app.use('/users', (req, res) => {
    proxy.web(req, res, { target: 'http://user-service:4001' });
});

app.use('/listings', (req, res) => {
    proxy.web(req, res, { target: 'http://listing-service:4002' });
});

app.use('/orders', (req, res) => {
    proxy.web(req, res, { target: 'http://order-service:4003' });  // Correct service name
});


// Define a default route for the API Gateway
app.get('/', (req, res) => {
    res.send('API Gateway Running');
});

app.listen(8080, () => {
    console.log('API Gateway listening on port 8080');
});








