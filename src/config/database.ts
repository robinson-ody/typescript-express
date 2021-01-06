import { createConnection } from 'mysql';
import chalk from 'chalk';

const host = 'YourDatabaseHost';
const user = 'YourDatabaseUser';
const password = 'YourDatabasePassword';
export const database = 'YourDatabaseName';
const connection = createConnection({ host, user, password, database });

connection.connect(error => {
  if (error) return console.log(chalk.bold.red(`Error connecting to database: ${error}`));
  return console.log(chalk.bold.blue(`Connected to database ${database}`));
});

export default connection;
