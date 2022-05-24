const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'datjapan'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('Mysql Connected...')
});

app.listen(3000, () => {
    console.log('Server running successfully');
});

app.post('/ferjohn/rich/isog', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if(username && password){
        conn.query('SELECT * FROM datjapantable WHERE username = ? && password = ?', [username, password], function(error, rows, fields){
            if(!error){
                console.log(rows);
                res.send(rows);
            }else{
                console.log(error);
            }
        })
    }else {
        console.log('Error')
    }
})
app.post('/api/register', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let address = req.body.address;
    let phone = req.body.phone;


    if(username && password && firstname && lastname && address && phone){
        conn.query('INSERT INTO datjapantable(username, PASSWORD, firstname, lastname, address, phone) VALUES(?,?,?,?,?,?)', [username, password, firstname, lastname, address, phone], function(error, rows, fields){
            if(error) throw error;
            else{
                console.log(rows);
                res.send(rows);
                res.end();
            }
        })
    }else {
        // alert('Registration Failed');
        res.send()
        console.log('Error');
    }
})
