import PlayButton from "@/components/textToSpeechBtn";

const DMCAcopyright = () => {
  const title = "DMCA & Copyright Policy";
  const lastUpdated = "Last updated: March 7 2025";
  const reportingInfringement = `
    Reporting Copyright Infringement:
    If you believe content on our site infringes your copyright, please submit a DMCA takedown request at Contact with:
    Your contact details.
    A description of the copyrighted work.
    The URL of the infringing content.
    A statement that you have a good faith belief the use is unauthorized.
  `;
  const dmcaText = `${title}\n\n${reportingInfringement}`;

  return (
    <div className="page-wrap">
      <PlayButton text={dmcaText} />
      <h1 className="blog-subtitle">{title}</h1>
      <p className="blog-stats">{lastUpdated}</p>
      <span>Reporting Copyright Infringement</span>
      <p className="blog-description">{reportingInfringement}</p>
    </div>
  );
};

export default DMCAcopyright;
