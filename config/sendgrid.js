const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_APIKEY);

const message = {};
message.from = 'adam@overment.com';
message.mail_settings = {
    sandbox_mode: {
        enable: process.env.NODE_ENV !== 'production'
    }
};

exports.message = message;