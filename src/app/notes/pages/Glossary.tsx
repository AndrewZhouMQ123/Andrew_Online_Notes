import InsuranceActViewer from "../components/InsuranceAct";
import CategoriesViewer from "../components/Categories";
import PropertyViewer from "../components/Property";
import HomeownersViewer from "../components/HomeownersForm";
import OtherHabitationForms from "../components/OtherHabForms";
import ExtraCoverages from "../components/ExtraCoverages";

const Glossary = () => {
  const Underwriter = {
    role: "person who assumes a risk in return for premium or an non-client facing employee of the insurance company who accepts/rejects insurance applications.",
    riskSelection:
      "Choose risks in favour (profitable) for insurer, i.e. the insured who will pay premiums on time but hardly ever claim",
    sourceOfInfo:
      "Application: risk/hazard info, Broker: personal/business reputation, Inspection Reports: commercial risk info such as from the Insurer's Advisory Organization, Loss Experience Data: specific to that class of risk.",
    physicalHazard: "premise related - construction, housekeeping, occupancy",
    moralHazard:
      "subjective characteristics - moral character, financial conditions, indifference to loss",
    ratemaking: "Difference prices for different risks.",
    policyHolderServices:
      "Paperwork: quotes, policies, processing renewals, cancellations and other paperwork and administrative activity",
    remarks: [
      "Your application to insurance company is like an offer, the insurance company can submit a counter offer.",
      "So when they issue policy, it might not exactly the same as what you requested on your application.",
      "If it differs, you have a few weeks usually to reject it or take some other action.",
      "Cost of Insurance: Based on location, Amount of Insurance, coverage, history of applicant, etc.",
    ],
  };

  const ClaimsAdjuster = {
    role: "Investigate loss, determines $ and settlement.",
    type: "Employee or Independent Contractor (more specialized losses or losses that occur in rural / remote areas)",
    claimProcess:
      "1. Insured reports to broker, 2. Broker reports to insurer, 3. Insurer assigns adjuster",
    brokerResponsibility:
      "1. Determines claim status, 2. Monitor progress, 3. Ensure client satisfaction.",
  };

  const UnderwritingHomeOwnersForms = {
    name: "Underwriting Homeowners Forms & Endorsements",
    def: "Replacement values of Dwelling Building: evaluation guide - gives basic limits",
    coverages: [
      "Coverage A - Dwelling Buildings: Replacement Cost Value",
      "Coverage B - Detached Private Structures: additional 10% of coverage A. ",
      "Coverage C - Personal Property: additional 70-90% of coverage A.",
      "Coverage D - Additional Living Expenses: additional 20% of coverage A. ",
      "Coverage E - Personal Liability: Smallest limit is $1 million but you can get more if you want.",
      "Coverage F - Voluntary Medical Payments: $1000/person",
      "Coverage G - Voluntary Property Damage Payments: $500/occurrence no deductible",
      "Coverage H - Voluntary Compensation for Residential Employees: per schedule. Give a list of all residential employees to the insurance company and set your limits based on that.",
      "Single limit policy: Combines coverage from A, B, C, D into one big limit.",
    ],
    endorsements: [
      "Watercraft",
      "Coin stamp collections",
      "Jewellery, furs",
      "Personal Computer",
      "Cameras",
      "Musical instruments, etc.",
    ],
  };

  return (
    <div>
      <CategoriesViewer />
      <InsuranceActViewer />

      <div className="page-wrap">
        <span className="topic-subtitle">Underwriter</span>
        <p className="def-text">
          <strong className="name-text">Role:</strong> {Underwriter.role}
        </p>
        <p className="def-text">
          <strong className="name-text">Risk Selection:</strong>{" "}
          {Underwriter.riskSelection}
        </p>
        <p className="def-text">
          <strong className="name-text">Source of Information:</strong>{" "}
          {Underwriter.sourceOfInfo}
        </p>
        <p className="def-text">
          <strong className="name-text">Physical Hazard:</strong>{" "}
          {Underwriter.physicalHazard}
        </p>
        <p className="def-text">
          <strong className="name-text">Moral Hazard:</strong>{" "}
          {Underwriter.moralHazard}
        </p>
        <p className="def-text">
          <strong className="name-text">Rate Making:</strong>{" "}
          {Underwriter.ratemaking}
        </p>
        <p className="def-text">
          <strong className="name-text">Policy Holder Services:</strong>{" "}
          {Underwriter.policyHolderServices}
        </p>
        <span className="blog-subtitle">Remarks:</span>
        <ul>
          {Underwriter.remarks.map((remark, index) => (
            <li className="blog-description" key={index}>
              {remark}
            </li>
          ))}
        </ul>
      </div>

      <div className="page-wrap">
        <span className="topic-subtitle">Claims Adjuster</span>
        <p className="def-text">
          <strong className="name-text">Role:</strong> {ClaimsAdjuster.role}
        </p>
        <p className="def-text">
          <strong className="name-text">Type:</strong> {ClaimsAdjuster.type}
        </p>
        <p className="def-text">
          <strong className="name-text">Claim Process:</strong>{" "}
          {ClaimsAdjuster.claimProcess}
        </p>
        <p className="def-text">
          <strong className="name-text">Broker Responsibility:</strong>{" "}
          {ClaimsAdjuster.brokerResponsibility}
        </p>
      </div>

      <PropertyViewer />
      <HomeownersViewer />

      <div className="page-wrap">
        <span className="topic-subtitle">Underwriting Homeowners Forms</span>
        <strong className="name-text">
          {UnderwritingHomeOwnersForms.name}
        </strong>
        <p className="def-text">
          <strong className="name-text">Description:</strong>{" "}
          {UnderwritingHomeOwnersForms.def}
        </p>
        <span className={"name-text" + " " + "blog-subtitle"}>Coverages</span>
        <ul>
          {UnderwritingHomeOwnersForms.coverages &&
            UnderwritingHomeOwnersForms.coverages.map(
              (coverage, coverageIndex) => (
                <li key={coverageIndex} className="def-text">
                  {coverage}
                </li>
              )
            )}
        </ul>
        <span className={"name-text" + " " + "blog-subtitle"}>
          Endorsements
        </span>
        <ul>
          {UnderwritingHomeOwnersForms.endorsements &&
            UnderwritingHomeOwnersForms.endorsements.map(
              (endorsement, endorsementIndex) => (
                <li key={endorsementIndex} className="def-text">
                  {endorsement}
                </li>
              )
            )}
        </ul>
      </div>

      <OtherHabitationForms />
      <ExtraCoverages />
    </div>
  );
};

export default Glossary;
