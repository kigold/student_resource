
const DS = 'postgres://postgres:password@127.0.0.1:5432/database';
const connectionString = process.env.DATABASE_URL || DS;
const secret = "secretIsh";

module.exports = {
  connectionString:connectionString,
  secret: secret
}