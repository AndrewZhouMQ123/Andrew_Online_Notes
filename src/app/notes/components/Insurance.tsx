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

export const Laws = [
  {
    name: "Insurance Act",
    ContentofInsurancePolicies: [
      "These following things must appear on the declarations page - usually the first page of all policies, sometimes called the DECK page.",
      "Parties to the contract",
      "Loss payable or payee",
      "All parties with insurable interest must be listed on policy",
      "Any who is able to receive a benefit from this policy must be listed on policy",
      "Policy Period",
      "Coverage & amount of insurance - coverages you have and their limits of insurance",
      "Subject matter - what is the property insured and where is it, usually involves a postal address",
      "Rates and premiums - people have to know how much it costs",
    ],
    BasicFirePolicyCoverage: [
      "All property policies must offer coverage for fire, and two additional perils.",
      `Any policy that insures against fire, must also insure against firefighting related damages,
      such as water damage done by sprinkler systems, building damage caused by firefighters
      - if they have to break down fire, and other damage done to prevent the spread of fire`,
      "2 types of fire: friendly & hostile.",
      "A friendly fire is deliberate and contained application of fire for beneficial purposes.",
      "A hostile fire is one that is not contained and has destructive effects.",
      "Only damaged caused by hostile fire is insurable.",
      `For example, if you have a fireplace, that is friendly fire.
      However, once a spark escapes and sets your carpet on fire, it is hostile fire.`,
      "Additional perils: lightning damage to property, explosion of coal, natural or manufactured gas.",
      "Exclusions: explosions of boilers of pressure vessels",
    ],
    RemovalClause: [
      `This covers your property for up to 7 days if you have to move it to another location not stated on the policy
      in order to prevent loss or further loss - this is called necessary removal.`,
      "Limits available at new location is the amount left after paying for the loss at the primary location.",
      "Limit is shared between the two locations.",
      "The removal clause is important because you usually have no coverage for property at unlisted location.",
    ],
    StandardLegislatedExclusions: [
      "Losses due to Application of Heat",
      "Losses due to Radiocative Contamination",
      "Electrical currents: electrical equipment damaged by power surge or lightning damage not covered. But the resultant fire is insured.",
      "Riot, insurrection, war, act of foreign enemy - not covered because they are deliberate acts of violence with potential of large losses.",
    ],
    StatutoryConditions: [
      "Rights & responsibilities of the parties written in law",
      "Misrepresentation: 1. False description of property 2. Misrepresentation of a Material Fact 3. Fradulent omission of a Material Fact",
      "Material Fact: impacts insurer's decision with potential for loss. If found related to loss = void coverage.",
      "Fraud: If found related to loss = void coverage.",
    ],
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
        remarks: [
          "Work with government on different initatives to prevent or reduce financial consequences of a loss.",
        ],
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
        remarks: [
          "For example, if you wanted to take a mortgage, you need to show you have insurance on the house.",
        ],
      },
      {
        name: "Source of Jobs and Capital",
        remarks: [
          "Insurance companies hire employees and invest their premium dollars.",
        ],
      },
    ],
  },
  {
    name: "Ways to Deal with Risk (CART)",
    items: [
      { name: "Control", remarks: [] },
      { name: "Avoidance", remarks: [] },
      { name: "Retention", remarks: [] },
      { name: "Transfer", remarks: [] },
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

export const InsuranceProducts = [];
