const express = require('express');
const dao = require("./data_access");
const cors = require('cors')
const app = express();
const path = require('path')
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'build')))
// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname,'build','index.html'))
// });

app.get("/employees", async (req, res) => {
    await dao.call('getAllEmployees', {}, (result) => {
        console.log(result)
        if (result.employees !== undefined) {
            res.send(result.employees);
  
        } else {
            res.statusCode = 404;
            console.warn(res)
            res.end();
        }
    });
  });

app.get("/employees/:id", async(req, res) => {
    await dao.call('getEmployee', {id: req.params.id}, (result) => {
        if (result.employee !== undefined) {
            res.send(result.employee);
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
});

app.get("/reports/:id", async(req, res) => {
    await dao.call('getReports', {mid: req.params.id}, (result) => {
        if (result.reports !== undefined) {           
            res.send(result.reports);
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
});




let port = 4000;
console.log('service opening on port: ' + port)
app.listen(port);