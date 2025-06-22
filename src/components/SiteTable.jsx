import React from 'react';
import { siteTable } from '../data/dummyData';

const SiteTable = () => (
  <table className="site-table">
    <thead>
      <tr className="color-grey">
        <th>Site Name</th><th>State</th><th>City</th><th>Revenue</th><th>Total Orders</th><th>Last Order</th><th>Created At</th>
      </tr>
    </thead>
    <tbody>
      {siteTable.map((site, idx) => (
        <tr key={idx}>
          <td>{site.siteName}</td>
          <td>{site.state}</td>
          <td>{site.city}</td>
          <td>₹{site.revenue.toLocaleString()}</td>
          <td>{site.totalOrders}</td>
          <td>{site.lastOrder}</td>
          <td>{site.createdAt}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default SiteTable;
