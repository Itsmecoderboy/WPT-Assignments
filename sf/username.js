const express=require('express');
const app=express();

app.use(express.static('sf'));

app.get("/login",(req,resp)=>{
    console.log('Request received on login');

    let username=req.query.username;
    let password=req.query.password;

    let loginstatus={status:false, message:"login due to user"};
    if(username==password){
        loginstatus.status=true;
        loginstatus.message="successfully login";
    }
    console.log('Sending loginstatus');
    resp.send(loginstatus);
});

app.listen(9898,()=>{
    console.log('Server is listening to port 9898...');
});