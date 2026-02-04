import React from 'react';
import { BarChart3, TrendingUp, Users, Bell, Calendar, DollarSign } from 'lucide-react';
import './SalesDashboard.css';

const SalesDashboard: React.FC = () => {
    return (
        <div className="sales-dashboard">
            <div className="dashboard-header">
                <div>
                    <h1>Sales Dashboard</h1>
                    <p className="subtitle">Order volume, customer commitments, and delivery tracking</p>
                </div>
                <button className="btn-primary">
                    <Bell size={18} />
                    Send Notifications
                </button>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
                <div className="stat-card stat-card-blue">
                    <div className="stat-icon">
                        <BarChart3 size={32} />
                    </div>
                    <div className="stat-content">
                        <h3>Total Revenue</h3>
                        <p className="stat-value">₹4.2 Cr</p>
                        <span className="stat-change positive">+18% this month</span>
                    </div>
                </div>

                <div className="stat-card stat-card-green">
                    <div className="stat-icon">
                        <TrendingUp size={32} />
                    </div>
                    <div className="stat-content">
                        <h3>Orders This Month</h3>
                        <p className="stat-value">286</p>
                        <span className="stat-change positive">+24 from last month</span>
                    </div>
                </div>

                <div className="stat-card stat-card-purple">
                    <div className="stat-icon">
                        <Users size={32} />
                    </div>
                    <div className="stat-content">
                        <h3>Active Customers</h3>
                        <p className="stat-value">142</p>
                        <span className="stat-change">65 fabricators, 77 dealers</span>
                    </div>
                </div>

                <div className="stat-card stat-card-orange">
                    <div className="stat-icon">
                        <Calendar size={32} />
                    </div>
                    <div className="stat-content">
                        <h3>Deliveries Due</h3>
                        <p className="stat-value">45</p>
                        <span className="stat-change">Next 7 days</span>
                    </div>
                </div>
            </div>

            <div className="dashboard-grid">
                {/* Order Volume by Vertical */}
                <div className="dashboard-card card-large">
                    <div className="card-header">
                        <h2>Order Volume by Vertical</h2>
                        <select className="filter-select">
                            <option>This Month</option>
                            <option>Last Month</option>
                            <option>This Quarter</option>
                        </select>
                    </div>
                    <div className="vertical-chart">
                        <div className="vertical-item">
                            <div className="vertical-info">
                                <h4>Retail</h4>
                                <p>128 orders</p>
                            </div>
                            <div className="vertical-bar-container">
                                <div className="vertical-bar retail" style={{ width: '85%' }}></div>
                            </div>
                            <div className="vertical-amount">₹1.8 Cr</div>
                        </div>
                        <div className="vertical-item">
                            <div className="vertical-info">
                                <h4>Project</h4>
                                <p>86 orders</p>
                            </div>
                            <div className="vertical-bar-container">
                                <div className="vertical-bar project" style={{ width: '65%' }}></div>
                            </div>
                            <div className="vertical-amount">₹1.4 Cr</div>
                        </div>
                        <div className="vertical-item">
                            <div className="vertical-info">
                                <h4>Facade</h4>
                                <p>52 orders</p>
                            </div>
                            <div className="vertical-bar-container">
                                <div className="vertical-bar facade" style={{ width: '50%' }}></div>
                            </div>
                            <div className="vertical-amount">₹0.8 Cr</div>
                        </div>
                        <div className="vertical-item">
                            <div className="vertical-info">
                                <h4>Totalis</h4>
                                <p>20 orders</p>
                            </div>
                            <div className="vertical-bar-container">
                                <div className="vertical-bar totalis" style={{ width: '25%' }}></div>
                            </div>
                            <div className="vertical-amount">₹0.2 Cr</div>
                        </div>
                    </div>
                </div>

                {/* Customer Commitments */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2>Customer Commitments</h2>
                        <span className="badge badge-blue">45 Active</span>
                    </div>
                    <div className="commitment-list">
                        <div className="commitment-item urgent">
                            <div className="commitment-info">
                                <h4>ABC Fabricators</h4>
                                <p>ORD-2024-1245 • PI-2024-0892</p>
                                <span className="commitment-date">Committed: Jan 22, 2026</span>
                            </div>
                            <span className="badge badge-red">2 days</span>
                        </div>
                        <div className="commitment-item">
                            <div className="commitment-info">
                                <h4>XYZ Industries</h4>
                                <p>ORD-2024-1240 • PI-2024-0888</p>
                                <span className="commitment-date">Committed: Jan 25, 2026</span>
                            </div>
                            <span className="badge badge-orange">5 days</span>
                        </div>
                        <div className="commitment-item">
                            <div className="commitment-info">
                                <h4>PQR Constructions</h4>
                                <p>ORD-2024-1238 • PI-2024-0885</p>
                                <span className="commitment-date">Committed: Jan 28, 2026</span>
                            </div>
                            <span className="badge badge-blue">8 days</span>
                        </div>
                    </div>
                </div>

                {/* Top Customers */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2>Top Customers</h2>
                        <DollarSign size={20} />
                    </div>
                    <div className="customer-list">
                        <div className="customer-item">
                            <div className="customer-rank">1</div>
                            <div className="customer-info">
                                <h4>ABC Fabricators</h4>
                                <p>42 orders • ₹65.2L</p>
                            </div>
                        </div>
                        <div className="customer-item">
                            <div className="customer-rank">2</div>
                            <div className="customer-info">
                                <h4>XYZ Industries</h4>
                                <p>38 orders • ₹58.4L</p>
                            </div>
                        </div>
                        <div className="customer-item">
                            <div className="customer-rank">3</div>
                            <div className="customer-info">
                                <h4>PQR Constructions</h4>
                                <p>35 orders • ₹52.8L</p>
                            </div>
                        </div>
                        <div className="customer-item">
                            <div className="customer-rank">4</div>
                            <div className="customer-info">
                                <h4>LMN Fabricators</h4>
                                <p>28 orders • ₹45.6L</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Delivery ETA Monitoring */}
                <div className="dashboard-card card-span-2">
                    <div className="card-header">
                        <h2>Delivery ETA Monitoring</h2>
                        <button className="btn-secondary-small">Export Report</button>
                    </div>
                    <div className="table-container">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Customer</th>
                                    <th>Type</th>
                                    <th>Amount</th>
                                    <th>Committed Date</th>
                                    <th>Current ETA</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="priority-high">
                                    <td><strong>ORD-2024-1245</strong></td>
                                    <td>ABC Fabricators</td>
                                    <td><span className="badge badge-purple">Project</span></td>
                                    <td>₹8,45,000</td>
                                    <td>Jan 22, 2026</td>
                                    <td>Jan 22, 2026</td>
                                    <td><span className="status-badge status-on-time">On Time</span></td>
                                    <td><button className="btn-action">Notify</button></td>
                                </tr>
                                <tr className="priority-medium">
                                    <td><strong>ORD-2024-1240</strong></td>
                                    <td>XYZ Industries</td>
                                    <td><span className="badge badge-blue">Retail</span></td>
                                    <td>₹4,25,000</td>
                                    <td>Jan 24, 2026</td>
                                    <td>Jan 25, 2026</td>
                                    <td><span className="status-badge status-delayed">Delayed 1 day</span></td>
                                    <td><button className="btn-action">Notify</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesDashboard;
