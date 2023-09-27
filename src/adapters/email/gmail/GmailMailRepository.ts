import dotenv from "dotenv";
import { IMailService } from "../IMailService";
import { mailOptions } from "./MailOptionsDTO";
import nodemailer from "nodemailer";

const user = process.env.GMAIL_USER;
const pass = process.env.GMAIL_PASSWORD;

export const from = user;
dotenv.config();
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  secure: true,
  auth: { user, pass },
});

export class GmailMailRepository implements IMailService {
  async sendMail(data: mailOptions): Promise<void> {
    transporter.sendMail(data, (error, info) => {
      console.log("Email enviado......");
      if (error) {
        console.error("Error:" + error);
      } else {
        console.log("Email enviado: " + info.response);
      }
    });
  }
}

export default GmailMailRepository;
