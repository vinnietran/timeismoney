const express = require('express'); 
const connectDB = require('./config/db');
const path = require('path'); 

const app = express();

//Connect Database
connectDB();

//Init middleware
app.use(express.json({ extended: false })); 



//define routes 
app.use('/api/users', require('./routes/user'))
app.use('/api/time', require('./routes/time'))
app.use('/api/auth', require('./routes/auth'))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
  }

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 