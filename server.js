import express from 'express'
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const usurs = []

app.post('/usuarios', async (req, res) =>{

   await prisma.user.create({
        data:{
            email:req.body.email,
            name: req.body.name,
            age: req.body.age   
        }
    })

    res.status(201).json(req.body)

})

app.get('/usuarios', (req, res) => {

    res.status(200).json(usurs)

})  

app.listen(3000)

/*
pauloricardonetwork
VMLzaEMblgBnoBIn
*/