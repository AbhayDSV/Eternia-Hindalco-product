import React from 'react';
import { Database, Activity, CheckCircle, XCircle, RefreshCw, Download } from 'lucide-react';
import './ERPDashboard.css';

const ERPDashboard: React.FC = () => {
    return (
        <div className="erp-dashboard">
            <div className="dashboard-header">
                <div>
                    <h1>ERP Integration Dashboard</h1>
                    <p className="subtitle">Oracle integration health, SO creation, and dispatch tracking</p>
                </div>
                <button className="btn-primary">
                    <RefreshCw size={18} />
                    Sync Now
                </button>
            </div>

            <div className="stats-grid">
                <div className="stat-card stat-card-green">
                    <div className="stat-icon"><Activity size={32} /></div>
                    <div className="stat-content">
                        <h3>Integration Health</h3>
                        <p className="stat-value">98.5%</p>
                        <span className="stat-change positive">All systems operational</span>
                    </div>
                </div>

                <div className="stat-card stat-card-blue">
                    <div className="stat-icon"><Database size={32} /></div>
                    <div className="stat-content">
                        <h3>SO Created Today</h3>
                        <p className="stat-value">42</p>
                        <span className="stat-change positive">+8 from yesterday</span>
                    </div>
                </div>

                <div className="stat-card stat-card-purple">
                    <div className="stat-icon"><CheckCircle size={32} /></div>
                    <div className="stat-content">
                        <h3>Dispatched Today</h3>
                        <p className="stat-value">38</p>
                        <span className="stat-change">90% dispatch rate</span>
                    </div>
                </div>

                <div className="stat-card stat-card-red">
                    <div className="stat-icon"><XCircle size={32} /></div>
                    <div className="stat-content">
                        <h3>Failed Jobs</h3>
                        <p className="stat-value">3</p>
                        <span className="stat-change">Requires attention</span>
                    </div>
                </div>
            </div>

            <div className="dashboard-grid">
                <div className="dashboard-card card-large">
                    <div className="card-header">
                        <h2>Integration Job Status</h2>
                        <button className="btn-secondary-small"><Download size={16} /> Export Logs</button>
                    </div>
                    <div className="table-container">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Job ID</th>
                                    <th>Type</th>
                                    <th>Order ID</th>
                                    <th>Started</th>
                                    <th>Duration</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>JOB-2024-5678</strong></td>
                                    <td>SO Creation</td>
                                    <td>ORD-2024-1245</td>
                                    <td>10:45 AM</td>
                                    <td>2.3s</td>
                                    <td><span className="status-badge status-success">Success</span></td>
                                    <td><button className="btn-action">View Log</button></td>
                                </tr>
                                <tr className="priority-high">
                                    <td><strong>JOB-2024-5677</strong></td>
                                    <td>Dispatch Update</td>
                                    <td>ORD-2024-1240</td>
                                    <td>10:42 AM</td>
                                    <td>-</td>
                                    <td><span className="status-badge status-failed">Failed</span></td>
                                    <td><button className="btn-action">Retry</button></td>
                                </tr>
                                <tr>
                                    <td><strong>JOB-2024-5676</strong></td>
                                    <td>Inventory Sync</td>
                                    <td>-</td>
                                    <td>10:30 AM</td>
                                    <td>15.8s</td>
                                    <td><span className="status-badge status-success">Success</span></td>
                                    <td><button className="btn-action">View Log</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="dashboard-card">
                    <div className="card-header">
                        <h2>System Health</h2>
                        <Activity size={20} />
                    </div>
                    <div className="health-list">
                        <div className="health-item healthy">
                            <div className="health-indicator"></div>
                            <div className="health-info">
                                <h4>Oracle ERP</h4>
                                <p>Last sync: 2 mins ago</p>
                            </div>
                            <span className="health-status">Healthy</span>
                        </div>
                        <div className="health-item healthy">
                            <div className="health-indicator"></div>
                            <div className="health-info">
                                <h4>WMS Integration</h4>
                                <p>Last sync: 5 mins ago</p>
                            </div>
                            <span className="health-status">Healthy</span>
                        </div>
                        <div className="health-item warning">
                            <div className="health-indicator"></div>
                            <div className="health-info">
                                <h4>Email Service</h4>
                                <p>Last sync: 15 mins ago</p>
                            </div>
                            <span className="health-status">Degraded</span>
                        </div>
                    </div>
                </div>

                <div className="dashboard-card">
                    <div className="card-header">
                        <h2>Data Export</h2>
                        <Download size={20} />
                    </div>
                    <div className="export-list">
                        <button className="export-btn">
                            <Database size={18} />
                            <div>
                                <h4>Order Data</h4>
                                <p>Export all orders to Excel</p>
                            </div>
                        </button>
                        <button className="export-btn">
                            <Database size={18} />
                            <div>
                                <h4>Inventory Snapshot</h4>
                                <p>Current inventory levels</p>
                            </div>
                        </button>
                        <button className="export-btn">
                            <Database size={18} />
                            <div>
                                <h4>Integration Logs</h4>
                                <p>Last 30 days of logs</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ERPDashboard;
