var express = require('express');
const bodyParser = require("body-parser");
var multer = require('multer');


var db = require('../modals/db');
let controller = {
    getTasks: (req, res) => {
        var queryString = "SELECT * FROM Task";
        db.query(queryString, (err, rows, fields) => {
            console.log("I think we fetched tasks successfully ")
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        })
    },
    addTask: (req, res) => {
        var queryString2 = "INSERT INTO Task (description, startDate, endDate, time, title, idUser) VALUES ('" + req.body.description + "', '" + req.body.startDate + "', '" + req.body.endDate + "', '" + req.body.time + "', '" + req.body.title + "', '" + req.body.idUser + "')";
        db.query(queryString2, (err, rows, fields) => {
            console.log("I think we added task successfully ");
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        })
    },
}
module.exports = controller;