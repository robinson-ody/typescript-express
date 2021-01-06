import { RequestHandler } from 'express';
import User from '../models/user';
import { createUser, getAllUser, getUserById, updateUserById, deleteUserById } from '../services/user';
import bcrypt from 'bcryptjs';

export const create: RequestHandler<
  null,
  { message: string; createdUser: User },
  { email: string; name: string; password: string }
> = async (req, res, next) => {
  try {
    const body = req.body;
    const { email, name, password } = body;
    const salt = await bcrypt.genSalt(10);
    const passHash = await bcrypt.hash(password, salt);
    const newUser = new User(email, name, passHash);
    await createUser(newUser);
    res.json({ message: 'Berhasil membuat user baru!', createdUser: newUser });
  } catch (error) {
    next(error);
  }
};

export const getAll: RequestHandler<null, User[]> = async (_, res, next) => {
  try {
    const allUser = await getAllUser();
    res.json(allUser);
  } catch (error) {
    next(error);
  }
};

export const getById: RequestHandler<{ userId: string }, User> = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await getUserById(userId);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const updateById: RequestHandler<{ userId: string }, { message: string; updatedUser: User }, User> = async (
  req,
  res,
  next
) => {
  try {
    await updateUserById(req.params.userId, req.body);
    res.json({ message: 'Berhasil mengupdate user!', updatedUser: req.body });
  } catch (error) {
    next(error);
  }
};

export const deleteById: RequestHandler<{ userId: string }, { message: string; deletedUserId: string }> = async (
  req,
  res,
  next
) => {
  try {
    const { userId } = req.params;
    await deleteUserById(userId);
    res.json({ message: 'Berhasil menghapus user!', deletedUserId: userId });
  } catch (error) {
    next(error);
  }
};
