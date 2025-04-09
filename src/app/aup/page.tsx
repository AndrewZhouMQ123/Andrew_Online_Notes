import PlayButton from "@/components/textToSpeechBtn";

const AUP = () => {
  const title = "Acceptable Use Policy (AUP)";
  const lastUpdated = "Last updated: March 7 2025";
  const prohibitedActivities = `
    Prohibited Activities:
    No illegal or unauthorized use.
    No spamming, hacking, or attempting to disrupt services.
  `;
  const enforcement = `
    Enforcement:
    Violations of this policy may result in termination of access to our services.
  `;
  const changesToAUP = `
    Changes to the AUP:
    We reserve the right to update this policy at any time. For any questions, contact us at Contact.
  `;
  const aupText = `${title}\n\n${prohibitedActivities}\n\n${enforcement}\n\n${changesToAUP}`;

  return (
    <div className="page-wrap">
      <PlayButton text={aupText} />
      <h1 className="blog-subtitle">{title}</h1>
      <p className="blog-stats">{lastUpdated}</p>
      <span>Prohibited Activities</span>
      <p>{prohibitedActivities}</p>
      <span>Enforcement</span>
      <p>{enforcement}</p>
      <span>Changes to the AUP</span>
      <p>{changesToAUP}</p>
    </div>
  );
};

export default AUP;
