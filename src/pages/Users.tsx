import React, { useState } from 'react';
import { Users, UserPlus, Edit, Trash2, Shield, Mail } from 'lucide-react';
import './Users.css';

const UserManagement: React.FC = () => {
    const [showAddUser, setShowAddUser] = useState(false);

    return (
        <div className="users-page">
            <div className="page-header">
                <div>
                    <h1>User Management</h1>
                    <p className="subtitle">Manage users, roles, and permissions (65+ users, scalable to 100+)</p>
                </div>
                <button className="btn-primary" onClick={() => setShowAddUser(true)}>
                    <UserPlus size={18} />
                    Add New User
                </button>
            </div>

            <div className="users-stats">
                <div className="stat-card">
                    <Users size={32} />
                    <div>
                        <h3>Total Users</h3>
                        <p className="stat-value">68</p>
                    </div>
                </div>
                <div className="stat-card">
                    <Shield size={32} />
                    <div>
                        <h3>Active Users</h3>
                        <p className="stat-value">65</p>
                    </div>
                </div>
                <div className="stat-card">
                    <Mail size={32} />
                    <div>
                        <h3>Pending Invites</h3>
                        <p className="stat-value">3</p>
                    </div>
                </div>
            </div>

            <div className="users-by-role">
                <h3>Users by Role</h3>
                <div className="role-cards">
                    <div className="role-card">
                        <h4>Fabricators</h4>
                        <p className="role-count">28</p>
                    </div>
                    <div className="role-card">
                        <h4>Dealers</h4>
                        <p className="role-count">18</p>
                    </div>
                    <div className="role-card">
                        <h4>Supply Chain</h4>
                        <p className="role-count">8</p>
                    </div>
                    <div className="role-card">
                        <h4>Procurement</h4>
                        <p className="role-count">4</p>
                    </div>
                    <div className="role-card">
                        <h4>Sales</h4>
                        <p className="role-count">5</p>
                    </div>
                    <div className="role-card">
                        <h4>Finance</h4>
                        <p className="role-count">3</p>
                    </div>
                    <div className="role-card">
                        <h4>ERP Team</h4>
                        <p className="role-count">1</p>
                    </div>
                    <div className="role-card">
                        <h4>Admin</h4>
                        <p className="role-count">1</p>
                    </div>
                </div>
            </div>

            <div className="users-table-card">
                <div className="card-header">
                    <h3>All Users</h3>
                    <div className="filters">
                        <input type="text" className="search-input" placeholder="Search users..." />
                        <select className="filter-select">
                            <option>All Roles</option>
                            <option>Fabricator</option>
                            <option>Dealer</option>
                            <option>Supply Chain</option>
                            <option>Admin</option>
                        </select>
                        <select className="filter-select">
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                </div>
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Permissions</th>
                            <th>Last Login</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Rajesh Kumar</strong></td>
                            <td>fabricator@eternia.com</td>
                            <td><span className="role-badge fabricator">Fabricator</span></td>
                            <td>Create Orders, View Orders</td>
                            <td>2 hours ago</td>
                            <td><span className="status-badge active">Active</span></td>
                            <td>
                                <div className="action-buttons">
                                    <button className="btn-icon-small"><Edit size={14} /></button>
                                    <button className="btn-icon-small"><Trash2 size={14} /></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Priya Sharma</strong></td>
                            <td>supplychain@eternia.com</td>
                            <td><span className="role-badge supply-chain">Supply Chain</span></td>
                            <td>Approve Orders, Manage Ranking</td>
                            <td>1 hour ago</td>
                            <td><span className="status-badge active">Active</span></td>
                            <td>
                                <div className="action-buttons">
                                    <button className="btn-icon-small"><Edit size={14} /></button>
                                    <button className="btn-icon-small"><Trash2 size={14} /></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Amit Patel</strong></td>
                            <td>sales@eternia.com</td>
                            <td><span className="role-badge sales">Sales</span></td>
                            <td>View Orders, Send Notifications</td>
                            <td>3 hours ago</td>
                            <td><span className="status-badge active">Active</span></td>
                            <td>
                                <div className="action-buttons">
                                    <button className="btn-icon-small"><Edit size={14} /></button>
                                    <button className="btn-icon-small"><Trash2 size={14} /></button>
                                </div>
                            </td>
                        </tr>
                        <tr className="inactive-row">
                            <td><strong>Sunita Desai</strong></td>
                            <td>dealer@example.com</td>
                            <td><span className="role-badge dealer">Dealer</span></td>
                            <td>Create Orders, View Orders</td>
                            <td>15 days ago</td>
                            <td><span className="status-badge inactive">Inactive</span></td>
                            <td>
                                <div className="action-buttons">
                                    <button className="btn-icon-small"><Edit size={14} /></button>
                                    <button className="btn-icon-small"><Trash2 size={14} /></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {showAddUser && (
                <div className="modal-overlay" onClick={() => setShowAddUser(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Add New User</h2>
                            <button className="modal-close" onClick={() => setShowAddUser(false)}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" className="form-input" placeholder="Enter full name" />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" className="form-input" placeholder="Enter email address" />
                            </div>
                            <div className="form-group">
                                <label>Role</label>
                                <select className="form-input">
                                    <option>Select role...</option>
                                    <option>Fabricator</option>
                                    <option>Dealer</option>
                                    <option>Supply Chain</option>
                                    <option>Procurement</option>
                                    <option>Sales</option>
                                    <option>Finance</option>
                                    <option>ERP Team</option>
                                    <option>Admin</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Permissions</label>
                                <div className="permissions-grid">
                                    <label className="checkbox-label">
                                        <input type="checkbox" />
                                        <span>Create Orders</span>
                                    </label>
                                    <label className="checkbox-label">
                                        <input type="checkbox" />
                                        <span>View Orders</span>
                                    </label>
                                    <label className="checkbox-label">
                                        <input type="checkbox" />
                                        <span>Approve Orders</span>
                                    </label>
                                    <label className="checkbox-label">
                                        <input type="checkbox" />
                                        <span>Manage Ranking</span>
                                    </label>
                                    <label className="checkbox-label">
                                        <input type="checkbox" />
                                        <span>View Reports</span>
                                    </label>
                                    <label className="checkbox-label">
                                        <input type="checkbox" />
                                        <span>Manage Users</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-secondary" onClick={() => setShowAddUser(false)}>Cancel</button>
                            <button className="btn-primary">Create User</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserManagement;
