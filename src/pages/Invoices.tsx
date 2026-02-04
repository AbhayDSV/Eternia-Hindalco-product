import React, { useState } from 'react';
import { FileText, Download, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import './Invoices.css';

const Invoices: React.FC = () => {
    const [tab, setTab] = useState('all');

    return (
        <div className="invoices-page">
            <div className="page-header">
                <div>
                    <h1>Invoice Management</h1>
                    <p className="subtitle">Track invoices, payments, and exceptions</p>
                </div>
                <button className="btn-primary">
                    <Download size={18} />
                    Export Report
                </button>
            </div>

            <div className="invoice-stats">
                <div className="stat-card">
                    <FileText size={32} />
                    <div>
                        <h3>Total Invoices</h3>
                        <p className="stat-value">₹12.4 Cr</p>
                    </div>
                </div>
                <div className="stat-card">
                    <CheckCircle size={32} />
                    <div>
                        <h3>Paid</h3>
                        <p className="stat-value">₹9.8 Cr</p>
                    </div>
                </div>
                <div className="stat-card">
                    <Clock size={32} />
                    <div>
                        <h3>Pending</h3>
                        <p className="stat-value">₹2.2 Cr</p>
                    </div>
                </div>
                <div className="stat-card">
                    <AlertTriangle size={32} />
                    <div>
                        <h3>Overdue</h3>
                        <p className="stat-value">₹0.4 Cr</p>
                    </div>
                </div>
            </div>

            <div className="invoice-tabs">
                <button className={`tab ${tab === 'all' ? 'active' : ''}`} onClick={() => setTab('all')}>
                    All (286)
                </button>
                <button className={`tab ${tab === 'pending' ? 'active' : ''}`} onClick={() => setTab('pending')}>
                    Pending (45)
                </button>
                <button className={`tab ${tab === 'overdue' ? 'active' : ''}`} onClick={() => setTab('overdue')}>
                    Overdue (12)
                </button>
                <button className={`tab ${tab === 'paid' ? 'active' : ''}`} onClick={() => setTab('paid')}>
                    Paid (229)
                </button>
            </div>

            <div className="invoices-table-card">
                <div className="card-header">
                    <h3>Invoice List</h3>
                    <div className="filters">
                        <input type="text" className="search-input" placeholder="Search invoices..." />
                        <select className="filter-select">
                            <option>All Customers</option>
                            <option>ABC Fabricators</option>
                            <option>XYZ Industries</option>
                        </select>
                    </div>
                </div>
                <table className="invoices-table">
                    <thead>
                        <tr>
                            <th>Invoice No</th>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Amount</th>
                            <th>Issue Date</th>
                            <th>Due Date</th>
                            <th>Payment Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="overdue-row">
                            <td><strong>INV-2024-1245</strong></td>
                            <td>ORD-2024-1245</td>
                            <td>ABC Fabricators</td>
                            <td>₹8,45,000</td>
                            <td>Jan 10, 2026</td>
                            <td>Jan 18, 2026</td>
                            <td>-</td>
                            <td><span className="status-badge overdue">Overdue</span></td>
                            <td><button className="btn-action-small">Follow Up</button></td>
                        </tr>
                        <tr>
                            <td><strong>INV-2024-1244</strong></td>
                            <td>ORD-2024-1240</td>
                            <td>XYZ Industries</td>
                            <td>₹4,25,000</td>
                            <td>Jan 15, 2026</td>
                            <td>Jan 25, 2026</td>
                            <td>-</td>
                            <td><span className="status-badge pending">Pending</span></td>
                            <td><button className="btn-action-small">View</button></td>
                        </tr>
                        <tr>
                            <td><strong>INV-2024-1243</strong></td>
                            <td>ORD-2024-1238</td>
                            <td>PQR Constructions</td>
                            <td>₹12,50,000</td>
                            <td>Jan 12, 2026</td>
                            <td>Jan 22, 2026</td>
                            <td>Jan 18, 2026</td>
                            <td><span className="status-badge paid">Paid</span></td>
                            <td><button className="btn-action-small">Receipt</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="exceptions-card">
                <div className="card-header">
                    <h3>Payment Exceptions</h3>
                    <AlertTriangle size={20} className="text-red" />
                </div>
                <div className="exceptions-list">
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
        </div>
    );
};

export default Invoices;
