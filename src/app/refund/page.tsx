import PlayButton from "@/components/textToSpeechBtn";

const Refund = () => {
  const title = "Refund Policy";
  const lastUpdated = "Last updated: March 7 2025";
  const refundEligibility = `
    Refund Eligibility:
    Payments for digital services (e.g., Patreon support, downloadable content) are generally non-refundable.
    If a service is defective or unavailable due to our fault, you may request a refund within 14 days.
    Refund requests must be submitted via Contact.
  `;
  const nonRefundableItems = `
    Non-Refundable Items:
    Donations made through Patreon or other voluntary contributions.
    Any digital content that has already been downloaded or accessed.
  `;
  const refundText = `${title}\n\n${refundEligibility}\n\n${nonRefundableItems}`;

  return (
    <div className="page-wrap">
      <PlayButton text={refundText} />
      <h1 className="blog-subtitle">{title}</h1>
      <p className="blog-stats">{lastUpdated}</p>
      <span>Refund Eligibility</span>
      <p className="blog-description">{refundEligibility}</p>
      <span>Non-Refundable Items</span>
      <p className="blog-description">{nonRefundableItems}</p>
    </div>
  );
};

export default Refund;
