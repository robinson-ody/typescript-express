import { OkPacket } from 'mysql';
import DB from '../config/database';
import User from '../models/user';

const table = 'user';

export const createUser = (user: User) => {
  return new Promise<OkPacket>((resolve, reject) => {
    DB.query(`INSERT INTO ${table} SET ?`, user, (error, results) => {
      if (error) return reject(error);
      return resolve(results);
    });
  });
};

export const getAllUser = () => {
  return new Promise<User[]>((resolve, reject) => {
    const queryString = `
      SELECT ${User.getAllSafeInformation()}
      FROM ${table}
    `;

    DB.query(queryString, (error, results) => {
      if (error) return reject(error);
      if (results.length < 1) return reject({ message: 'Belum memiliki user.' });
      return resolve(results);
    });
  });
};

export const getUserById = (userId: string) => {
  return new Promise<User>((resolve, reject) => {
    const queryString = `
      SELECT ${User.getAllSafeInformation()}
      FROM ${table}
      WHERE userId = '${userId}'
    `;

    DB.query(queryString, (error, results) => {
      if (error) return reject(error);
      if (results.length < 1) return reject({ message: 'User tidak ditemukan.' });
      return resolve(results[0]);
    });
  });
};

export const updateUserById = (userId: string, updatedData: User) => {
  return new Promise<OkPacket>((resolve, reject) => {
    const queryString = `
      UPDATE ${table}
      SET ?
      WHERE userId = '${userId}'
    `;

    DB.query(queryString, updatedData, (error, results) => {
      const result = results as OkPacket;
      if (error) return reject(error);
      if (result.affectedRows < 1) return reject({ message: 'User tidak ditemukan.' });
      return resolve(results);
    });
  });
};

export const deleteUserById = (userId: string) => {
  return new Promise<OkPacket>((resolve, reject) => {
    const queryString = `
      DELETE FROM ${table}
      WHERE userId = '${userId}'
    `;

    DB.query(queryString, (error, results) => {
      const result = results as OkPacket;
      if (error) return reject(error);
      if (result.affectedRows < 1) return reject({ message: 'User tidak ditemukan.' });
      return resolve(results);
    });
  });
};
