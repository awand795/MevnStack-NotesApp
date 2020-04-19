const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const catatanModel = mongoose.model('Catatan');

router.get('/',(req,res)=>{
    if(req.query.id){
        catatanModel.findById({_id:req.query.id},(err,doc)=>{
            if(err){
                res.json({status:"Error",message:err});
            }
            else{
                res.json({status:"Success",data:doc});
            }
        });
    }
    else{
        catatanModel.find((err,doc)=>{
            if(err){
                res.json({status:"Error",message:err});
            }
            else{
                res.json({status:"Success",data:doc});
            }
        });
    }
});

router.post('/',(req,res)=>{
    const catatan = new catatanModel();
    catatan.title = req.body.title;
    catatan.note = req.body.note;
    catatan.date = req.body.date;
    catatan.time = req.body.time;
    catatan.save((err,doc)=>{
        if(err){
            res.json({status: "Error", message: err});
        }
        else{
            res.json({status : "Success", message: "Successfully inserted new Notes"});
        }
    });
});

router.put('/',(req,res)=>{
    if(req.query.id){
        catatanModel.findByIdAndUpdate({_id:req.query.id},req.body,(err,doc)=>{
            if(err){
                res.json({status: "Error", message: err});
            }
            else{
                res.json({status : "Success", message: "Successfully updated Notes"});
            }
        });
    }
    else{
        res.json({status:"Error", message : "Use query id of notes to delete the notes"});
    }
});

router.delete('/',(req,res)=>{
    if(req.query.id){
        catatanModel.findByIdAndDelete({_id:req.query.id},(err,doc)=>{
            if(err){
                res.json({status: "Error", message: err});
            }
            else{
                res.json({status : "Success", message: "Successfully deleted Notes"});
            }
        })
    }
    else{
        res.json({status:"Error", message : "Use query id of notes to delete the notes"});
    }
});

module.exports = router;