const {Pool} = require('pg');

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "emmanuel",
    database: "postgres"
})

pool.connect();
pool.query('SELECT * FROM employee', (err, res) => {
 
    return(!err) ? console.log(res.rows) : console.log(err.message);

})

