const nodemailer = require ('nodemailer')


module.exports = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'vamminfo@gmail.com',
        pass: 'informm19'
    }
});