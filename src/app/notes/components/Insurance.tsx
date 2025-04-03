export const Definitions = [
  {
    term: "Insurance",
    def: `an undertaking by one party to indemnify another if a specific peril damages an object of insurance`,
    remarks: [
      "An agreement between the insurance company and the insured to transfer risk",
      `A contract that allows the insured to transfer risk to the insurance company.`,
      `The insurance company promises to pay when a specific peril damages an object of insurance,
      or when the insured causes losses to other people.`,
      `Insurance will also only pay for accidental losses that happen after the agreement starts.
      No coverage for things that happen before you bought insurance,
      and no coverage intentional losses, catastrophic losses and expected losses.`,
      `The principle of indemnity states that the victim will be compensated the actual amount of loss sustatined (no more, no less)`,
      "Payment can be in the form of money or repair / replace.",
    ],
  },
  {
    term: "Indemnify",
    def: "a sum paid in compensation.",
  },
  {
    term: "Specific Peril",
    def: "",
  },
  {
    term: "Object of Insurance",
    def: "",
  },
  {
    term: "Liability",
    def: "injury or damage the insured is legally responsible for",
  },
  { term: "Catastrophic losses", def: "" },
  { term: "Intentional losses", def: "losses from things you do on purpose." },
  {
    term: "Expected losses",
    def: "losses that occur in the regular course of business",
  },
  {
    term: "Solvency",
    def: "the ability to meet financial obligations - enough cash and assets",
  },
];

export const Roles = [
  {
    role: "Insurer",
    responsiblity: [
      "Must maintain solvency - enough cash and assets to meet financial obligations, otherwise suspended.",
      "Hold premiums in trust and return any unearned premiums.",
      "Premiums are earned pro-rata (proportional to policy period), and is considered fully earned on policy expiry.",
    ],
  },
  {
    role: "Insured",
    responsiblity: [],
  },
  {
    role: "Fiduciary",
    responsibility: [
      "A fiduciary is someone who handles other people's money.",
      "Everyone in the insurance industry is considered a fiduciary.",
    ],
  },
  {
    role: "Office of the Superintendent of Financial Institutions (OSI)",
    responsibility: [
      "Federal level.",
      "Licenses insurers that operate in multiple provinces.",
      "Monitors & sets financial standards to ensure the stability of the insurance industry in Canada.",
    ],
  },
  {
    role: "BC Superintendent of Financial Institutions",
    responsibility: [
      "Provincial level.",
      "Other provinces regulators go by the same name as the Federal OSI.",
      "Regulate and approve insurance policy terms / wordings.",
      "Licenses insurers, brokers, & adjusters",
      "Monitors financial stability (solvency) of BC insurers",
      "Administer the Insurance Act",
    ],
  },
  {
    role: "Property & Casualty Insurance Compensation Corporation PACICC",
    responsibility: [
      "Covers policyholders even when the insurance company goes bankrupt",
      "PACICC will pay up to $250000 per claim",
      "Refund premiums: maximum refund is 70% of premium with a refund limit of $700",
    ],
  },
];

export const InsuranceAct = [
  {
    name: "Content of Insurance Policies",
    description:
      "These following things must appear on the declarations page - usually the first page of all policies, sometimes called the DECK page.",
    context: [
      {
        section: "Contract Information",
        items: [
          {
            name: "Parties to the contract",
            definition:
              "All parties involved in the insurance contract must be clearly listed on the declarations page.",
          },
          {
            name: "Loss payable or payee",
            definition:
              "Any who is able to receive a benefit from this policy must be listed on policy",
          },
          {
            name: "InsurableInterest",
            definition:
              "All parties with an insurable interest in the policy must be listed. This includes anyone who stands to benefit from the policy.",
          },
        ],
      },
      {
        section: "Policy Details",
        items: [
          {
            name: "PolicyPeriod",
            definition:
              "The start and end dates of the coverage period must be clearly stated on the declarations page.",
          },
          {
            name: "Coverage & amount of insurance",
            definition:
              "The coverages provided by the policy, along with their limits, must be outlined in detail.",
          },
          {
            name: "Subject Matter",
            definition:
              "The property insured and its location must be identified, usually including a postal address.",
          },
          {
            name: "Rates And Premiums",
            definition:
              "The policy must disclose the rates and premiums to ensure the insured knows how much they are paying.",
          },
        ],
      },
    ],
  },
  {
    name: "Basic Fire Policy Coverage",
    description:
      "All property policies must offer coverage for fire, and two additional perils.",
    context: [
      {
        section: "Fire Coverage",
        items: [
          {
            name: "FirefightingRelatedDamages",
            definition:
              "Any policy that insures against fire, must also insure against firefighting related damages, such as water damage done by sprinkler systems, building damage caused by firefighters, and other damage done to prevent the spread of fire.",
          },
          {
            name: "Fire Types",
            definition: "There are two types of fire: friendly & hostile.",
          },
        ],
      },
      {
        section: "Fire Type Explanation",
        items: [
          {
            name: "Friendly fire",
            definition:
              "Deliberate and contained application of fire for beneficial purposes.",
          },
          {
            name: "Hostile fire",
            definition:
              "Not contained and has destructive effects. Only damage caused by hostile fire is insurable.",
          },
          {
            name: "Type of Fire Example",
            definition:
              "If you have a fireplace, that is friendly fire. However, once a spark escapes and sets your carpet on fire, it is hostile fire.",
          },
        ],
      },
      {
        section: "Additional Perils and Exclusions",
        items: [
          {
            name: "Additional perils",
            definition:
              "Lightning damage to property, explosion of coal, natural or manufactured gas.",
          },
          {
            name: "Exclusions",
            definition:
              "Explosions of boilers or pressure vessels are excluded from coverage.",
          },
        ],
      },
    ],
  },
  {
    name: "Removal Clause",
    description:
      "Covers your property for up to 7 days for necessary removal. You usually have no coverage for property at unlisted location.",
    context: [
      {
        section: "Removal Details",
        items: [
          {
            name: "Necessary Removal",
            definition:
              "You have to move property to another location not stated on the policy in order to prevent loss or further loss.",
          },
          {
            name: "Coverage Limit",
            definition:
              "Limit is shared between the two locations. Limits available at new location is amount left after paying for the loss at the primary location.",
          },
        ],
      },
    ],
  },
  {
    name: "Standard Legislated Exclusions",
    description: "Losses not covered.",
    context: [
      {
        section: "Exclusions Details",
        items: [
          {
            name: "Application of Heat",
            definition:
              "Losses due to the application of heat, such as those from fire or high-temperature environments, are excluded from coverage.",
          },
          {
            name: "Radioactive Contamination",
            definition:
              "Losses resulting from radioactive contamination are not covered under the policy.",
          },
          {
            name: "Electrical Currents",
            definition: [
              "Losses caused by electrical currents, such as damage to electrical equipment from a power surge or lightning, are excluded.",
              "However, the resultant fire from such an event is still covered.",
            ],
          },
          {
            name: "Deliberate Acts of Violence",
            definition:
              "Losses caused by riots, insurrection, war, or acts of foreign enemies are not covered.",
          },
        ],
      },
    ],
  },
  {
    name: "Statutory Conditions",
    description: "Rights & responsibilities of the parties written in law.",
    context: [
      {
        section: "Misrepresentation",
        items: [
          {
            name: "False description",
            definition:
              "False description of property to the prejudice of the insurer and causes harm to the insurer.",
          },
          {
            name: "Fraudulent omissions",
            definition:
              "Misrepresentation of a Material Fact, or fraudulent omission of a Material Fact.",
          },
          {
            name: "Accidental omissions",
            definition:
              "Not misrepresentation if it does not disadvantage the insurer. Accidental omissions don't count either.",
          },
        ],
      },
      {
        section: "Fraud and Misrepresentation",
        items: [
          {
            name: "Fraud",
            definition:
              "Claim for loss to an item you never had. If found related to loss, it voids coverage.",
          },
          {
            name: "Material Fact",
            definition:
              "Impacts insurer's decision. For example, loss history, previous cancellations, or denials of insurance. If found related to loss, void coverage.",
          },
        ],
      },
      {
        section: "Loss Reporting and Responsibilities",
        items: [
          {
            name: "Requirements upon Loss",
            definition: [
              "Notice of loss ASAP.",
              "Proof of loss.",
              "Inventory of undamaged property, produce required items.",
            ],
          },
          {
            name: "Who can give Notice / Proof of Loss",
            definition: [
              "Either the insured & agent of insured (authorized individual), or anyone with an insurable interest if insured refuses.",
            ],
          },
          {
            name: "Termination Responsibilities",
            definition: [
              "Insured: notify insurer & premium refund on short rate basis.",
              "Insurer: provide written notice (15 days via mail, 5 days hand delivered), & refund premium on pro-rata basis.",
            ],
          },
        ],
      },
      {
        section: "Claims and Legalities",
        items: [
          {
            name: "Short rate",
            definition:
              "Proportional to remaining length of policy - administration fee = final.",
          },
          {
            name: "Notice",
            definition: [
              "Insured and insurer must send to correct address.",
              "Insured sends to provincial head office or chief agency of insurance company.",
              "Insurer sends to last known address of insured.",
            ],
          },
        ],
      },
    ],
  },
];

export const ContractLaw = [
  {
    name: "Contract",
    definition: "Legally enforceable agreement",
  },
  {
    name: "Legally Enforceable",
    definition: "Courts agree to enforce terms of the contract",
  },
  {
    name: "Common Elements of All contracts",
    definition:
      "Agreement, Genuine Intention, Consideration, Legality of Object, Legal Capacity of the Parties",
    remarks:
      "Contract must meet all common elements. Note in insurance industry, insurance companies can make what is called a counter offer.",
  },
  {
    name: "Agreement",
    definition:
      "Offer made & accepted (all terms agreed to & no further negotiations).",
  },
  {
    name: "Genuine Intention",
    definition: "All parties freely enter & are aware of all the terms.",
  },
  {
    name: "Consideration",
    definition:
      "All parties bring something of value - everything is benefiting from this agreement.",
  },
  {
    name: "Legality of Object",
    definition: "Purpose of Contract must be legal.",
  },
  {
    name: "Legal Capacity of the Parties",
    definition:
      "All parties must have an equal understanding of the obligations undertaken.",
    remarks: [
      "Minors are only able to contract for necessities - utilities, or if they inherited a home - insurance contract to insure their home.",
      "Mental incompetent have no legal capacity - cannot enter into contracts",
      "Trade Names cannot enter contract because they have no legal status.",
      "If you do want to sign a contract under a trade name, you must attach it to a legal entity.",
      "Ex: if you had a bakery called Fragrant Bakery, you wanted to sign a contract, you have to sign it as your name DBA Fragrant Baker.",
      "Corporations can enter contract because they are considered to have legal status separate from the owners.",
    ],
  },
  {
    name: "Counter Offer",
    definition:
      "Your application to insurance company is like an offer, the insurance company can submit a counter offer.",
    remarks: `So when they issue policy, it might not exactly the same as what you requested on your application.
      If it differs, you have a few weeks usually to reject it or take some other action.`,
  },
  {
    name: "Elements Special To Insurance Contracts",
    definition: "Insurable Interest, Indemnity, Utmost Good Faith.",
    remarks:
      "Insurance contracts must meet both common and special elements of contract otherwise VOID.",
  },
  {
    name: "Insurance Interest",
    definition:
      "So only those who actually suffer loss, are entitled to benefit from the policy.",
  },
  {
    name: "Indemnity",
    definition:
      "Indemnity establishes the amount of entitlement - how much of this do I own, how much of it will I get",
    remarks: "Remember you only get paid the actual amount of loss.",
  },
  {
    name: "Utmost Good Faith",
    definition:
      "Both parties must be fully honest and comply with all terms and conditions exactly.",
  },
  {
    name: "Changing an Insurance Contract",
    definition:
      "3 ways: Floater, Rider, Endorsement. If they don't satisfy your needs, you have to choice to purchase a separate policy.",
    remarks:
      "Must be done in writing, and both parties must agree to the changes.",
  },
  {
    name: "Floater",
    definition:
      "Insures mobile property or property that floats around - cellphones, contractor tools or equipment.",
  },
  {
    name: "Rider",
    definition:
      "Adds coverage on top of existing policy - pay additional premium.",
  },
  {
    name: "Endorsement",
    definition:
      "Issues by the insurance company to show that some changes has been made to the insurance contract.",
  },
  {
    name: "Separate Policy",
    definition:
      "Usually used for special property risks, like buildings under construction, automobiles, or aircraft.",
  },
  {
    name: "Binder",
    definition:
      "Interim policy insurance, issued when broker commits the insurer to a contract without checking with insurer.",
    remarks:
      "Shortcut application process - broker makes decision and just say yes on behalf of insurance company.",
  },
  {
    name: "Agency Agreement",
    definition:
      "Gives broker authority to commit insurer to a contract (subject to limit/conditions)",
    remarks:
      "Brokers cannot bind everything. For example they cannot bind business that is very high value or high risk.",
  },
];

export const Categories = [
  {
    name: "Core Functions of Insurance",
    items: [
      {
        name: "Spread Risk",
        remarks: [
          "Most important function.",
          "Insurance spreads out the financial consequences of a risk amongst many parties.",
          "The idea is that everyone pays premiums into the pool every month and claims are paid out from that pool when a member has a loss.",
        ],
      },
      {
        name: "Loss Prevention / Reduction Measures",
        remarks:
          "Work with government on different initatives to prevent or reduce financial consequences of a loss.",
      },
      {
        name: "Peace of Mind ",
        remarks: [
          "Helps eliminate worries and lets people take risks.",
          "Pay a small fixed amount to defend yourself from large uncertain losses.",
        ],
      },
      {
        name: "Supply Credit",
        remarks:
          "For example, if you wanted to take a mortgage, you need to show you have insurance on the house.",
      },
      {
        name: "Source of Jobs and Capital",
        remarks:
          "Insurance companies hire employees and invest their premium dollars.",
      },
    ],
  },
  {
    name: "Types of Risks",
    items: [
      {
        name: "Personal",
        remarks: ["Financial hardship", "accident", "sickness", "death"],
      },
      { name: "Property", remarks: "Tangible property damage / destruction" },
      {
        name: "Liability",
        remarks:
          "Actions of an individual or a business that result in injury/damage to others",
      },
    ],
  },
  {
    name: "Types of Financial Risks",
    items: [
      {
        name: "Pure Risk",
        remarks: ["Can only lose", "Ex: house catch fire"],
      },
      {
        name: "Speculative Risk",
        remarks: ["Might win or lose", "Ex: investing, gambling"],
      },
    ],
  },
  {
    name: "Ways to Deal with Risk (CART)",
    items: [
      {
        name: "Control",
        remarks: [
          "Reduce frequency and severity of loss.",
          "Ex: installing sprinkler systems, alarms, or other security measures.",
          "Cannot control everything - for example probability of an earthquake",
        ],
      },
      {
        name: "Avoidance",
        remarks: [
          "Avoid the activity",
          "Not practical",
          "Ex: If you run a pizza restaurant and you are worried about your delivery person hitting someone while out on a delivery, you can choose not to do delivery.",
        ],
      },
      {
        name: "Retention",
        remarks: [
          "Pay for losses yourself out of pocket",
          "Not practical",
          "Need a lot of money",
        ],
      },
      {
        name: "Transfer",
        remarks: [
          "Shift risk to someone else",
          "When you purchase insurance, you shift the financial risk of a loss to the insurance company",
        ],
      },
    ],
  },
  {
    name: "General Insurance Categories",
    items: [
      {
        name: "Automobile Insurance",
        remarks: [
          "Insure Licensed Motor Vehicles.",
          "Required by Law therefore is largest market.",
        ],
      },
      {
        name: "Property Insurance",
        remarks: [
          "Second largest market.",
          "Insure personal and business property.",
        ],
      },
      {
        name: "Liability Insurance",
        remarks: [
          "Provides financial protection for when the insured is found legally responsible for causing injury or damage.",
        ],
      },
    ],
  },
  {
    name: "Types of Insurer",
    items: [
      {
        name: "Government Insurance",
        remarks: [
          "EI (Employment Insurance), provincial health plan, worker's compensation etc.",
          "Usually compulsory.",
        ],
      },
      {
        name: "Stock Companies",
        remarks: ["Owned by shareholders.", "Profit oriented."],
      },
      {
        name: "Mutual Companies",
        remarks: [
          "Owner by policyholders.",
          "Not profit oriented like cooperative.",
          "Aim to break even and usually provide cheapest insurance.",
          "If the company losses money, the policyholders have to pay in to make up the shortfall.",
          "If there are any extra money left over, the policyholders get paid the dividends.",
        ],
      },
    ],
  },
  {
    name: "Insurance Distribution",
    items: [
      {
        name: "Direct Writer",
        remarks: [
          "Insurance company sells its own products directly to customers",
          "Insurance company employ their own salesforce",
          "Clients belong to insurance company",
          "Employees - receives salary, bonus, commissions (or a mix)",
        ],
      },
      {
        name: "Independent Broker",
        remarks: [
          "Represents 1+ insurer",
          "Sells insurance products and earn a commission.",
          "Fiduciary responsibility of a broker is to hold commissions in trust & return unearned commissions.",
          "Pay their own personal expenses",
          "Any clients brought in by the broker, belongs to the broker.",
          "Some underwriting, quoting, claims power.",
        ],
      },
      {
        name: "Agency System",
        remarks: [
          "Small business owners and own their own book of business..",
          "Example would be Safe farm or cooperators.",
          "1 insurer & facility.",
          "Typically only represent one insurance company as well as the facility association.",
        ],
      },
      {
        name: "Lloyd's of London",
        remarks: [
          "Syndicate of underwriters.",
          "Insure things that are normally uninsurable in normal markets, weird things and high risk things.",
          "Technically speaking anyone can become a Lloyd's underwriter as long as they meet certain financial requirements.",
          "Underwriting agent is the one who manages the syndicate and they appoint someone called the lead underwriter.",
          "The Lloyd's syndicate does a class of business and the lead underwriter is an expert in that class of business.",
          "For example, if you had a Llyod's syndicate that is specialized in writing pharmaceutical businesses.",
          "The lead underwriter would be an expert in pharmaceutical businesses.",
          "The producer would provide a broker with underwriting information on something called a slip - in essence this is an application.",
          "The underwriters then commit to a certain % of the risk until the policy is 100% subscribed",
          "For example, you can have 5 underwriters commiting to 20% each",
        ],
      },
    ],
  },
];

export const InsuranceProcess = [];
