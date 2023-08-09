// run this script if you want to check if computer didn't change his move after user

// Node ARGUMENTS:
// 1. HMAC
// 2. HMAC KEY
// 3. Computer move (string)
// node check-key.js HMAC KEY COMPUTERMOVE

import crypto from 'crypto';
const [givenHmac, key, computerMove] = process.argv.slice(2);

const hmac = crypto.createHmac('sha256', key);
hmac.update(computerMove);
const hmacString = hmac.digest('hex');

console.log(
   givenHmac === hmacString ? 'HMACs are the same' : 'Hmacs are different!'
);
