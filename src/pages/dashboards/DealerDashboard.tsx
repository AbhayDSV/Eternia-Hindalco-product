import React from 'react';
import { Package, TrendingUp, Clock, AlertCircle, Truck, FileText } from 'lucide-react';
import './DealerDashboard.css';

const DealerDashboard: React.FC = () => {
    return (
        <div className="dealer-dashboard">
            <div className="dashboard-header">
                <div>
                    <h1>Dealer Dashboard</h1>
                    <p className="subtitle">Track your orders and manage dealer operations</p>
                </div>
                <button className="btn-primary">
                    <Package size={18} />
                    Submit New Order
                </button>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
                <div className="stat-card stat-card-blue">
                    <div className="stat-icon">
                        <Package size={32} />
                    </div>
                    <div className="stat-content">
                        <h3>Total Orders</h3>
                        <p className="stat-value">142</p>
                        <span className="stat-change positive">+12 this month</span>
                    </div>
                </div>

                <div className="stat-card stat-card-orange">
                    <div className="stat-icon">
                        <Clock size={32} />
                    </div>
                    <div className="stat-content">
                        <h3>Pending Approval</h3>
                        <p className="stat-value">18</p>
                        <span className="stat-change">Awaiting review</span>
                    </div>
                </div>

                <div className="stat-card stat-card-green">
                    <div className="stat-icon">
                        <TrendingUp size={32} />
                    </div>
                    <div className="stat-content">
                        <h3>Approved Orders</h3>
                        <p className="stat-value">98</p>
                        <span className="stat-change positive">+8 this week</span>
                    </div>
                </div>

                <div className="stat-card stat-card-red">
                    <div className="stat-icon">
                        <AlertCircle size={32} />
                    </div>
                    <div className="stat-content">
                        <h3>Action Required</h3>
                        <p className="stat-value">5</p>
                        <span className="stat-change">Needs attention</span>
                    </div>
                </div>
            </div>

            <div className="dashboard-grid">
                {/* Recent Orders */}
                <div className="dashboard-card card-large">
                    <div className="card-header">
                        <h2>Recent Orders</h2>
                        <button className="btn-secondary-small">View All</button>
                    </div>
                    <div className="table-container">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Fabricator</th>
                                    <th>Type</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>DLR-2024-0156</strong></td>
                                    <td>ABC Fabricators</td>
                                    <td><span className="badge badge-blue">Retail</span></td>
                                    <td>₹4,25,000</td>
                                    <td>Jan 18, 2026</td>
                                    <td><span className="status-badge status-submitted">Submitted</span></td>
                                    <td><button className="btn-action">View</button></td>
                                </tr>
                                <tr>
                                    <td><strong>DLR-2024-0155</strong></td>
                                    <td>XYZ Industries</td>
                                    <td><span className="badge badge-purple">Project</span></td>
                                    <td>₹12,50,000</td>
                                    <td>Jan 17, 2026</td>
                                    <td><span className="status-badge status-approved">Approved</span></td>
                                    <td><button className="btn-action">View</button></td>
                                </tr>
                                <tr>
                                    <td><strong>DLR-2024-0154</strong></td>
                                    <td>PQR Constructions</td>
                                    <td><span className="badge badge-teal">Facade</span></td>
                                    <td>₹8,75,000</td>
                                    <td>Jan 16, 2026</td>
                                    <td><span className="status-badge status-wip">In Progress</span></td>
                                    <td><button className="btn-action">View</button></td>
                                </tr>
                                <tr>
                                    <td><strong>DLR-2024-0153</strong></td>
                                    <td>LMN Fabricators</td>
                                    <td><span className="badge badge-blue">Retail</span></td>
                                    <td>₹3,20,000</td>
                                    <td>Jan 15, 2026</td>
                                    <td><span className="status-badge status-refer-back">Refer Back</span></td>
                                    <td><button className="btn-action">View</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Fabricator Performance */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2>Top Fabricators</h2>
                        <FileText size={20} />
                    </div>
                    <div className="fabricator-list">
                        <div className="fabricator-item">
                            <div className="fabricator-info">
                                <h4>ABC Fabricators</h4>
                                <p>28 orders this month</p>
                            </div>
                            <div className="fabricator-amount">₹45.2L</div>
                        </div>
                        <div className="fabricator-item">
                            <div className="fabricator-info">
                                <h4>XYZ Industries</h4>
                                <p>22 orders this month</p>
                            </div>
                            <div className="fabricator-amount">₹38.5L</div>
                        </div>
                        <div className="fabricator-item">
                            <div className="fabricator-info">
                                <h4>PQR Constructions</h4>
                                <p>18 orders this month</p>
                            </div>
                            <div className="fabricator-amount">₹32.8L</div>
                        </div>
                        <div className="fabricator-item">
                            <div className="fabricator-info">
                                <h4>LMN Fabricators</h4>
                                <p>15 orders this month</p>
                            </div>
                            <div className="fabricator-amount">₹28.4L</div>
                        </div>
                    </div>
                </div>

                {/* Upcoming Deliveries */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2>Upcoming Deliveries</h2>
                        <Truck size={20} />
                    </div>
                    <div className="delivery-list">
                        <div className="delivery-item urgent">
                            <div className="delivery-info">
                                <h4>DLR-2024-0148</h4>
                                <p>ABC Fabricators • PI-2024-0892</p>
                            </div>
                            <div className="delivery-date">
                                <span className="badge badge-red">2 days</span>
                            </div>
                        </div>
                        <div className="delivery-item">
                            <div className="delivery-info">
                                <h4>DLR-2024-0145</h4>
                                <p>XYZ Industries • PI-2024-0889</p>
                            </div>
                            <div className="delivery-date">
                                <span className="badge badge-orange">5 days</span>
                            </div>
                        </div>
                        <div className="delivery-item">
                            <div className="delivery-info">
                                <h4>DLR-2024-0142</h4>
                                <p>PQR Constructions • PI-2024-0885</p>
                            </div>
                            <div className="delivery-date">
                                <span className="badge badge-blue">8 days</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Required */}
                <div className="dashboard-card action-card">
                    <div className="card-header">
                        <h2>Action Required</h2>
                        <AlertCircle size={20} className="text-red" />
                    </div>
                    <div className="action-list">
                        <div className="action-item">
                            <div className="action-info">
                                <h4>DLR-2024-0153</h4>
                                <p className="action-remark">Pricing needs revision for hardware items</p>
                                <span className="action-time">2 hours ago</span>
                            </div>
                            <button className="btn-primary-small">Review</button>
                        </div>
                        <div className="action-item">
                            <div className="action-info">
                                <h4>DLR-2024-0149</h4>
                                <p className="action-remark">Delivery address incomplete</p>
                                <span className="action-time">5 hours ago</span>
                            </div>
                            <button className="btn-primary-small">Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealerDashboard;
