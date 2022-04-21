import React, { useState } from "react";
import {
  DeliveryTab,
  DiningOutTab,
  Footer,
  FormikForm,
  Header,
  NightLifeTab,
  TabOptions,
} from "../../components";
import "./home.css";

const getActiveTab = (tab) => {
  switch (tab) {
    case "Delivery":
      return <DeliveryTab />;
    case "Dining Out":
      return <DiningOutTab />;
    case "NightLife":
      return <NightLifeTab />;
    default:
      return <DeliveryTab />;
  }
};

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getActiveTab(activeTab)}
      <div>
        <div className="btn-outer-container section-padding">
          <div className="max-width ">
            <div className="btn-wrapper">
              <div className="btn-container">
                <button className="btn btn-1">Button 1</button>
              </div>
              <div className="btn-container">
                <button className="btn btn-2">Button 2</button>
              </div>
              <div className="btn-container">
                <button className="btn btn-3">Button 3</button>
              </div>
            </div>
          </div>
        </div>
        <div className="test-card-container section-padding">
          <div className="test-card-wrapper">
            <h2 className="test-card-heading">Lorem ipsum dolor stan.</h2>
            <p className="test-card-body">
              lorem ipsum dolor spun lorem it ia thr stard
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
