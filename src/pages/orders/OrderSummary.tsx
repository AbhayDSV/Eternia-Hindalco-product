import React, { useState } from 'react';
import { Search, Filter, Download, Eye, Edit } from 'lucide-react';
import './OrderSummary.css';

const OrderSummary: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState('all');

    return (
        <div className="order-summary">
            <div className="page-header">
                <div>
                    <h1>Order Summary</h1>
                    <p className="subtitle">View and manage all orders</p>
                </div>
                <button className="btn-primary">
                    <Download size={18} />
                    Export to Excel
                </button>
            </div>

            {/* Filters */}
            <div className="filters-section">
                <div className="search-box">
                    <Search size={20} />
                    <input type="text" placeholder="Search by Order ID, PI No, Project, Fabricator..." />
                </div>
                <div className="filter-controls">
                    <select className="filter-select">
                        <option>All Types</option>
                        <option>Retail</option>
                        <option>Project</option>
                        <option>Facade</option>
                        <option>Totalis</option>
                    </select>
                    <select className="filter-select">
                        <option>All Materials</option>
                        <option>Extrusion</option>
                        <option>Hardware</option>
                        <option>Punching Tools</option>
                    </select>
                    <select className="filter-select">
                        <option>All Dates</option>
                        <option>Today</option>
                        <option>This Week</option>
                        <option>This Month</option>
                    </select>
                    <button className="btn-filter">
                        <Filter size={18} />
                        More Filters
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="tabs-container">
                <button
                    className={`tab ${selectedTab === 'all' ? 'active' : ''}`}
                    onClick={() => setSelectedTab('all')}
                >
                    All Orders (286)
                </button>
                <button
                    className={`tab ${selectedTab === 'saved' ? 'active' : ''}`}
                    onClick={() => setSelectedTab('saved')}
                >
                    Saved (12)
                </button>
                <button
                    className={`tab ${selectedTab === 'submitted' ? 'active' : ''}`}
                    onClick={() => setSelectedTab('submitted')}
                >
                    Submitted (24)
                </button>
                <button
                    className={`tab ${selectedTab === 'approved' ? 'active' : ''}`}
                    onClick={() => setSelectedTab('approved')}
                >
                    Approved (98)
                </button>
                <button
                    className={`tab ${selectedTab === 'refer-back' ? 'active' : ''}`}
                    onClick={() => setSelectedTab('refer-back')}
                >
                    Refer Back (8)
                </button>
                <button
                    className={`tab ${selectedTab === 'wip' ? 'active' : ''}`}
                    onClick={() => setSelectedTab('wip')}
                >
                    WIP (52)
                </button>
                <button
                    className={`tab ${selectedTab === 'closed' ? 'active' : ''}`}
                    onClick={() => setSelectedTab('closed')}
                >
                    Closed (85)
                </button>
                <button
                    className={`tab ${selectedTab === 'cancelled' ? 'active' : ''}`}
                    onClick={() => setSelectedTab('cancelled')}
                >
                    Cancelled (7)
                </button>
            </div>

            {/* Orders Table */}
            <div className="orders-card">
                <div className="table-container">
                    <table className="orders-table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>PI Number</th>
                                <th>Type</th>
                                <th>Material</th>
                                <th>Fabricator</th>
                                <th>Amount</th>
                                <th>Created Date</th>
                                <th>Expected Delivery</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>ORD-2024-1245</strong></td>
                                <td>PI-2024-0892</td>
                                <td><span className="badge badge-purple">Project</span></td>
                                <td>Extrusion, Hardware</td>
                                <td>ABC Fabricators</td>
                                <td>₹8,45,000</td>
                                <td>Jan 15, 2026</td>
                                <td>Jan 22, 2026</td>
                                <td><span className="status-badge status-approved">Approved</span></td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="btn-icon" title="View"><Eye size={16} /></button>
                                        <button className="btn-icon" title="Edit"><Edit size={16} /></button>
                                        <button className="btn-icon" title="Download"><Download size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>ORD-2024-1244</strong></td>
                                <td>PI-2024-0890</td>
                                <td><span className="badge badge-blue">Retail</span></td>
                                <td>Extrusion</td>
                                <td>XYZ Industries</td>
                                <td>₹4,25,000</td>
                                <td>Jan 16, 2026</td>
                                <td>Jan 23, 2026</td>
                                <td><span className="status-badge status-wip">WIP</span></td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="btn-icon" title="View"><Eye size={16} /></button>
                                        <button className="btn-icon" title="Edit"><Edit size={16} /></button>
                                        <button className="btn-icon" title="Download"><Download size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="refer-back-row">
                                <td><strong>ORD-2024-1243</strong></td>
                                <td>PI-2024-0888</td>
                                <td><span className="badge badge-teal">Facade</span></td>
                                <td>Extrusion, Hardware</td>
                                <td>PQR Constructions</td>
                                <td>₹12,50,000</td>
                                <td>Jan 14, 2026</td>
                                <td>-</td>
                                <td><span className="status-badge status-refer-back">Refer Back</span></td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="btn-icon" title="View"><Eye size={16} /></button>
                                        <button className="btn-icon" title="Edit"><Edit size={16} /></button>
                                        <button className="btn-icon" title="Download"><Download size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>ORD-2024-1242</strong></td>
                                <td>PI-2024-0886</td>
                                <td><span className="badge badge-blue">Retail</span></td>
                                <td>Hardware</td>
                                <td>LMN Fabricators</td>
                                <td>₹3,20,000</td>
                                <td>Jan 17, 2026</td>
                                <td>Jan 24, 2026</td>
                                <td><span className="status-badge status-submitted">Submitted</span></td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="btn-icon" title="View"><Eye size={16} /></button>
                                        <button className="btn-icon" title="Edit"><Edit size={16} /></button>
                                        <button className="btn-icon" title="Download"><Download size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>ORD-2024-1241</strong></td>
                                <td>PI-2024-0884</td>
                                <td><span className="badge badge-purple">Project</span></td>
                                <td>Extrusion</td>
                                <td>ABC Fabricators</td>
                                <td>₹6,75,000</td>
                                <td>Jan 13, 2026</td>
                                <td>Jan 20, 2026</td>
                                <td><span className="status-badge status-closed">Closed</span></td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="btn-icon" title="View"><Eye size={16} /></button>
                                        <button className="btn-icon" title="Download"><Download size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="pagination">
                    <button className="pagination-btn">Previous</button>
                    <div className="pagination-numbers">
                        <button className="pagination-number active">1</button>
                        <button className="pagination-number">2</button>
                        <button className="pagination-number">3</button>
                        <span>...</span>
                        <button className="pagination-number">12</button>
                    </div>
                    <button className="pagination-btn">Next</button>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
