const dotenv = require('dotenv');

dotenv.config();

const env = process.env.NODE_ENV || 'dev';
console.log("CONFIGG",env)

const config = {
    prod: {
        port: process.env.NODE_PORT || '8080',
    },
    dev: {
        port: process.env.NODE_PORT || '8080',
    }
};

module.exports = config[env];