import React, { useState } from 'react';
import { TrendingUp, ArrowUp, ArrowDown, Save, RefreshCw } from 'lucide-react';
import './Ranking.css';

const Ranking: React.FC = () => {
    const [tab, setTab] = useState('ranking');

    return (
        <div className="ranking-page">
            <div className="page-header">
                <div>
                    <h1>Ranking & Allocation</h1>
                    <p className="subtitle">Manage FIFO ranking and inventory lot allocation</p>
                </div>
                <div className="header-actions">
                    <button className="btn-secondary">
                        <RefreshCw size={18} />
                        Recalculate
                    </button>
                    <button className="btn-primary">
                        <Save size={18} />
                        Save Ranking
                    </button>
                </div>
            </div>

            <div className="ranking-tabs">
                <button className={`tab ${tab === 'ranking' ? 'active' : ''}`} onClick={() => setTab('ranking')}>
                    FIFO Ranking
                </button>
                <button className={`tab ${tab === 'allocation' ? 'active' : ''}`} onClick={() => setTab('allocation')}>
                    Lot Allocation
                </button>
            </div>

            {tab === 'ranking' && (
                <div className="ranking-section">
                    <div className="ranking-card">
                        <div className="card-header">
                            <h3>Order Ranking Queue</h3>
                            <p className="hint">Drag and drop to reorder • Auto FIFO ranking applied</p>
                        </div>

                        <div className="ranking-table-container">
                            <table className="ranking-table">
                                <thead>
                                    <tr>
                                        <th style={{ width: '60px' }}>Rank</th>
                                        <th>Order ID</th>
                                        <th>Fabricator</th>
                                        <th>Type</th>
                                        <th>Submitted Date</th>
                                        <th>Expected Delivery</th>
                                        <th>Amount</th>
                                        <th>Priority</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="rank-row">
                                        <td>
                                            <div className="rank-badge rank-1">
                                                <span className="rank-number">1</span>
                                                <div className="rank-controls">
                                                    <button className="rank-btn" disabled><ArrowUp size={14} /></button>
                                                    <button className="rank-btn"><ArrowDown size={14} /></button>
                                                </div>
                                            </div>
                                        </td>
                                        <td><strong>ORD-2024-1245</strong></td>
                                        <td>ABC Fabricators</td>
                                        <td><span className="badge badge-purple">Project</span></td>
                                        <td>Jan 19, 10:45 AM</td>
                                        <td>Jan 28, 2026</td>
                                        <td>₹8,45,000</td>
                                        <td><span className="priority-tag high">High</span></td>
                                        <td><button className="btn-action-small">Override</button></td>
                                    </tr>
                                    <tr className="rank-row">
                                        <td>
                                            <div className="rank-badge rank-2">
                                                <span className="rank-number">2</span>
                                                <div className="rank-controls">
                                                    <button className="rank-btn"><ArrowUp size={14} /></button>
                                                    <button className="rank-btn"><ArrowDown size={14} /></button>
                                                </div>
                                            </div>
                                        </td>
                                        <td><strong>ORD-2024-1244</strong></td>
                                        <td>XYZ Industries</td>
                                        <td><span className="badge badge-blue">Retail</span></td>
                                        <td>Jan 19, 11:20 AM</td>
                                        <td>Jan 26, 2026</td>
                                        <td>₹4,25,000</td>
                                        <td><span className="priority-tag normal">Normal</span></td>
                                        <td><button className="btn-action-small">Override</button></td>
                                    </tr>
                                    <tr className="rank-row">
                                        <td>
                                            <div className="rank-badge rank-3">
                                                <span className="rank-number">3</span>
                                                <div className="rank-controls">
                                                    <button className="rank-btn"><ArrowUp size={14} /></button>
                                                    <button className="rank-btn"><ArrowDown size={14} /></button>
                                                </div>
                                            </div>
                                        </td>
                                        <td><strong>ORD-2024-1243</strong></td>
                                        <td>PQR Constructions</td>
                                        <td><span className="badge badge-teal">Facade</span></td>
                                        <td>Jan 19, 02:15 PM</td>
                                        <td>Feb 05, 2026</td>
                                        <td>₹12,50,000</td>
                                        <td><span className="priority-tag normal">Normal</span></td>
                                        <td><button className="btn-action-small">Override</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {tab === 'allocation' && (
                <div className="allocation-section">
                    <div className="allocation-grid">
                        <div className="allocation-card">
                            <div className="card-header">
                                <h3>Available Inventory Lots</h3>
                                <button className="btn-secondary-small">Refresh</button>
                            </div>
                            <div className="lots-list">
                                <div className="lot-item">
                                    <div className="lot-header">
                                        <h4>LOT-2024-0892</h4>
                                        <span className="lot-status available">Available</span>
                                    </div>
                                    <div className="lot-details">
                                        <div className="lot-detail">
                                            <span className="label">Grade:</span>
                                            <span className="value">6063-T6-100x50</span>
                                        </div>
                                        <div className="lot-detail">
                                            <span className="label">Quantity:</span>
                                            <span className="value">2,500 kg</span>
                                        </div>
                                        <div className="lot-detail">
                                            <span className="label">Location:</span>
                                            <span className="value">Warehouse A-12</span>
                                        </div>
                                    </div>
                                    <button className="btn-allocate">Allocate to Order</button>
                                </div>

                                <div className="lot-item">
                                    <div className="lot-header">
                                        <h4>LOT-2024-0890</h4>
                                        <span className="lot-status available">Available</span>
                                    </div>
                                    <div className="lot-details">
                                        <div className="lot-detail">
                                            <span className="label">Grade:</span>
                                            <span className="value">6063-T5-80x40</span>
                                        </div>
                                        <div className="lot-detail">
                                            <span className="label">Quantity:</span>
                                            <span className="value">1,800 kg</span>
                                        </div>
                                        <div className="lot-detail">
                                            <span className="label">Location:</span>
                                            <span className="value">Warehouse B-08</span>
                                        </div>
                                    </div>
                                    <button className="btn-allocate">Allocate to Order</button>
                                </div>
                            </div>
                        </div>

                        <div className="allocation-card">
                            <div className="card-header">
                                <h3>Orders Pending Allocation</h3>
                                <span className="count-badge">8 Orders</span>
                            </div>
                            <div className="pending-orders-list">
                                <div className="pending-order-item">
                                    <div className="order-info">
                                        <h4>ORD-2024-1240</h4>
                                        <p>ABC Fabricators • 1,500 kg • 6063-T6-100x50</p>
                                    </div>
                                    <button className="btn-primary-small">Allocate</button>
                                </div>
                                <div className="pending-order-item">
                                    <div className="order-info">
                                        <h4>ORD-2024-1238</h4>
                                        <p>XYZ Industries • 800 kg • 6063-T5-80x40</p>
                                    </div>
                                    <button className="btn-primary-small">Allocate</button>
                                </div>
                                <div className="pending-order-item shortfall">
                                    <div className="order-info">
                                        <h4>ORD-2024-1235</h4>
                                        <p>PQR Constructions • 3,200 kg • 6063-T6-120x60</p>
                                        <span className="shortfall-tag">Shortfall: 700 kg</span>
                                    </div>
                                    <button className="btn-primary-small">Partial Allocate</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shortfall-summary">
                        <div className="summary-header">
                            <TrendingUp size={20} />
                            <h3>Shortfall Summary</h3>
                        </div>
                        <div className="shortfall-items">
                            <div className="shortfall-item">
                                <div className="shortfall-info">
                                    <h4>6063-T6-120x60</h4>
                                    <p>Required: 3,200 kg • Available: 2,500 kg</p>
                                </div>
                                <span className="shortfall-value">-700 kg</span>
                            </div>
                            <div className="shortfall-item">
                                <div className="shortfall-info">
                                    <h4>HW-2024-C18</h4>
                                    <p>Required: 500 pcs • Available: 0 pcs</p>
                                </div>
                                <span className="shortfall-value">-500 pcs</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Ranking;
