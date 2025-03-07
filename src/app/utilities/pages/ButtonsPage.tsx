import Image from "next/image";
import buttonstyles from "@/app/ui/buttons.module.css";
import pagestyles from "@/app/ui/accessories.module.css";

const buttonVariants = [
  { name: "Default", style: "" },
  { name: "Primary", style: "primary" },
  { name: "Secondary", style: "secondary" },
  { name: "Success", style: "success" },
  { name: "Danger", style: "danger" },
  { name: "Warning", style: "warning" },
  { name: "Info", style: "info" },
  { name: "Light", style: "light" },
  { name: "Dark", style: "dark" },
  { name: "Link", style: "link" },
  { name: "Undef", style: "undef" },
  { name: "Heavenly", style: "heavenly" },
  { name: "Ice", style: "ice" },
  { name: "Ocean", style: "ocean" },
  { name: "Guava", style: "guava" },
  { name: "Melon", style: "melon" },
  { name: "Yum-Yam", style: "yam" },
  { name: "Schema", style: "schema" },
  { name: "Gold", style: "goldenRidge" },
  { name: "Download", style: "download" },
  { name: "Email Me", style: "email" },
  { name: "Sign Up", style: "signUp" },
  { name: "Log In", style: "login" },
  { name: "Log Out", style: "logout" },
];

const wideButtons = [
  { name: "Get Started", style: "getStarted" },
  { name: "Add to Cart", style: "addToCart" },
  { name: "Submit", style: "submit" },
  { name: "JOIN", style: "join" },
  { name: "Message", style: "message" },
  { name: "Save", style: "save" },
];

const gradientButtons = [
  { name: "Primary", style: "primaryGrad" },
  { name: "Secondary", style: "secondaryGrad" },
  { name: "Success", style: "successGrad" },
  { name: "Danger", style: "dangerGrad" },
  { name: "Warning", style: "warningGrad" },
  { name: "Info", style: "infoGrad" },
  { name: "Light", style: "lightGrad" },
  { name: "Dark", style: "darkGrad" },
  { name: "Link", style: "linkGrad" },
];

const ButtonsTemplatePage = () => {
  return (
    <div className="page-wrap">
      <span className={pagestyles.blogTitle}>Buttons Template</span>

      <div className={buttonstyles.boxWrap}>
        {buttonVariants.map(({ name, style }) => (
          <button key={name} className={`${buttonstyles[style] || ""}`}>
            {name}
          </button>
        ))}
      </div>

      <div className={buttonstyles.boxWrap}>
        {buttonVariants.map(({ name, style }) => (
          <button key={name} className={`${buttonstyles.circleBtn} ${buttonstyles[style] || ""}`}>
            {name}
          </button>
        ))}
        <button className={`${buttonstyles.circleBtn} ${buttonstyles.recycling}`}>
          <Image src="/recycling.svg" width={36} height={36} alt="Recycling Icon" />
        </button>
      </div>

      <div className={buttonstyles.boxWrap}>
        {wideButtons.map(({ name, style }) => (
          <button key={name} className={`${buttonstyles.wideBtn} ${buttonstyles[style]}`}>
            {name}
          </button>
        ))}
      </div>

      <div className={buttonstyles.boxWrap}>
        {gradientButtons.map(({ name, style }) => (
          <button key={name} className={`${buttonstyles.avantGardeButton} ${buttonstyles[style]}`}>
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonsTemplatePage;