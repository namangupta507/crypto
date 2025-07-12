import crypto from 'crypto';

const generateRandomString = (length = 25) => {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
};

export { generateRandomString };
