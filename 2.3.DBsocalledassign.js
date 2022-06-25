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


//Singleselect-------------------------------------------------
 let itemno ='1';  //assume this came from http request


connection.query('select * from item where itemno=?', [itemno], 
(err, rows) => {
    if (err) {
        console.log(err);  
    } else 
        
        if(rows.length>0)
        console.log(rows[0].itemname+" "+rows[0].price+" "+rows[0].category);
        }    
       
);