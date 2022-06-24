require("dotenv").config();

const projectId = process.env.PROJECT_ID;
const bucketName = process.env.BUCKET_NAME;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

module.exports = {
    projectId, bucketName,
    dbHost, dbName, 
    dbUser, dbPassword
};