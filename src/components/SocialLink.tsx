import Image from "next/image";

interface SocialLinkProps {
  platform: "GitHub" | "LinkedIn" | "Twitter" | "YouTube";
  url: string;
  filepath: string;
}

const SocialLink = ({ platform, url, filepath }: SocialLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="socialLink"
    >
      <Image src={filepath} alt={platform} width={60} height={60} />
    </a>
  );
};

export default SocialLink;
