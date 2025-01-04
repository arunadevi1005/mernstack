const express=require('express');
let router=express.Router();



router.get('/',(req,res)=>{
    res.send('Heyy World! :) ');
});

router.get('/user',(req,res)=>{
    res.send('Im Aruna! ');
});
router.get('/newuser',(req,res)=>{
    res.send('im a new user');
});

router.route('/:id')
    .get((req,res)=>{
        console.log(req.usery);
        res.send('User with id '+req.params.id);
    })
    .put((req,res)=>{
        res.send('User with id '+req.params.id+' updated');
    })
    .delete((req,res)=>{
        res.send('User with id '+req.params.id+' deleted');
    });

const users=[{name:'Aruna'},{name:'Amber'},{name:'thendral'}];
router.param('id',(req,res,next,id)=>{
    console.log(id);
    req.usery=users[id];
    next();
});








/** router.get('/:id',(req,res)=>{
    res.send('User with id '+req.params.id+' created');
});
router.put('/:id',(req,res)=>{
    res.send('User with id '+req.params.id+' updated');
});
router.delete('/:id',(req,res)=>{
    res.send('User with id '+req.params.id+' deleted');
}); */

module.exports=router;