
const DS = 'postgres://tjvxqaobefpuso:e26bf54866a47d78ab55000ec47c00247eb3aaf0d6ca2158e4380e55623dee18@ec2-23-23-159-84.compute-1.amazonaws.com:5432/de48k5hoknd94g';
//const DS = 'postgres://postgres:blessed1@127.0.0.1:5432/student';
const connectionString = process.env.DATABASE_URL || DS;
const secret = "secretIsh";

module.exports = {
  connectionString:connectionString,
  secret: secret
}