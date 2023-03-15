const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    user: "postgres", //default PostgreSQL username
    port: 5432, //default PostgreSQL port number
    password: "emmanuel", //default PostgreSQL password
    database: "postgres" 
})

client.connect(); //connect() connects our database
client.query('SELECT * FROM employee', (err, res) => {
 
    return(!err) ? console.log(res.rows) : console.log(err.message);

})

