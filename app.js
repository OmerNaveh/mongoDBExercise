const express= require('express');
const app = express();
const cors =require('cors')
const Port = process.env.PORT || 8080
require('dotenv').config()
const Agent = require('./model');

app.use(cors({
    origin: '*',
    methods: '*'
}));
app.use(express.json());
app.listen(Port, ()=>{
    console.log('running Server');
})

app.get('/cities', async(req,res,next)=>{
    const cities = await Agent.find({}).distinct('city');
    res.json(cities)
})

app.get('/agents/:city', async(req,res,next)=>{
    const city = req.params.city
    const agents = await Agent.find({city:city});
    res.json(agents)
})

app.put('/agent/:id/edit', (req,res,next)=>{
    const id = req.params.id;
    const newCity = req.body.city;
    if(!newCity) return res.status(400).send('City Not Entered!')
    Agent.updateOne({license_number:id},{city: newCity}).then(res.send('Updated Successfully'))
    .catch((err)=> console.log(err));
})