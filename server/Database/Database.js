import mysql from 'mysql';
import crypto from 'crypto';

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
    });

}

export class dbServices {

    async Register(username, password, email) {
    con.query(`INSERT INTO userdata (id, username, password, email) VALUES ("${crypto.randomUUID()}", "${username}", "${password}", "${email}")`, function(err, results) {
        if (err) throw err;
        console.log(results);
        })
    }

async Authorize(name, password) {
    con.query(`SELECT * FROM userdata WHERE username LIKE "${name}"`, function(err, results) {
        console.log(results.type);
        if (err) return 0;
        console.log(results);
        })
    }
}
