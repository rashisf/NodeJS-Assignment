"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const data = require('./data.json');
let port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.listen(port, (err) => {
    if (err)
        console.log("Error");
    else
        console.log("Listening from port 3000");
});
//middleware before fetching data
app.use('/api/getdata', (req, res, next) => {
    let rawData = fs.readFileSync(__dirname + '/data.json', 'utf8');
    let employees = JSON.parse(rawData);
    let count = 0;
    employees.forEach((item) => { item.id = count++; });
    fs.writeFileSync(__dirname + '/data.json', JSON.stringify(employees));
    next();
});
//Get data from JSON file
app.get('/api/getdata', (req, res) => {
    let rawData = fs.readFileSync(__dirname + '/data.json', 'utf8');
    let employees = JSON.parse(rawData);
    res.json(employees);
});
//Updates data in JSON
app.put('/api/save/:id', (req, res) => {
    let rawData = fs.readFileSync(__dirname + '/data.json', 'utf8');
    let employees = JSON.parse(rawData);
    let rowId = +req.params.id;
    let len = employees.length;
    let i = 0;
    for (i = 0; i < len; i++)
        if (employees[i].id === rowId)
            break;
    let keys = Object.keys(req.body);
    keys.forEach(key => {
        employees[i][key] = req.body[key];
    });
    fs.writeFileSync(__dirname + '/data.json', JSON.stringify(employees));
    res.end();
});
//Deletes data from JSON
app.delete('/api/delete/:id', (req, res) => {
    let rawData = fs.readFileSync(__dirname + '/data.json', 'utf8');
    let employees = JSON.parse(rawData);
    let rowId = +req.params.id;
    let len = employees.length;
    let i = 0;
    for (i = 0; i < len; i++)
        if (employees[i].id === rowId)
            break;
    employees.splice(i, 1);
    fs.writeFileSync(__dirname + '/data.json', JSON.stringify(employees));
    res.send(employees);
});
//Creates new Entry
app.post('/api/post/:id', (req, res) => {
    let rawData = fs.readFileSync(__dirname + '/data.json', 'utf8');
    let employees = JSON.parse(rawData);
    employees.push(req.body);
    fs.writeFileSync(__dirname + '/data.json', JSON.stringify(employees));
    res.json(employees);
});
