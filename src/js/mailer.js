
import nodemailer from 'nodemailer';

const from = '"Materiałowo"'

function setup() {
    return  nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "b540b96f2b978c",
            pass: "1329d4d6102bdd"
        }
    });
}

export function sendConfirmationEmail(yourEmail, yourLink) {
    alert(yourEmail)
    const transport = setup();
    const email = {
        from,
        to: yourEmail,
        subject: "Masz jedno nowe zapytanie ofertowe!",
        text: ` Witaj, masz jedno zapytanie ofertowe. Swoją ofertę możesz przedstawić klikając w link: ${yourLink}`
    }
    transport.sendMail(email);
}