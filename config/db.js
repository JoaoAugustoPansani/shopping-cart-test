DATABASE = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_DATABASE,
        config: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            dialect: "mysql",
        }
    },
    test: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_DATABASE,
        config: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            dialect: "mysql",
        }
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_DATABASE,
        config: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            dialect: "mysql",
        }
    }
};

module.exports = DATABASE[process.env.NODE_ENV]

