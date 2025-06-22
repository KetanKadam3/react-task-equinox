import React, { useState } from 'react';

const Tabs = () => {
  const tabs = ['Sites', 'Orders', 'VRs', 'Reports', 'Invoices', 'PI'];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      {tabs.map((tab, idx) => (
        <button
          key={idx}
          className={`tab-button ${activeTab === idx ? 'active' : ''}`}
          onClick={() => setActiveTab(idx)}
        > 
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
