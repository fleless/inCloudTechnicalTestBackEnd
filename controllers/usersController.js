var express = require('express');
const bodyParser = require("body-parser");
var multer = require('multer');


var db = require('../modals/db');
let controller = {
    getUser: (req, res) => {
        var queryString = "SELECT * FROM User WHERE name = '" + req.body.name + "' AND password = '" + req.body.password + "'";
        db.query(queryString, (err, rows, fields) => {
            console.log("I think we fetched users successfully ")
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        })
    },
    addUser: (req, res) => {
        var queryString2 = "INSERT INTO User (name, password) VALUES ('" + req.body.name + "', '" + req.body.password + "')";
        db.query(queryString2, (err, rows, fields) => {
            console.log("I think we added successfully ");
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        })
    },
    }
module.exports = controller;