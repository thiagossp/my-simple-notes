const crypto = require('crypto');

module.exports = function cryptoPassword(password, salt) {
    return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
}
