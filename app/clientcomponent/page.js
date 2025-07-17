"use client";
import "../globals.css";

const plans = [
  {
    name: "Basic",
    price: "$9/mo",
    features: ["1 User", "Basic Support", "5 Projects"],
  },
  {
    name: "Pro",
    price: "$29/mo",
    features: ["5 Users", "Priority Support", "Unlimited Projects"],
  },
  {
    name: "Enterprise",
    price: "$99/mo",
    features: ["Unlimited Users", "24/7 Support", "Custom Solutions"],
  },
];

const PricingPage = () => {
  return (
    <div className="pricing-container">
      <h1>Our Pricing</h1>
      <div className="pricing-cards">
        {plans.map((plan) => (
          <div className="pricing-card" key={plan.name}>
            <h2>{plan.name}</h2>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button
              onClick={() => {
                alert("Hello from Component");
              }}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
