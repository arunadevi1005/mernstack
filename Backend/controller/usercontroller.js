import user from '../model/usermodel.js';

export const create=async(req,res)=>{
    try{
        let userdata=new user(req.body);
        const {email}=userdata;

        const userExist=await user.findOne({email});
        if(userExist){
            return res.status(400).json({message:"User already exist"});
        }
        const saveduser=await userdata.save();
        res.status(200).json(saveduser); 
    }catch(error){
        res.status(500).json({error:"internal server error"});
    }
}


export const fetch= async (req,res)=>{
    try{
        //res.send('Heyy World! :) ');
        const users=await user.find();
        if(users.length === 0){
            return res.status(404).json({message:"No users found"});
        }
        res.status(200).json({users});
    }catch(error){
        res.status(500).json({error:"internal server error"});
    }
}
export const fetchpar= async (req,res)=>{
    try{
        //res.send('Heyy World! :) ');
        const id=req.params.id;
        const users=await user.findOne({_id:id});
        if(users.length === 0){
            return res.status(404).json({message:"No users found"});
        }
        res.status(200).json({users});
    }catch(error){
        res.status(500).json({error:"internal server error"});
    }
}


export const update= async (req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await user.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"User not found"});
        }
        const updatedata=await user.findByIdAndUpdate(id,req.body,{new:true});
        
        res.status(200).json({updatedata});
    }catch(error){
        res.status(500).json({error:"internal server error"});
    }
}

export const deleteuser= async (req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await user.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"User not found"});
        }
        await user.findByIdAndDelete(id);
        res.status(200).json({message:"User deleted successfully"});
    }catch(error){
        res.status(500).json({error:"internal server error"});
    }
}