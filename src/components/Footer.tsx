import Link from "next/link";
import buttonstyles from "@/app/ui/buttons.module.css";

const Footer = () => {
  return (
    <footer>
      <div className="legal-links">
        <Link className={buttonstyles.link} href="/terms">
          Terms of Service
        </Link>
        <Link className={buttonstyles.link} href="/privacy">
          Privacy Policy
        </Link>
        <Link className={buttonstyles.link} href="/refund">
          Refund Policy
        </Link>
        <Link className={buttonstyles.link} href="/dmca">
          DMCA & Copyright
        </Link>
        <Link className={buttonstyles.link} href="/cookies">
          Cookie Policy
        </Link>
        <Link className={buttonstyles.link} href="/aup">
          AUP
        </Link>
      </div>
      <div className="copyright">© 2025 Andrew Zhou. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
