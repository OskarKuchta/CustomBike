import { FC } from "react";
import { Link } from "react-router-dom";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";
const Contact: FC = () => {
  const emailAddress: string = "abcde@gmail.com";
  const subject: string = "Pytania odnośnie produktów";
  const fadeInAnimation = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section className="contact-page flex flex-col pt-32 items-center black-background text-limon min-h-screen">
      <h2 className="text-4xl ">Kontakt ze mną:</h2>
      <aside className="contact-options flex flex-col md:flex-row w-4/5">
        <motion.div
          variants={fadeInAnimation}
          initial="hidden"
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1 },
          }}
          className="contact-phone mt-8 flex flex-col items-center w-full text-center"
        >
          <Link
            to="tel:+48123456789"
            className="hover:text-white focus:outline-none focus:text-white transition-all duration-500"
          >
            <PhoneInTalkIcon
              style={{
                fontSize: "4rem",
              }}
            />
          </Link>
          <h4 className="md:px-8 mt-6">
            Jeżeli chciałbyś/chciałabyś uzgodnić kilka kwestii, dzwoń pod numer{" "}
            {""}
            <Link
              to="tel:+48123456789"
              className="hover:text-white focus:outline-none focus:text-white transition-all duration-500"
            >
              +48 123 456 789
            </Link>
            .
          </h4>
        </motion.div>
        <motion.div
          variants={fadeInAnimation}
          initial="hidden"
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 2 },
          }}
          className="contact-mail mt-8 flex flex-col items-center w-full text-center"
        >
          <Link
            className="hover:text-white focus:outline-none focus:text-white transition-all duration-500"
            to={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`}
          >
            <MailOutlineIcon
              style={{
                fontSize: "4rem",
              }}
            />
          </Link>
          <h4 className="md:px-8 mt-6">
            W razie braku odezwu na numer telefonu zostaw swoją wiadomość na
            mailu. Adres:{" "}
            <Link
              className="hover:text-white focus:outline-none focus:text-white transition-all duration-500"
              to={`mailto:${emailAddress}?subject=${encodeURIComponent(
                subject
              )}`}
            >
              {emailAddress}
            </Link>
            .
          </h4>
        </motion.div>
        <motion.div
          variants={fadeInAnimation}
          initial="hidden"
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 3 },
          }}
          className="contact-facebook mt-8 flex flex-col items-center w-full text-center"
        >
          <Link
            to="https://www.facebook.com"
            target="blank"
            className="hover:text-white focus:outline-none focus:text-white transition-all duration-500"
          >
            <FacebookIcon
              style={{
                fontSize: "4rem",
              }}
            />
          </Link>
          <h4 className="md:px-8 mt-6">
            Zapraszam także do kontaktu przez Facebook, wystarczy{" "}
            <Link
              to="https://www.facebook.com/oskar.kuchta.39/"
              className="hover:text-white focus:outline-none focus:text-white transition-all duration-500"
            >
              kliknąć tutaj
            </Link>
            .
          </h4>
        </motion.div>
      </aside>
    </section>
  );
};

export default Contact;
