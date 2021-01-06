import express, { Request, Response, NextFunction, RequestHandler } from 'express';
import { json, urlencoded } from 'body-parser';
import compression from 'compression';
import Morgan from 'morgan';
import chalk from 'chalk';

// * Routes
import userRoutes from './routes/user';

// * Setup
const app = express();
const PORT = 8000;

// * Configuration
app.use(Morgan('dev'));
app.use(compression());
app.use(json({ limit: '50mb' }));
app.use(urlencoded({ limit: '50mb', extended: true }));
app.listen(PORT, () => console.log(chalk.bold.cyanBright(`Listening on port ${PORT}`)));

// * Access Control
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    return res.status(200).json({});
  }

  return next();
});

// * Calling the API Routes
app.use('/api/user/', userRoutes);

// * API Error Handling
app.use((err: Error, _: Request, res: Response, __: NextFunction) => {
  res.status(500).json({ message: err.message || 'Terjadi kesalahan di server.' });
});

// * Static File Handling
app.use('/images', express.static('./images'));
app.use(express.static(__dirname + '/public/'));
const cb: RequestHandler = (_, res) => res.status(200).sendFile(__dirname + '/public/index.html');
const allRoutes = [''];
allRoutes.map(item => app.get(`/${item}`, cb));
app.get(/.*/, (_, res) => res.status(404).sendFile(__dirname + '/public/index.html'));
