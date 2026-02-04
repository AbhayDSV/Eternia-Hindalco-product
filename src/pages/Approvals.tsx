import React, { useState } from 'react';
import { CheckCircle, XCircle, Eye, Clock, AlertTriangle, Package } from 'lucide-react';
import './Approvals.css';

const Approvals: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState('hardware');
    const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

    return (
        <div className="approvals-page">
            <div className="page-header">
                <div>
                    <h1>Approval Queue</h1>
                    <p className="subtitle">Review and approve pending orders</p>
                </div>
                <div className="header-stats">
                    <div className="stat-pill">
                        <Clock size={18} />
                        <span>24 Pending</span>
                    </div>
                    <div className="stat-pill approved">
                        <CheckCircle size={18} />
                        <span>18 Approved Today</span>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="approval-tabs">
                <button
                    className={`tab ${selectedTab === 'hardware' ? 'active' : ''}`}
                    onClick={() => setSelectedTab('hardware')}
                >
                    <Package size={18} />
                    Hardware Approvals (12)
                </button>
                <button
                    className={`tab ${selectedTab === 'extrusion' ? 'active' : ''}`}
                    onClick={() => setSelectedTab('extrusion')}
                >
                    <Package size={18} />
                    Extrusion Approvals (12)
                </button>
            </div>

            {/* Approval Queue */}
            <div className="approval-queue">
                <div className="queue-list">
                    <div className="queue-header">
                        <h3>Pending Orders</h3>
                        <select className="filter-select">
                            <option>All Priorities</option>
                            <option>High Priority</option>
                            <option>Normal Priority</option>
                        </select>
                    </div>

                    {/* Order Cards */}
                    <div className="order-cards">
                        <div className={`order-card ${selectedOrder === 'ORD-2024-1245' ? 'selected' : ''}`} onClick={() => setSelectedOrder('ORD-2024-1245')}>
                            <div className="order-card-header">
                                <div>
                                    <h4>ORD-2024-1245</h4>
                                    <p className="order-meta">ABC Fabricators • Project</p>
                                </div>
                                <span className="priority-badge high">High Priority</span>
                            </div>
                            <div className="order-card-body">
                                <div className="order-info-grid">
                                    <div className="info-item">
                                        <span className="label">Submitted</span>
                                        <span className="value">2 hours ago</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="label">Amount</span>
                                        <span className="value">₹8,45,000</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="label">Items</span>
                                        <span className="value">24 items</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="label">FIFO Rank</span>
                                        <span className="value rank-1">#1</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`order-card ${selectedOrder === 'ORD-2024-1244' ? 'selected' : ''}`} onClick={() => setSelectedOrder('ORD-2024-1244')}>
                            <div className="order-card-header">
                                <div>
                                    <h4>ORD-2024-1244</h4>
                                    <p className="order-meta">XYZ Industries • Retail</p>
                                </div>
                                <span className="priority-badge normal">Normal</span>
                            </div>
                            <div className="order-card-body">
                                <div className="order-info-grid">
                                    <div className="info-item">
                                        <span className="label">Submitted</span>
                                        <span className="value">4 hours ago</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="label">Amount</span>
                                        <span className="value">₹4,25,000</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="label">Items</span>
                                        <span className="value">18 items</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="label">FIFO Rank</span>
                                        <span className="value rank-2">#2</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`order-card ${selectedOrder === 'ORD-2024-1243' ? 'selected' : ''}`} onClick={() => setSelectedOrder('ORD-2024-1243')}>
                            <div className="order-card-header">
                                <div>
                                    <h4>ORD-2024-1243</h4>
                                    <p className="order-meta">PQR Constructions • Facade</p>
                                </div>
                                <span className="priority-badge normal">Normal</span>
                            </div>
                            <div className="order-card-body">
                                <div className="order-info-grid">
                                    <div className="info-item">
                                        <span className="label">Submitted</span>
                                        <span className="value">6 hours ago</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="label">Amount</span>
                                        <span className="value">₹12,50,000</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="label">Items</span>
                                        <span className="value">32 items</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="label">FIFO Rank</span>
                                        <span className="value rank-3">#3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Order Detail Panel */}
                <div className="order-detail-panel">
                    {selectedOrder ? (
                        <>
                            <div className="detail-header">
                                <div>
                                    <h3>{selectedOrder}</h3>
                                    <p className="detail-meta">ABC Fabricators • Project Order • PI-2024-0892</p>
                                </div>
                                <button className="btn-icon">
                                    <Eye size={18} />
                                </button>
                            </div>

                            <div className="detail-section">
                                <h4>Order Summary</h4>
                                <div className="summary-grid">
                                    <div className="summary-item">
                                        <span className="label">Order Type</span>
                                        <span className="value">Project</span>
                                    </div>
                                    <div className="summary-item">
                                        <span className="label">Project Name</span>
                                        <span className="value">Skyline Tower Phase 2</span>
                                    </div>
                                    <div className="summary-item">
                                        <span className="label">Material Type</span>
                                        <span className="value">Extrusion, Hardware</span>
                                    </div>
                                    <div className="summary-item">
                                        <span className="label">Expected Delivery</span>
                                        <span className="value">Jan 28, 2026</span>
                                    </div>
                                    <div className="summary-item">
                                        <span className="label">Total Amount</span>
                                        <span className="value">₹8,45,000</span>
                                    </div>
                                    <div className="summary-item">
                                        <span className="label">Submitted On</span>
                                        <span className="value">Jan 19, 2026 10:45 AM</span>
                                    </div>
                                </div>
                            </div>

                            <div className="detail-section">
                                <h4>Items ({selectedTab === 'hardware' ? '12 Hardware Items' : '12 Extrusion Items'})</h4>
                                <div className="items-table-container">
                                    <table className="items-table">
                                        <thead>
                                            <tr>
                                                <th>Item Code</th>
                                                <th>Description</th>
                                                <th>Qty</th>
                                                <th>Stock Status</th>
                                                <th>Rate</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>HW-2024-A45</strong></td>
                                                <td>Aluminum Handle - Premium</td>
                                                <td>500 pcs</td>
                                                <td><span className="stock-badge in-stock">In Stock</span></td>
                                                <td>₹450</td>
                                                <td>₹2,25,000</td>
                                            </tr>
                                            <tr>
                                                <td><strong>HW-2024-B32</strong></td>
                                                <td>Lock Mechanism - Standard</td>
                                                <td>300 pcs</td>
                                                <td><span className="stock-badge low-stock">Low Stock</span></td>
                                                <td>₹680</td>
                                                <td>₹2,04,000</td>
                                            </tr>
                                            <tr className="highlight-row">
                                                <td><strong>HW-2024-C18</strong></td>
                                                <td>Hinge Set - Heavy Duty <span className="new-item-tag">New Item</span></td>
                                                <td>800 pcs</td>
                                                <td><span className="stock-badge out-of-stock">Out of Stock</span></td>
                                                <td>₹320</td>
                                                <td>₹2,56,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="detail-section">
                                <h4>Remarks & Notes</h4>
                                <textarea
                                    className="remarks-input"
                                    placeholder="Add remarks for approval or refer back..."
                                    rows={3}
                                ></textarea>
                            </div>

                            <div className="detail-actions">
                                <button className="btn-secondary">Cancel</button>
                                <button className="btn-refer">
                                    <XCircle size={18} />
                                    Refer Back
                                </button>
                                <button className="btn-approve">
                                    <CheckCircle size={18} />
                                    Approve Order
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="empty-state">
                            <AlertTriangle size={48} />
                            <h3>No Order Selected</h3>
                            <p>Select an order from the queue to review and approve</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Approvals;
