import SocialLink from "@/components/SocialLink";

const ContactMePage = () => {
  return (
    <div>
      <h1 className="blog-title glitter-title">Contact Me</h1>
      <Business />
      <Personal />
    </div>
  );
};

const Business = () => {
  return (
    <div className="page-wrap">
      <h1 className="blog-subtitle glitter-title">For Business Inquiries</h1>
      <p>Business Email: mqzhou1008@gmail.com</p>
      <p>Phone Number: 778 522 0688</p>
    </div>
  );
};

const Personal = () => {
  return (
    <div className="page-wrap">
      <h1 className="blog-subtitle glitter-title">For Personal Inquiries</h1>
      <p>Personal Email: lolserverhascrashed@gmail.com</p>
      <p>Follow Me on:</p>
      <ul>
        <SocialLink
          platform="GitHub"
          url="https://github.com/AndrewZhouMQ123"
          filepath="/"
        />
        <SocialLink
          platform="LinkedIn"
          url="https://www.linkedin.com/in/andrew-zhou-8b4296326/"
          filepath="/"
        />
        <SocialLink
          platform="Twitter"
          url="https://x.com/KaojiOnline"
          filepath="/twitter-logo.png"
        />
        <SocialLink
          platform="YouTube"
          url="https://www.youtube.com/@andrewzhou4228"
          filepath="/youtube-logo.png"
        />
      </ul>
    </div>
  );
};

export default ContactMePage;
