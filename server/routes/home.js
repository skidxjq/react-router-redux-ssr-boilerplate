// var express = require('express');
import express from 'express'
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({
    'page': 'home'
  })
  // res.render('index', { title: 'Express' });
});

export default router;
