import React, { useState } from 'react';

// Define your navigation tabs
const tabs = [
  { id: 1, name: 'Admin' },
  { id: 2, name: 'Student' },
  { id: 3, name: 'Faculty' }
];

// Define the content for each tab
const tabContents = {
  1: ['Admin List 1', 'Admin List 2', 'Admin List 3'],
  2: ['Student List 1', 'Student List 2', 'Student List 3'],
  3: ['Faculty List 1', 'Faculty List 2', 'Faculty List 3']
};

const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useState(1); // Default to the first tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="tabs">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? 'tab active' : 'tab'}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabContents[activeTab].map((content, index) => (
          <div key={index}>{content}</div>
        ))}
      </div>

      {/* CSS styles */}
      <style>
        {`
          .tabs {
            display: flex;
          }
          
          .tab {
            padding: 10px;
            cursor: pointer;
          }
          
          .tab.active {
            background-color: #007bff;
            color: #fff;
          }
          
          .tab-content {
            margin-top: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default NavigationTabs;
