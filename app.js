require('@google-cloud/debug-agent').start()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const recordRouter = require('./routes/record')

const { projectId, bucketName } = require("./config/gcp-conf");

app.use(bodyParser.urlencoded({extended: true}))
app.use(recordRouter)

app.get("/", (req, res) => {
    console.log("Response success")
    res.send("Response success")
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log("Server is up and listening on " + PORT)
})