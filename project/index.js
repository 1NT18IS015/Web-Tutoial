const express = require("express");
const path = require("path");
const app = express();
const hbs = require('hbs');
const Register = require('./src/models/register');
require('./src/db/db');
const port = process.env.PORT || 4000;

const static_path = path.join(__dirname , "./public");
const templates_path = path.join(__dirname , "./views");
var showCus = Register.find({});
const bodyparser = require('body-parser');
 

app.use(bodyparser.urlencoded({extended : false}));
 
app.use(express.static(static_path));
app.set('view engine' , 'hbs');
app.set('views' , templates_path);

app.get('/' , (req , res) =>{
    showCus.exec(function(err , data){
        if(err) throw err;
        res.status(201).render("index" , {records:data});
    })
    // res.status(201).render("index");
})

 

app.post('/' , async(req , res) => {
    try {
        const registerStu = new Register({
           name:req.body.fname , 
           myid:req.body.myid,
           account:req.body.account,
           address:req.body.address,
           contact:req.body.contact,
           balance:req.body.balance ,  
        })
         registerStu.save(function(err , res1){
            if(err) throw err;
            showCus.exec(function(err , data){
                if(err) throw err;
                res.status(201).render("index" , {records:data});
            })
         });
     
       
       
        // return res.status(201).render("index" , {title:'Success!' , success:'Data Inserted SuccessFully' , check:'true' , cusName : myName});

      } catch (error) {
        res.status(404).send(error);
     }
     
});

app.get('/transfer' , (req , res) =>{
     res.status(201).render("transfer");
})

app.post('/transfer' , async (req , res) =>{
    try{
      myAccount = req.body.account;
      clientAccount = req.body.clientaccount;
      transferBal = req.body.balance;

      const firstUser = await Register.findOne({account: myAccount});
      const secondUser = await Register.findOne({account: clientAccount});
      const thirdOne =  parseInt(secondUser.balance) + parseInt(transferBal); //Updating Successfully
      const fourthOne = parseInt(firstUser.balance) - parseInt(transferBal);
      console.log(thirdOne);
      await Register.findOneAndUpdate( {account : clientAccount} , {balance : thirdOne});
      await Register.findOneAndUpdate( {account : myAccount} , {balance : fourthOne});

    //   console.log(clientAccount);
      res.status(201).render("transfer" , {title:'Success!' , success:'Data Updated SuccessFully' , check:'true'});
    }
    catch (error) {
        res.status(404).send(error);
     }
     
})

app.listen(port , ()=>{
    console.log(`Server is running at Port Number ${port}`);
});


// showCus.exec(function(err , data){
//     if(err) throw err;
//     res.status(201).render("index" , {records:data}); deekshakhanna@mobikasa.com
// })