const mongoose = require('mongoose');

function connectToDatabase() {
    mongoose.connect(process.env.DATABASE_URL)
 
    const db = mongoose.connection;
    db.on('error', err => console.log(err))
    db.once('open', () => console.log('Connection successful'))
}

module.exports = connectToDatabase;