import React from 'react';
import { Users, Settings, Database, Activity, Shield, Bell } from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard: React.FC = () => {
    return (
        <div className="admin-dashboard">
            <div className="dashboard-header">
                <div>
                    <h1>Admin Dashboard</h1>
                    <p className="subtitle">User management, master data, and system configuration</p>
                </div>
                <button className="btn-primary">
                    <Settings size={18} />
                    System Settings
                </button>
            </div>

            <div className="stats-grid">
                <div className="stat-card stat-card-blue">
                    <div className="stat-icon"><Users size={32} /></div>
                    <div className="stat-content">
                        <h3>Total Users</h3>
                        <p className="stat-value">68</p>
                        <span className="stat-change">65 active, 3 inactive</span>
                    </div>
                </div>

                <div className="stat-card stat-card-green">
                    <div className="stat-icon"><Activity size={32} /></div>
                    <div className="stat-content">
                        <h3>Active Sessions</h3>
                        <p className="stat-value">42</p>
                        <span className="stat-change positive">Peak usage time</span>
                    </div>
                </div>

                <div className="stat-card stat-card-purple">
                    <div className="stat-icon"><Database size={32} /></div>
                    <div className="stat-content">
                        <h3>Master Records</h3>
                        <p className="stat-value">1,245</p>
                        <span className="stat-change">Last updated today</span>
                    </div>
                </div>

                <div className="stat-card stat-card-orange">
                    <div className="stat-icon"><Bell size={32} /></div>
                    <div className="stat-content">
                        <h3>System Alerts</h3>
                        <p className="stat-value">5</p>
                        <span className="stat-change">Requires attention</span>
                    </div>
                </div>
            </div>

            <div className="dashboard-grid">
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2>User Management</h2>
                        <button className="btn-primary-small">Add User</button>
                    </div>
                    <div className="user-stats">
                        <div className="user-stat-item">
                            <h4>Fabricators</h4>
                            <p className="user-count">28</p>
                        </div>
                        <div className="user-stat-item">
                            <h4>Dealers</h4>
                            <p className="user-count">18</p>
                        </div>
                        <div className="user-stat-item">
                            <h4>Supply Chain</h4>
                            <p className="user-count">8</p>
                        </div>
                        <div className="user-stat-item">
                            <h4>Others</h4>
                            <p className="user-count">14</p>
                        </div>
                    </div>
                </div>

                <div className="dashboard-card">
                    <div className="card-header">
                        <h2>Master Data</h2>
                        <button className="btn-primary-small">Upload Data</button>
                    </div>
                    <div className="master-data-list">
                        <div className="master-data-item">
                            <Database size={20} />
                            <div>
                                <h4>Products & Sections</h4>
                                <p>845 records</p>
                            </div>
                        </div>
                        <div className="master-data-item">
                            <Database size={20} />
                            <div>
                                <h4>Hardware Items</h4>
                                <p>320 records</p>
                            </div>
                        </div>
                        <div className="master-data-item">
                            <Database size={20} />
                            <div>
                                <h4>Customers</h4>
                                <p>80 records</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboard-card card-large">
                    <div className="card-header">
                        <h2>Recent User Activity</h2>
                        <select className="filter-select">
                            <option>Last 24 Hours</option>
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                        </select>
                    </div>
                    <div className="table-container">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                    <th>Timestamp</th>
                                    <th>IP Address</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>fabricator@eternia.com</strong></td>
                                    <td><span className="badge badge-blue">Fabricator</span></td>
                                    <td>Created Order ORD-2024-1245</td>
                                    <td>2 hours ago</td>
                                    <td>192.168.1.100</td>
                                    <td><span className="status-badge status-success">Success</span></td>
                                </tr>
                                <tr>
                                    <td><strong>supplychain@eternia.com</strong></td>
                                    <td><span className="badge badge-green">Supply Chain</span></td>
                                    <td>Approved Order ORD-2024-1240</td>
                                    <td>4 hours ago</td>
                                    <td>192.168.1.105</td>
                                    <td><span className="status-badge status-success">Success</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="dashboard-card">
                    <div className="card-header">
                        <h2>System Alerts</h2>
                        <Shield size={20} />
                    </div>
                    <div className="alert-list">
                        <div className="alert-item warning">
                            <div className="alert-info">
                                <h4>Database Backup</h4>
                                <p>Scheduled backup in 2 hours</p>
                            </div>
                        </div>
                        <div className="alert-item info">
                            <div className="alert-info">
                                <h4>System Update</h4>
                                <p>New version available: v2.1.0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
