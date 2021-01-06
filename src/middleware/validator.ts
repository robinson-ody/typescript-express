import { NextFunction } from 'connect';
import { Request, Response } from 'express-serve-static-core';
import { check, validationResult } from 'express-validator';

export default {
  login: [
    check('email')
      .exists({ checkFalsy: true })
      .withMessage('Silahkan isi nama Anda')
      .bail()

      .isEmail()
      .withMessage('Format email salah.'),

    check('password')
      .exists({ checkFalsy: true })
      .withMessage('Silahkan isi nama Anda')
      .bail()

      .isLength({ min: 8 })
      .withMessage('Password minimal memiliki 8 karakter.'),
  ],

  validate: (req: Request, res: Response, next: NextFunction) => {
    const error = validationResult(req).formatWith(({ msg }) => msg);
    const hasError = !error.isEmpty();
    if (hasError) return res.status(422).json({ message: error.array() });
    return next();
  },
};
