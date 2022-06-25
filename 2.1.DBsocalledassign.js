let dbparams=
{
    host: 'localhost',
    user: 'nitin',
    password: 'nitin1998',
    database: 'intel',
	port:3306
}; 
const mysql = require('mysql2');
const connection=mysql.createConnection(dbparams);
console.log("DB connection Established");

//Insert------------------------------------------------------
let itemno ='1';  
let itemname ='wheel';  
let price ='3000';  
let category ='car';

connection.query('insert into item(itemno,itemname,price,category) values (?,?,?,?)', [itemno,itemname,price,category], 
(err, res1) => {
    if (err) {
        console.log(err);  
    } else {
        console.log(res1.affectedRows)     
       
    }
}
);