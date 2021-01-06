import DB from '../config/database';
import User from '../models/user';

export const createUser = (user: User) => {
  return new Promise((resolve, reject) => {
    DB.query('INSERT INTO user SET ?', user, (error, results) => {
      if (error) return reject({ message: 'User not found.' });
      return resolve(results);
    });
  });
};
