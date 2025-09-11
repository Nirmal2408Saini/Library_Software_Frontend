import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./LibraryDashboard.css";

const data = [
  { name: "Mon", booksIssued: 40, booksReturned: 30 },
  { name: "Tue", booksIssued: 60, booksReturned: 50 },
  { name: "Wed", booksIssued: 30, booksReturned: 20 },
  { name: "Thu", booksIssued: 80, booksReturned: 60 },
  { name: "Fri", booksIssued: 50, booksReturned: 40 },
  { name: "Sat", booksIssued: 70, booksReturned: 55 },
  { name: "Sun", booksIssued: 20, booksReturned: 10 },
];

export default function LibraryDashboard() {
  return (
    <div className="dashboard-container">
      {/* Total Books */}
      <div className="card total-books">
        <div className="card-content">
          <h2>Total Books</h2>
          <p className="large-number">12,450</p>
          <p className="small-text">Updated Weekly</p>
        </div>
      </div>

      {/* Books Issued */}
      <div className="card books-issued">
        <div className="card-content">
          <h2>Books Issued</h2>
          <p className="large-number">4,320</p>
          <p className="small-text">This Month</p>
        </div>
      </div>

      {/* Books Returned */}
      <div className="card books-returned">
        <div className="card-content">
          <h2>Books Returned</h2>
          <p className="large-number">3,870</p>
          <p className="small-text">This Month</p>
        </div>
      </div>

      {/* Active Members */}
      <div className="card active-members">
        <div className="card-content">
          <h2>Active Members</h2>
          <p className="large-number">1,240</p>
          <p className="small-text">This Month</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="card chart-section">
        <h2>Books Issued vs Returned (Weekly)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="booksIssued" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            <Bar dataKey="booksReturned" fill="#22c55e" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Progress Section */}
      <div className="card progress-section">
        <h2>Membership Growth</h2>
        <p>67% of annual target reached</p>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: "67%" }}></div>
        </div>
      </div>
    </div>
  );
}
