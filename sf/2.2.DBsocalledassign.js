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



//Update------------------------------------------------------
let itemno='1';
let category='car';
let price='4500';
let itemname='Music system';

connection.query('update item set category=?,price=?,itemname=? where itemno=?', [category,price,itemname,itemno], 
(err, res1) => {
    if (err) {
        console.log(err);  
    }  else {
        if(res1.affectedRows===0)
        {
            console.log("update failed");
        } 
        else
           console.log("update suceeded");    
       
    }
}
);