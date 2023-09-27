import { mailOptions } from "./gmail/MailOptionsDTO";

export interface IMailService {
  sendMail(data: mailOptions): Promise<void>;
}
