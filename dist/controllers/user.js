import User from '../models/user';
import { createUser } from '../services/user';
export const create = async (req, res) => {
    const body = req.body;
    const { email, name, password } = body;
    const newUser = new User(email, name, password);
    await createUser(newUser);
    res.json({ message: 'Berhasil membuat user baru!', createdUser: newUser });
};
export const getById = async (req, res) => {
    const user = new User('asd@asd.com', 'Robin', '123');
    res.json({ message: `Params: ${req.params.userId}`, user });
};
