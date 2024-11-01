import mysql from 'mysql'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSSWORD,
    database: "users"
});

export function Connect() {
    console.log('Connecting');
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        Query("SELECT * FROM userdata")
    });

}

export function Query(sql) {
    con.query(sql, function(err, results) {
        if (err) throw err;
        console.log(results);
    })
}