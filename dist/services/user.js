import DB from '../config/database';
export const createUser = (user) => {
    return new Promise((resolve, reject) => {
        DB.query('INSERT INTO user SET ?', user, (error, results) => {
            if (error)
                return reject({ message: 'User not found.' });
            return resolve(results);
        });
    });
};
