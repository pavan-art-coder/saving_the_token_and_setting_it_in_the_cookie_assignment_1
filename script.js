const jwt = require('jsonwebtoken');
const crypto = require('crypto');
require('dotenv').config()

const secertkey=process.env.secertkey
// Secret key for encryption/decryption
 // Make sure to keep this secret and use an environment variable for real use

// Encrypt function: Generates a JWT (token)
const encrypt = (payload) => {
  // The payload is the data you want to encrypt into a JWT
  // Here, we are using the 'HS256' algorithm
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // JWT expires in 1 hour
  return token;
};

// Decrypt function: Verifies and decodes the JWT to get the original payload
const decrypt = (token) => {
  try {
    // Decoding the token using the secretKey
    const decoded = jwt.verify(token, secretKey);
    return decoded;  // Returns the original payload (data)
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

module.exports = {
  encrypt,
  decrypt
};
