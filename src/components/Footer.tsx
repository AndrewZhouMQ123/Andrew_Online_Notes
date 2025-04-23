import Link from "next/link";
import buttonstyles from "@/app/ui/buttons.module.css";

const Footer = () => {
  return (
    <footer>
      <div className="legal-links">
        <Link className={buttonstyles.link} href="/Terms">
          Terms of Service
        </Link>
        <Link className={buttonstyles.link} href="/Privacy">
          Privacy Policy
        </Link>
        <Link className={buttonstyles.link} href="/Refund">
          Refund Policy
        </Link>
        <Link className={buttonstyles.link} href="/DMCA">
          DMCA & Copyright
        </Link>
        <Link className={buttonstyles.link} href="/Cookies">
          Cookie Policy
        </Link>
        <Link className={buttonstyles.link} href="/AUP">
          AUP
        </Link>
      </div>
      <div className="copyright">© 2025 Andrew Zhou. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
