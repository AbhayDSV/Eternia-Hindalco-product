import React, { useState } from 'react';
import { Mail, CheckCircle, XCircle, Clock } from 'lucide-react';
import './Notifications.css';

const Notifications: React.FC = () => {
    const [tab, setTab] = useState('sent');

    return (
        <div className="notifications-page">
            <div className="page-header">
                <div>
                    <h1>Notifications Center</h1>
                    <p className="subtitle">Email notifications log and configuration</p>
                </div>
                <button className="btn-primary">
                    <Mail size={18} />
                    Configure Rules
                </button>
            </div>

            <div className="notification-stats">
                <div className="stat-card">
                    <Mail size={32} />
                    <div>
                        <h3>Sent Today</h3>
                        <p className="stat-value">142</p>
                    </div>
                </div>
                <div className="stat-card">
                    <CheckCircle size={32} />
                    <div>
                        <h3>Delivered</h3>
                        <p className="stat-value">138</p>
                    </div>
                </div>
                <div className="stat-card">
                    <XCircle size={32} />
                    <div>
                        <h3>Failed</h3>
                        <p className="stat-value">4</p>
                    </div>
                </div>
                <div className="stat-card">
                    <Clock size={32} />
                    <div>
                        <h3>Pending</h3>
                        <p className="stat-value">8</p>
                    </div>
                </div>
            </div>

            <div className="notification-tabs">
                <button className={`tab ${tab === 'sent' ? 'active' : ''}`} onClick={() => setTab('sent')}>
                    Sent Notifications
                </button>
                <button className={`tab ${tab === 'rules' ? 'active' : ''}`} onClick={() => setTab('rules')}>
                    Mapping Rules
                </button>
            </div>

            {tab === 'sent' && (
                <div className="notifications-table-card">
                    <div className="card-header">
                        <h3>Notification Log</h3>
                        <div className="filters">
                            <select className="filter-select">
                                <option>All Types</option>
                                <option>Order Submitted</option>
                                <option>Order Approved</option>
                                <option>Refer Back</option>
                                <option>Shipment Update</option>
                            </select>
                            <select className="filter-select">
                                <option>All Status</option>
                                <option>Sent</option>
                                <option>Failed</option>
                                <option>Pending</option>
                            </select>
                        </div>
                    </div>
                    <table className="notifications-table">
                        <thead>
                            <tr>
                                <th>Timestamp</th>
                                <th>Type</th>
                                <th>Order ID</th>
                                <th>Recipient</th>
                                <th>Subject</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jan 19, 10:45 AM</td>
                                <td><span className="type-badge submitted">Order Submitted</span></td>
                                <td>ORD-2024-1245</td>
                                <td>sales@eternia.com</td>
                                <td>New Order Submitted - ABC Fabricators</td>
                                <td><span className="status-badge sent"><CheckCircle size={14} /> Sent</span></td>
                                <td><button className="btn-action-small">View</button></td>
                            </tr>
                            <tr>
                                <td>Jan 19, 11:20 AM</td>
                                <td><span className="type-badge approved">Order Approved</span></td>
                                <td>ORD-2024-1244</td>
                                <td>fabricator@eternia.com</td>
                                <td>Order Approved - ORD-2024-1244</td>
                                <td><span className="status-badge sent"><CheckCircle size={14} /> Sent</span></td>
                                <td><button className="btn-action-small">View</button></td>
                            </tr>
                            <tr className="failed-row">
                                <td>Jan 19, 02:15 PM</td>
                                <td><span className="type-badge shipment">Shipment Update</span></td>
                                <td>ORD-2024-1240</td>
                                <td>invalid@email.com</td>
                                <td>Shipment Dispatched - ORD-2024-1240</td>
                                <td><span className="status-badge failed"><XCircle size={14} /> Failed</span></td>
                                <td><button className="btn-action-small">Retry</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {tab === 'rules' && (
                <div className="rules-section">
                    <div className="rules-card">
                        <div className="card-header">
                            <h3>Email Mapping Rules</h3>
                            <button className="btn-primary-small">Add Rule</button>
                        </div>
                        <div className="rules-list">
                            <div className="rule-item">
                                <div className="rule-info">
                                    <h4>Order Submitted → Sales Team</h4>
                                    <p>When order is submitted, notify sales team by order type</p>
                                    <div className="rule-mapping">
                                        <span className="mapping-tag">Retail → sales.retail@eternia.com</span>
                                        <span className="mapping-tag">Project → sales.project@eternia.com</span>
                                        <span className="mapping-tag">Facade → sales.facade@eternia.com</span>
                                    </div>
                                </div>
                                <div className="rule-actions">
                                    <button className="btn-icon-small">Edit</button>
                                    <button className="btn-icon-small">Delete</button>
                                </div>
                            </div>

                            <div className="rule-item">
                                <div className="rule-info">
                                    <h4>Order Approved → Fabricator</h4>
                                    <p>When order is approved, notify fabricator</p>
                                    <div className="rule-mapping">
                                        <span className="mapping-tag">To: Fabricator Email</span>
                                        <span className="mapping-tag">CC: Supply Chain Team</span>
                                    </div>
                                </div>
                                <div className="rule-actions">
                                    <button className="btn-icon-small">Edit</button>
                                    <button className="btn-icon-small">Delete</button>
                                </div>
                            </div>

                            <div className="rule-item">
                                <div className="rule-info">
                                    <h4>Refer Back → Fabricator</h4>
                                    <p>When order is referred back, notify fabricator with remarks</p>
                                    <div className="rule-mapping">
                                        <span className="mapping-tag">To: Fabricator Email</span>
                                    </div>
                                </div>
                                <div className="rule-actions">
                                    <button className="btn-icon-small">Edit</button>
                                    <button className="btn-icon-small">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="template-preview-card">
                        <div className="card-header">
                            <h3>Email Template Preview</h3>
                        </div>
                        <div className="template-preview">
                            <div className="template-header">
                                <h4>Order Submitted Notification</h4>
                            </div>
                            <div className="template-body">
                                <p><strong>Subject:</strong> New Order Submitted - [ORDER_ID]</p>
                                <p><strong>To:</strong> [SALES_EMAIL]</p>
                                <hr />
                                <p>Dear Team,</p>
                                <p>A new order has been submitted:</p>
                                <ul>
                                    <li>Order ID: [ORDER_ID]</li>
                                    <li>Fabricator: [FABRICATOR_NAME]</li>
                                    <li>Order Type: [ORDER_TYPE]</li>
                                    <li>Amount: [ORDER_AMOUNT]</li>
                                </ul>
                                <p>Please review and take necessary action.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Notifications;
