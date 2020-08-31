
import nodemailer from 'nodemailer';

const from = '"Materiałowo"'

function setup() {
    return  nodemailer.createTransport({
        //tutaj ma być dane mailingu. które
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