require('dotenv/config')

module.exports = {
    multipleStatements  : true,
    host                : process.env.DB_HOST,
    user                : process.env.DB_USER,
    password            : '',
    database            : process.env.DB_DATABASE
};