import React from 'react';

/**
 * Overview dashboard for administrators. In a complete implementation this
 * would display counts of grants, articles and other records along with
 * recent activity. Currently it provides a simple welcome message.
 */
const OverviewPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Dashboard Overview</h1>
      <p>Welcome to the admin dashboard. Use the navigation on the left to manage content.</p>
    </div>
  );
};

export default OverviewPage;
