import mysql from 'mysql';
import chalk from 'chalk';
export const databaseName = 'clientTemplate';
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: databaseName,
});
conn.connect(error => {
    if (error)
        return console.log(chalk.bold.red(`Error connecting to database: ${error}`));
    return console.log(chalk.bold.blue(`Connected to database ${databaseName}`));
});
export default conn;
