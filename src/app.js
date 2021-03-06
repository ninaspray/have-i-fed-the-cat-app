const express = require('express');
const { Cat } = require('./models');
const cats = require('./models/cats');
const app = express();
app.use(express.json());

//CREATE A NEW CAT

app.post('/cats', (req, res) => {
Cat.create(req.body).then(cat => res.status(201).json(cat)).catch(error => res.status(500).json(error));
});

//FIND ALL CATS

app.get('/cats', (_,res) =>{
Cat.findAll().then(cats => {
    console.log(cats[0])
    res.status(200).json(cats)
}).catch(error => {
    res.status(500).json(error)
;})
});

//UPDATE CAT - CHANGE CATS FEEDING TIME

app.patch('/cats/:catId', (req,res) =>{
    Cat.update(req.body, { where: { id: req.params.catId } }).then(cats => {
        console.log(cats[0])
        res.status(200).json(cats)
        }).catch(error => {
            res.status(500).json(error)
        ;})
        });

    // DELETE A CAT

app.delete('/cats/:catId', (req,res) =>{
    Cat.destroy({ where: { id: req.params.catId } })
    .then(cat => res.status(201).json(cat))
   });



module.exports = app;
