import bcrypt from 'bcryptjs';

export const classSwitch = (...classes: string[]) => {
  return classes.join(' ');
};

export const passwordEncrypt = (password: string) => {
  return bcrypt.hashSync(password, 5);
};
