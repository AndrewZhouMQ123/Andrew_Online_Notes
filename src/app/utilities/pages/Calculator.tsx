"use client";
import React, { useState } from "react";
import styles from "@/app/ui/calculator.module.css";
import buttonStyles from "@/app/ui/buttons.module.css";

// Insurance Item Calculators
const Coinsurance = () => {
  const [lossAmount, setLossAmount] = useState("");
  const [limitDidBuy, setLimitDidBuy] = useState("");
  const [limitShouldBuy, setLimitShouldBuy] = useState("");
  const [settlement, setSettlement] = useState(0);

  const calculateSettlement = () => {
    const loss = parseFloat(lossAmount);
    const didBuy = parseFloat(limitDidBuy);
    const shouldBuy = parseFloat(limitShouldBuy);

    if (!shouldBuy || isNaN(loss) || isNaN(didBuy)) {
      setSettlement(0);
      return;
    }

    const result = (didBuy / shouldBuy) * loss;
    setSettlement(result);
  };

  return (
    <div className="page-wrap">
      <div className="space-y-4 max-w-md">
        <h3 className="blog-subtitle">Calculate Co-Insurance</h3>
        <div className="flex items-center gap-2">
          <label className="text-lg font-medium">$</label>
          <input
            type="number"
            placeholder="Loss Amount"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={lossAmount}
            onChange={(e) => setLossAmount(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-lg font-medium">$</label>
          <input
            type="number"
            placeholder="Limit You Bought"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={limitDidBuy}
            onChange={(e) => setLimitDidBuy(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-lg font-medium">$</label>
          <input
            type="number"
            placeholder="Limit You Should Have Bought"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={limitShouldBuy}
            onChange={(e) => setLimitShouldBuy(e.target.value)}
          />
        </div>
        <button
          className={buttonStyles.wideBtn + " " + buttonStyles.avantGarde}
          onClick={calculateSettlement}
        >
          Calculate
        </button>
        <span>Settlement: ${settlement.toFixed(2)}</span>
      </div>
      <div className={styles.postItNote}>
        <h3 className="blog-subtitle">Co-Insurance Clause</h3>
        <p className="name-text">
          Requires that the insured purchases a limit of insurance at least
          equal to some percentage of insured value - a minimum value you have
          to purchase.
        </p>
        <p>
          Applies to each of the three types of property
          {" (Building, Stock, Equipment)"} separately.
        </p>
        <p className="blog-description">
          Only applies to partial losses greater than the lesser of the 2% of
          AoI or $5000. Do not apply to total losses or losses that are small.
        </p>
        <p>
          Adjuster determines: ACV of property, Amount of loss & Limit
          purchased, Amount of settlement = penalized if did not meet
          co-insurance requirement.
        </p>
      </div>
    </div>
  );
};

const Premium = () => {
  const [fireRate, setFireRate] = useState("");
  const [loading, setLoading] = useState("");
  const [buildingValue, setBuildingValue] = useState("");
  const [premium, setPremium] = useState(0);

  const calculateSettlement = () => {
    const fire = parseFloat(fireRate);
    const load = parseFloat(loading);
    const price = parseFloat(buildingValue);

    if (!price || isNaN(fire) || isNaN(load)) {
      setPremium(0);
      return;
    }

    const result = (fire + load) * price;
    setPremium(result);
  };

  return (
    <div className="page-wrap">
      <div className="space-y-4 max-w-md">
        <h3 className="blog-subtitle">Calculate Commercial Premiums</h3>
        <div className="flex items-center gap-2">
          <label className="text-lg font-medium">$</label>
          <input
            type="number"
            placeholder="Fire Rate"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={fireRate}
            onChange={(e) => setFireRate(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-lg font-medium">$</label>
          <input
            type="number"
            placeholder="Loading"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={loading}
            onChange={(e) => setLoading(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-lg font-medium">$</label>
          <input
            type="number"
            placeholder="Building Value"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={buildingValue}
            onChange={(e) => setBuildingValue(e.target.value)}
          />
        </div>
        <button
          className={buttonStyles.wideBtn + " " + buttonStyles.avantGarde}
          onClick={calculateSettlement}
        >
          Calculate
        </button>
        <span>Premium: ${premium.toFixed(2)}</span>
      </div>
      <div className={styles.postItNote}>
        <h3 className="blog-subtitle">
          Commercial Property Insurance Premium Charging
        </h3>
        <p className="name-text">
          Total rate / $100 = fire rate + loading is the rate they need to
          charge you to insure $100 of your property.
        </p>
        <p className="blog-description">
          Fire rate is the basic rate charged to insure against fire, lightning
          and explosions. Factors affecting fire rate are below:
        </p>
        <ul>
          <li className="def-text">
            Building Construction - concrete vs wood for example
          </li>
          <li className="def-text">Claims History</li>
          <li className="def-text">
            Protection - private{" "}
            {
              "(protection installed by the applicant, such as sprinklers, alarms)"
            }{" "}
            & public{" "}
            {
              "(such as distance from fire hydrant and fire hall, accessibility of your premises, whether you have water supply year-round)"
            }
          </li>
          <li className="def-text">
            Occupancy - the type of business by the insured as well as others
            nearby
          </li>
          <li className="def-text">
            Location - area, distance from other buildings, and characteristics
            of the other buildings - high crime, fireworks factory etc
          </li>
        </ul>
      </div>
    </div>
  );
};

const CalculatorPage = () => {
  return (
    <div>
      <Coinsurance />
      <Premium />
    </div>
  );
};

export default CalculatorPage;
