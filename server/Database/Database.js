import mysql from 'mysql'

export function Connect() {
    console.log('Connecting');
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: process.env.DB_PASSSWORD,
        dbname: "users"
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
}