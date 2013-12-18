
import java.util.Properties;

import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.junit.Before;
import org.junit.Test;

public class TestEmail {

    private Properties props = new Properties();

    @Before
    public void ini() {
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.socketFactory.port", "465");
        props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.port", "465");

        props.put("mail.smtp.user", "user@gmail.com");
        props.put("mail.smtp.debut", "true");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");

    }

    @Test
    public void testScenarioOne() {

        // SMTPAuthenticator smtpAuthenticator = new SMTPAuthenticator();
        // Session session = Session.getDefaultInstance(props,
        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("user@gmail.com", "passwordXXX");
            }
        });
        try {
            session.setDebug(true);
            Message message = new MimeMessage(session);
            String adminUser = "user@gmail.com";
            // Setting the 'from', 'to', 'cc' addresses and the 'subject'
            // for testing purpouse only
            // message.setFrom(new InternetAddress("Erick.Brito @XYZ.com"));
            message.setFrom(new InternetAddress(adminUser));
            String to = "erick.brito@my.company.com";
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

            String subject = "test subject";
            message.setSubject(subject);
            // Making the mail body as inline and of html type
            MimeMultipart mp = new MimeMultipart("mixed");
            MimeBodyPart messageBodyPart = new MimeBodyPart();
            messageBodyPart.setHeader("Content-Type", "text/plain; charset=\"utf-8\"");
            String mailText = "<html><body><h1>hola</h1>Esto es una prueba</body></html>";
            messageBodyPart.setContent(mailText, "text/html");
            mp.addBodyPart(messageBodyPart);
            /*
             * MimeBodyPart attachBodyPart = new MimeBodyPart(); //adding the image:
             * attachBodyPart.setHeader( "Content-ID", "<imageLogo>" );
             * attachBodyPart.setDisposition(Part. INLINE); attachBodyPart.attachFile(fileToAttach
             * ); mp.addBodyPart(attachBodyPart);
             */
            message.setContent(mp);
            // SMTP authentication
            // Transport transport = session.getTransport (" smtp") ;
            // for testing purpouse only
            // transport.connect ("email.mycompany.com", " blblbaadmin", "zxcvbnm1234567890!") ;
            // transport.connect (mailServer, adminUser, adminPass) ;
            /*
             * Transport transport = getEmailTransport(session ); message.saveChanges(); // to be
             * reviewed transport.sendMessage(message, message.getAllRecipients());
             * transport.close();
             */

            // Transport.send(message);
            Transport transport = session.getTransport("smtps");
            transport.connect("smtp.gmail.com", 465, "user@gmail.com", "password123");
            transport.send(message, message.getAllRecipients());
            transport.close();

        } catch (Exception e) {
            System.err.println("Email could not be sent due to error: " + e);

        }

    }

}
