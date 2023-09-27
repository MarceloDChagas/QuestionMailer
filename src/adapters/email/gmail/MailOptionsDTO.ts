export class mailOptions {
  to: string;
  subject: string;
  body: string;
  from: string;
  html: string;

  constructor(data: mailOptions) {
    this.to = data.to;
    this.subject = data.subject;
    this.body = data.body;
    this.from = data.from;
    this.html = data.html;
  }
}
