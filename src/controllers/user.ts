import { RequestHandler } from 'express';
import User from '../models/user';
import { createUser } from '../services/user';

export const create: RequestHandler<
  null,
  { message: string; createdUser: User },
  { email: string; name: string; password: string }
> = async (req, res) => {
  const body = req.body;
  const { email, name, password } = body;
  const newUser = new User(email, name, password);
  await createUser(newUser);
  res.json({ message: 'Berhasil membuat user baru!', createdUser: newUser });
};

export const getById: RequestHandler<{ userId: string }, { message: string; user: User }> = async (req, res) => {
  const user = new User('asd@asd.com', 'Robin', '123');
  res.json({ message: `Params: ${req.params.userId}`, user });
};
