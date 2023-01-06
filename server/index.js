
const express = require('express');
const {PrismaClient} = require("@prisma/client");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;

const prisma = new PrismaClient()

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/leetcode', async (req, res) => {
    const leetcodeAll = await prisma.leetcodeDaily.findMany()
    res.json(leetcodeAll)
})

app.get('/api/leetcode/:date', async (req, res) => {
    console.log("requested date " + req.params.date)
    const leetcodeDaily = await prisma.leetcodeDaily.findUnique({
            where: {
                date: req.params.date,
            },
        })
    leetcodeDaily == null ? res.status(404).send(undefined) : res.json(leetcodeDaily)
})

app.post('/api/leetcode', async (req, res) => {
    console.log("received params " + req.body)
    let result = await prisma.leetcodeDaily.create({
        data: {
            link: req.body.link,
            difficulty: req.body.difficulty,
            title: req.body.title,
            date: req.body.date
        },
    });
    res.json(result)
})