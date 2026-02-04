import React from 'react';
import { TrendingUp, TrendingDown, Package, AlertCircle, BarChart3, RefreshCw } from 'lucide-react';
import './ProcurementDashboard.css';

const ProcurementDashboard: React.FC = () => {
    return (
        <div className="procurement-dashboard">
            <div className="dashboard-header">
                <div>
                    <h1>Procurement Dashboard</h1>
                    <p className="subtitle">Forecasting, inventory analysis, and reorder management</p>
                </div>
                <button className="btn-primary">
                    <RefreshCw size={18} />
                    Refresh Forecast
                </button>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
                <div className="stat-card stat-card-green">
                    <div className="stat-icon">
                        <TrendingUp size={32} />
                    </div>
                    <div className="stat-content">
                        <h3>Runner Items</h3>
                        <p className="stat-value">145</p>
                        <span className="stat-change positive">High demand items</span>
                    </div>
                </div>

                <div className="stat-card stat-card-orange">
                    <div className="stat-icon">
                        <TrendingDown size={32} />
                    </div>
                    <div className="stat-content">
                        <h3>Stranger Items</h3>
                        <p className="stat-value">68</p>
                        <span className="stat-change">Moderate demand</span>
                    </div>
                </div>

                <div className="stat-card stat-card-red">
                    <div className="stat-icon">
                        <Package size={32} />
                    </div>
                    <div className="stat-content">
                        <h3>Dead Inventory</h3>
                        <p className="stat-value">23</p>
                        <span className="stat-change">No movement 90+ days</span>
                    </div>
                </div>

                <div className="stat-card stat-card-blue">
                    <div className="stat-icon">
                        <AlertCircle size={32} />
                    </div>
                    <div className="stat-content">
                        <h3>Reorder Required</h3>
                        <p className="stat-value">34</p>
                        <span className="stat-change">Below safety stock</span>
                    </div>
                </div>
            </div>

            <div className="dashboard-grid">
                {/* Extrusion Forecast */}
                <div className="dashboard-card card-large">
                    <div className="card-header">
                        <h2>Extrusion Forecast Trends</h2>
                        <BarChart3 size={20} />
                    </div>
                    <div className="forecast-chart">
                        <div className="chart-bars">
                            <div className="bar-group">
                                <div className="bar" style={{ height: '80%' }}></div>
                                <span className="bar-label">Jan</span>
                            </div>
                            <div className="bar-group">
                                <div className="bar" style={{ height: '65%' }}></div>
                                <span className="bar-label">Feb</span>
                            </div>
                            <div className="bar-group">
                                <div className="bar" style={{ height: '90%' }}></div>
                                <span className="bar-label">Mar</span>
                            </div>
                            <div className="bar-group">
                                <div className="bar" style={{ height: '75%' }}></div>
                                <span className="bar-label">Apr</span>
                            </div>
                            <div className="bar-group">
                                <div className="bar" style={{ height: '85%' }}></div>
                                <span className="bar-label">May</span>
                            </div>
                            <div className="bar-group">
                                <div className="bar" style={{ height: '70%' }}></div>
                                <span className="bar-label">Jun</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reorder Suggestions */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2>Reorder Suggestions</h2>
                        <span className="badge badge-red">34 Items</span>
                    </div>
                    <div className="reorder-list">
                        <div className="reorder-item critical">
                            <div className="reorder-info">
                                <h4>6063-T6-100x50</h4>
                                <p>Current: 500 kg • Safety: 2,000 kg</p>
                                <span className="reorder-qty">Suggested: 5,000 kg</span>
                            </div>
                        </div>
                        <div className="reorder-item warning">
                            <div className="reorder-info">
                                <h4>6063-T5-80x40</h4>
                                <p>Current: 1,200 kg • Safety: 1,500 kg</p>
                                <span className="reorder-qty">Suggested: 3,500 kg</span>
                            </div>
                        </div>
                        <div className="reorder-item warning">
                            <div className="reorder-info">
                                <h4>HW-2024-A45</h4>
                                <p>Current: 150 pcs • Safety: 300 pcs</p>
                                <span className="reorder-qty">Suggested: 1,000 pcs</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Inventory Classification */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2>Inventory Classification</h2>
                    </div>
                    <div className="classification-grid">
                        <div className="classification-item runner">
                            <div className="classification-icon">🏃</div>
                            <h3>Runner</h3>
                            <p className="classification-count">145 items</p>
                            <p className="classification-desc">High velocity items</p>
                        </div>
                        <div className="classification-item stranger">
                            <div className="classification-icon">🚶</div>
                            <h3>Stranger</h3>
                            <p className="classification-count">68 items</p>
                            <p className="classification-desc">Medium velocity</p>
                        </div>
                        <div className="classification-item dead">
                            <div className="classification-icon">⏸️</div>
                            <h3>Dead</h3>
                            <p className="classification-count">23 items</p>
                            <p className="classification-desc">No movement 90+ days</p>
                        </div>
                    </div>
                </div>

                {/* Procurement Attention Items */}
                <div className="dashboard-card card-span-2">
                    <div className="card-header">
                        <h2>Procurement Attention Items</h2>
                        <AlertCircle size={20} className="text-red" />
                    </div>
                    <div className="table-container">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Item Code</th>
                                    <th>Description</th>
                                    <th>Current Stock</th>
                                    <th>Safety Stock</th>
                                    <th>Lead Time</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="priority-high">
                                    <td><strong>6063-T6-100x50</strong></td>
                                    <td>Aluminum Extrusion Section</td>
                                    <td>500 kg</td>
                                    <td>2,000 kg</td>
                                    <td>14 days</td>
                                    <td><span className="status-badge status-critical">Critical</span></td>
                                    <td><button className="btn-action">Create PO</button></td>
                                </tr>
                                <tr>
                                    <td><strong>6063-T5-80x40</strong></td>
                                    <td>Aluminum Extrusion Section</td>
                                    <td>1,200 kg</td>
                                    <td>1,500 kg</td>
                                    <td>10 days</td>
                                    <td><span className="status-badge status-warning">Low</span></td>
                                    <td><button className="btn-action">Create PO</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcurementDashboard;
