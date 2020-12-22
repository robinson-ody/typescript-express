import express from 'express';
import chalk from 'chalk';
const app = express();
const PORT = 8000;
app.get('/', (_, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => console.log(chalk.blueBright.bold(`⚡️[server]: Server is running at https://localhost:${PORT}`)));
//# sourceMappingURL=server.js.map