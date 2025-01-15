const express = require('express');
const cors = require('cors');
const { createSchema, updateSchema, deleteSchema } = require('./types');
const { People } = require('./db');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

function validateCreateBody(obj){
    return createSchema.safeParse(obj);
}
function validateUpdateBody(obj){
    return updateSchema.safeParse(obj);
}
function validateDeleteBody(obj){
    return deleteSchema.safeParse(obj);
}
//Create
app.post("/",async (req,res)=>{
    const validation = validateCreateBody(req.body);
    if(!validation.success){
        return res.status(400).json({
            message: "Wrong inputs. Try again"
        })
    }
    const {name, description, interests, linkedin, twitter} = validation.data;
    try{
        await People.create({
            name,
            description,
            interests,
            linkedin,
            twitter
        });
        return res.status(200).json({
            message: "Person added successfully"
        })

    } catch(e){
        console.error(e);
        return res.status(500).json({
            message: "Person couldn't be added"
        })
    }
})

//Read
app.get("/",async (req,res)=>{
    try{
        const people = await People.find({});
        res.status(200).json({
            people
        })
    } catch(e){
        console.error(e);
    }
})

//Update
app.put("/",async (req,res)=>{
    const validation = validateUpdateBody(req.body);
    if(!validation.success){
        return res.status(400).json({
            message: "Wrong inputs. Try again"
        })
    }
    const {id, name, description, interests, linkedin, twitter} = validation.data;
    try{    
        const result = await People.updateOne({_id: id},{$set:{
            name,
            description,
            interests,
            linkedin,
            twitter
        }});
        if(result.matchedCount == 0){
            return res.status(404).json({
                message: "Todo not found"
            })
        }
        return res.status(200).json({
            message: "Todo updated"
        })
    } catch(e){
        console.error(e);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
})

//Delete
app.delete("/",async (req,res)=>{
    const validation = validateDeleteBody(req.body);
    if(!validation.success){
        return res.status(400).json({
            message: "Wrong inputs. Try again"
        })
    }
    const {id} = validation.data;
    try{
        const result = await People.deleteOne({_id:id});
        if(result.deletedCount == 0){
            return res.status(404).json({
                message: "Record not found"
            })
        }
        return res.status(200).json({
            message: "Deletion successful"
        })
    } catch(e){
        console.error(e);
        res.status(500).json({
            message: "Internal sever error"
        })
    }
})

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})