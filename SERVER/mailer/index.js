const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(__dirname, "../.env") });


const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const handlebarOptions = {
  viewEngine: {
    defaultLayout: false,
  },
  viewPath: path.resolve(__dirname, "emails"),
  extName: ".handlebars",
};

transporter.use("compile", hbs(handlebarOptions));

const sendEmail = async (template, context, to_email) => {
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: to_email,
    subject: "Welcome!",
    template: template,
    context: context,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;