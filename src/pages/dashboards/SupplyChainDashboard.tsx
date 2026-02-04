import React, { useState } from 'react';
import { CheckCircle, XCircle, Package, TrendingUp, AlertTriangle, Layers } from 'lucide-react';
import './SupplyChainDashboard.css';

const SupplyChainDashboard: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState('pending');

    return (
        <div className="supply-chain-dashboard">
            <div className="dashboard-header">
                <div>
                    <h1>Supply Chain Dashboard</h1>
                    <p className="subtitle">Manage approvals, inventory allocation, and FIFO ranking</p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
                <div className="stat-card stat-card-orange">
                    <div className="stat-icon">
                        <Package size={32} />
                    </div>
                    <div className="stat-content">
                        <h3>Pending Approval</h3>
                        <p className="stat-value">24</p>
                        <span className="stat-change">Requires action</span>
                    </div>
                </div>

                <div className="stat-card stat-card-green">
                    <div className="stat-icon">
                        <CheckCircle size={32} />
                    </div>
                    <div className="stat-content">
                        <h3>Approved Today</h3>
                        <p className="stat-value">18</p>
                        <span className="stat-change positive">+6 from yesterday</span>
                    </div>
                </div>

                <div className="stat-card stat-card-red">
                    <div className="stat-icon">
                        <AlertTriangle size={32} />
                    </div>
                    <div className="stat-content">
                        <h3>Inventory Shortfall</h3>
                        <p className="stat-value">12</p>
                        <span className="stat-change">Items below threshold</span>
                    </div>
                </div>

                <div className="stat-card stat-card-blue">
                    <div className="stat-icon">
                        <Layers size={32} />
                    </div>
                    <div className="stat-content">
                        <h3>Allocation Queue</h3>
                        <p className="stat-value">35</p>
                        <span className="stat-change">Orders awaiting lots</span>
                    </div>
                </div>
            </div>

            {/* Approval Queue */}
            <div className="dashboard-card card-full">
                <div className="card-header">
                    <h2>Approval Queue</h2>
                    <div className="tab-buttons">
                        <button
                            className={`tab-btn ${selectedTab === 'pending' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('pending')}
                        >
                            Pending (24)
                        </button>
                        <button
                            className={`tab-btn ${selectedTab === 'approved' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('approved')}
                        >
                            Approved Today (18)
                        </button>
                        <button
                            className={`tab-btn ${selectedTab === 'referred' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('referred')}
                        >
                            Referred Back (7)
                        </button>
                    </div>
                </div>

                {selectedTab === 'pending' && (
                    <div className="table-container">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Fabricator</th>
                                    <th>Type</th>
                                    <th>Material</th>
                                    <th>Amount</th>
                                    <th>Submitted</th>
                                    <th>FIFO Rank</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="priority-high">
                                    <td><strong>ORD-2024-1245</strong></td>
                                    <td>ABC Fabricators</td>
                                    <td><span className="badge badge-purple">Project</span></td>
                                    <td>Extrusion, Hardware</td>
                                    <td>₹8,45,000</td>
                                    <td>2 hours ago</td>
                                    <td><span className="rank-badge rank-1">Rank #1</span></td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="btn-approve"><CheckCircle size={16} /> Approve</button>
                                            <button className="btn-refer"><XCircle size={16} /> Refer Back</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>ORD-2024-1244</strong></td>
                                    <td>XYZ Industries</td>
                                    <td><span className="badge badge-blue">Retail</span></td>
                                    <td>Extrusion</td>
                                    <td>₹4,25,000</td>
                                    <td>4 hours ago</td>
                                    <td><span className="rank-badge rank-2">Rank #2</span></td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="btn-approve"><CheckCircle size={16} /> Approve</button>
                                            <button className="btn-refer"><XCircle size={16} /> Refer Back</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>ORD-2024-1243</strong></td>
                                    <td>PQR Constructions</td>
                                    <td><span className="badge badge-teal">Facade</span></td>
                                    <td>Extrusion, Hardware</td>
                                    <td>₹12,50,000</td>
                                    <td>6 hours ago</td>
                                    <td><span className="rank-badge rank-3">Rank #3</span></td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="btn-approve"><CheckCircle size={16} /> Approve</button>
                                            <button className="btn-refer"><XCircle size={16} /> Refer Back</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <div className="dashboard-grid">
                {/* Inventory Shortfall */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2>Inventory Shortfall</h2>
                        <AlertTriangle size={20} className="text-red" />
                    </div>
                    <div className="shortfall-list">
                        <div className="shortfall-item critical">
                            <div className="shortfall-info">
                                <h4>Section: 6063-T6-100x50</h4>
                                <p>Required: 2,500 kg • Available: 800 kg</p>
                                <span className="shortfall-badge">Short by 1,700 kg</span>
                            </div>
                        </div>
                        <div className="shortfall-item warning">
                            <div className="shortfall-info">
                                <h4>Hardware: HW-2024-A45</h4>
                                <p>Required: 500 pcs • Available: 250 pcs</p>
                                <span className="shortfall-badge">Short by 250 pcs</span>
                            </div>
                        </div>
                        <div className="shortfall-item warning">
                            <div className="shortfall-info">
                                <h4>Section: 6063-T5-80x40</h4>
                                <p>Required: 1,800 kg • Available: 900 kg</p>
                                <span className="shortfall-badge">Short by 900 kg</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FIFO Ranking Summary */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2>FIFO Ranking Summary</h2>
                        <TrendingUp size={20} />
                    </div>
                    <div className="ranking-stats">
                        <div className="ranking-item">
                            <div className="ranking-label">Total in Queue</div>
                            <div className="ranking-value">58 orders</div>
                        </div>
                        <div className="ranking-item">
                            <div className="ranking-label">Avg. Wait Time</div>
                            <div className="ranking-value">4.2 hours</div>
                        </div>
                        <div className="ranking-item">
                            <div className="ranking-label">Priority Orders</div>
                            <div className="ranking-value">8 orders</div>
                        </div>
                        <div className="ranking-item">
                            <div className="ranking-label">Allocated Today</div>
                            <div className="ranking-value">22 orders</div>
                        </div>
                    </div>
                </div>

                {/* Recent Allocations */}
                <div className="dashboard-card card-span-2">
                    <div className="card-header">
                        <h2>Recent Lot Allocations</h2>
                        <button className="btn-secondary-small">View All</button>
                    </div>
                    <div className="allocation-list">
                        <div className="allocation-item">
                            <div className="allocation-info">
                                <h4>ORD-2024-1240</h4>
                                <p>Lot: LOT-2024-0892 • 1,500 kg • 6063-T6-100x50</p>
                            </div>
                            <span className="allocation-time">10 mins ago</span>
                        </div>
                        <div className="allocation-item">
                            <div className="allocation-info">
                                <h4>ORD-2024-1238</h4>
                                <p>Lot: LOT-2024-0890 • 800 kg • 6063-T5-80x40</p>
                            </div>
                            <span className="allocation-time">25 mins ago</span>
                        </div>
                        <div className="allocation-item">
                            <div className="allocation-info">
                                <h4>ORD-2024-1235</h4>
                                <p>Lot: LOT-2024-0888 • 2,200 kg • 6063-T6-120x60</p>
                            </div>
                            <span className="allocation-time">1 hour ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupplyChainDashboard;
