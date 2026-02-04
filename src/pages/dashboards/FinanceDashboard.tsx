import React from 'react';
import { FileText, AlertTriangle, CheckCircle, TrendingUp, CreditCard } from 'lucide-react';
import './FinanceDashboard.css';

const FinanceDashboard: React.FC = () => {
    return (
        <div className="finance-dashboard">
            <div className="dashboard-header">
                <div>
                    <h1>Finance Dashboard</h1>
                    <p className="subtitle">Invoice tracking, payment management, and financial reports</p>
                </div>
                <button className="btn-primary">
                    <FileText size={18} />
                    Generate Report
                </button>
            </div>

            <div className="stats-grid">
                <div className="stat-card stat-card-blue">
                    <div className="stat-icon"><FileText size={32} /></div>
                    <div className="stat-content">
                        <h3>Total Invoices</h3>
                        <p className="stat-value">₹12.4 Cr</p>
                        <span className="stat-change positive">+15% this month</span>
                    </div>
                </div>

                <div className="stat-card stat-card-green">
                    <div className="stat-icon"><CheckCircle size={32} /></div>
                    <div className="stat-content">
                        <h3>Paid Invoices</h3>
                        <p className="stat-value">₹9.8 Cr</p>
                        <span className="stat-change">79% collection rate</span>
                    </div>
                </div>

                <div className="stat-card stat-card-orange">
                    <div className="stat-icon"><CreditCard size={32} /></div>
                    <div className="stat-content">
                        <h3>Pending Payment</h3>
                        <p className="stat-value">₹2.2 Cr</p>
                        <span className="stat-change">45 invoices</span>
                    </div>
                </div>

                <div className="stat-card stat-card-red">
                    <div className="stat-icon"><AlertTriangle size={32} /></div>
                    <div className="stat-content">
                        <h3>Overdue</h3>
                        <p className="stat-value">₹0.4 Cr</p>
                        <span className="stat-change">12 invoices</span>
                    </div>
                </div>
            </div>

            <div className="dashboard-grid">
                <div className="dashboard-card card-large">
                    <div className="card-header">
                        <h2>Invoice Status Tracking</h2>
                        <div className="tab-buttons">
                            <button className="tab-btn active">All (286)</button>
                            <button className="tab-btn">Pending (45)</button>
                            <button className="tab-btn">Overdue (12)</button>
                        </div>
                    </div>
                    <div className="table-container">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Invoice No</th>
                                    <th>Order ID</th>
                                    <th>Customer</th>
                                    <th>Amount</th>
                                    <th>Issue Date</th>
                                    <th>Due Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="priority-high">
                                    <td><strong>INV-2024-1245</strong></td>
                                    <td>ORD-2024-1245</td>
                                    <td>ABC Fabricators</td>
                                    <td>₹8,45,000</td>
                                    <td>Jan 10, 2026</td>
                                    <td>Jan 18, 2026</td>
                                    <td><span className="status-badge status-overdue">Overdue</span></td>
                                    <td><button className="btn-action">Follow Up</button></td>
                                </tr>
                                <tr>
                                    <td><strong>INV-2024-1244</strong></td>
                                    <td>ORD-2024-1240</td>
                                    <td>XYZ Industries</td>
                                    <td>₹4,25,000</td>
                                    <td>Jan 15, 2026</td>
                                    <td>Jan 25, 2026</td>
                                    <td><span className="status-badge status-pending">Pending</span></td>
                                    <td><button className="btn-action">View</button></td>
                                </tr>
                                <tr>
                                    <td><strong>INV-2024-1243</strong></td>
                                    <td>ORD-2024-1238</td>
                                    <td>PQR Constructions</td>
                                    <td>₹12,50,000</td>
                                    <td>Jan 12, 2026</td>
                                    <td>Jan 22, 2026</td>
                                    <td><span className="status-badge status-paid">Paid</span></td>
                                    <td><button className="btn-action">Receipt</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="dashboard-card">
                    <div className="card-header">
                        <h2>Payment Exceptions</h2>
                        <AlertTriangle size={20} className="text-red" />
                    </div>
                    <div className="exception-list">
                        <div className="exception-item critical">
                            <div className="exception-info">
                                <h4>INV-2024-1240</h4>
                                <p>Payment mismatch: Expected ₹4,25,000, Received ₹4,20,000</p>
                                <span className="exception-time">2 hours ago</span>
                            </div>
                            <button className="btn-primary-small">Resolve</button>
                        </div>
                        <div className="exception-item warning">
                            <div className="exception-info">
                                <h4>INV-2024-1235</h4>
                                <p>Bank details mismatch for customer</p>
                                <span className="exception-time">5 hours ago</span>
                            </div>
                            <button className="btn-primary-small">Resolve</button>
                        </div>
                    </div>
                </div>

                <div className="dashboard-card">
                    <div className="card-header">
                        <h2>Collection Trends</h2>
                        <TrendingUp size={20} />
                    </div>
                    <div className="trend-chart">
                        <div className="trend-item">
                            <span className="trend-label">This Month</span>
                            <div className="trend-bar-container">
                                <div className="trend-bar" style={{ width: '79%' }}></div>
                            </div>
                            <span className="trend-value">79%</span>
                        </div>
                        <div className="trend-item">
                            <span className="trend-label">Last Month</span>
                            <div className="trend-bar-container">
                                <div className="trend-bar" style={{ width: '75%' }}></div>
                            </div>
                            <span className="trend-value">75%</span>
                        </div>
                        <div className="trend-item">
                            <span className="trend-label">3 Months Avg</span>
                            <div className="trend-bar-container">
                                <div className="trend-bar" style={{ width: '77%' }}></div>
                            </div>
                            <span className="trend-value">77%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinanceDashboard;
