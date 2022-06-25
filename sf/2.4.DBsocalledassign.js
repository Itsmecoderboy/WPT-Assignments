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


//Multiselect-------------------------------------------------
let category ='car';  //assume this came from http request


connection.query('select * from item where category =?', [category], 
(err, rows) => {
    if (err) {
        console.log(err);  
    } else 
        
        if(rows.length>0){
        for(let i=0;i<rows.length;i++){
        console.log(rows[i].itemname+" "+rows[i].price);
        }  
    }  
       
    
    }
);