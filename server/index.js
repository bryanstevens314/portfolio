const express = require('express');
const path = require('path');
const morgan = require('morgan')
const compression = require('compression')

const app = express();

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// compression middleware
app.use(compression())

// Serve static content from the dist directory
app.use(express.static(path.join(__dirname, '../dist')));

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist/index.html'))
})

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});