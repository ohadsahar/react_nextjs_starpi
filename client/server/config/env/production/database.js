const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

// hello

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
