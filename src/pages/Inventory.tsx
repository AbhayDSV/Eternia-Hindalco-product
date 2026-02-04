import React, { useState } from 'react';
import { Package, TrendingDown, AlertTriangle, Download, RefreshCw } from 'lucide-react';
import './Inventory.css';

const Inventory: React.FC = () => {
    const [tab, setTab] = useState('snapshot');

    return (
        <div className="inventory-page">
            <div className="page-header">
                <div>
                    <h1>Inventory Management</h1>
                    <p className="subtitle">Stock levels, movements, and snapshots</p>
                </div>
                <div className="header-actions">
                    <button className="btn-secondary">
                        <RefreshCw size={18} />
                        Sync from Oracle
                    </button>
                    <button className="btn-primary">
                        <Download size={18} />
                        Export Report
                    </button>
                </div>
            </div>

            <div className="inventory-stats">
                <div className="stat-card">
                    <Package size={32} />
                    <div>
                        <h3>Total SKUs</h3>
                        <p className="stat-value">1,245</p>
                    </div>
                </div>
                <div className="stat-card">
                    <TrendingDown size={32} />
                    <div>
                        <h3>Low Stock Items</h3>
                        <p className="stat-value">34</p>
                    </div>
                </div>
                <div className="stat-card">
                    <AlertTriangle size={32} />
                    <div>
                        <h3>Out of Stock</h3>
                        <p className="stat-value">12</p>
                    </div>
                </div>
            </div>

            <div className="inventory-tabs">
                <button className={`tab ${tab === 'snapshot' ? 'active' : ''}`} onClick={() => setTab('snapshot')}>
                    Inventory Snapshot
                </button>
                <button className={`tab ${tab === 'movements' ? 'active' : ''}`} onClick={() => setTab('movements')}>
                    Stock Movements
                </button>
                <button className={`tab ${tab === 'shortfall' ? 'active' : ''}`} onClick={() => setTab('shortfall')}>
                    Shortfall Report
                </button>
            </div>

            {tab === 'snapshot' && (
                <div className="inventory-table-card">
                    <div className="card-header">
                        <h3>Current Inventory Snapshot</h3>
                        <div className="filters">
                            <select className="filter-select">
                                <option>All Categories</option>
                                <option>Extrusion</option>
                                <option>Hardware</option>
                            </select>
                            <select className="filter-select">
                                <option>All Warehouses</option>
                                <option>Warehouse A</option>
                                <option>Warehouse B</option>
                            </select>
                        </div>
                    </div>
                    <table className="inventory-table">
                        <thead>
                            <tr>
                                <th>Item Code</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Available Qty</th>
                                <th>Reserved Qty</th>
                                <th>Safety Stock</th>
                                <th>Location</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>6063-T6-100x50</strong></td>
                                <td>Aluminum Extrusion Section</td>
                                <td>Extrusion</td>
                                <td>2,500 kg</td>
                                <td>800 kg</td>
                                <td>2,000 kg</td>
                                <td>WH-A-12</td>
                                <td><span className="stock-status in-stock">In Stock</span></td>
                            </tr>
                            <tr className="low-stock-row">
                                <td><strong>6063-T5-80x40</strong></td>
                                <td>Aluminum Extrusion Section</td>
                                <td>Extrusion</td>
                                <td>900 kg</td>
                                <td>400 kg</td>
                                <td>1,500 kg</td>
                                <td>WH-B-08</td>
                                <td><span className="stock-status low-stock">Low Stock</span></td>
                            </tr>
                            <tr className="out-of-stock-row">
                                <td><strong>HW-2024-C18</strong></td>
                                <td>Hinge Set - Heavy Duty</td>
                                <td>Hardware</td>
                                <td>0 pcs</td>
                                <td>0 pcs</td>
                                <td>300 pcs</td>
                                <td>WH-A-15</td>
                                <td><span className="stock-status out-of-stock">Out of Stock</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {tab === 'movements' && (
                <div className="inventory-table-card">
                    <div className="card-header">
                        <h3>Stock Movements (Last 30 Days)</h3>
                    </div>
                    <table className="inventory-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Item Code</th>
                                <th>Description</th>
                                <th>Type</th>
                                <th>Quantity</th>
                                <th>Reference</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jan 19, 2026</td>
                                <td><strong>6063-T6-100x50</strong></td>
                                <td>Aluminum Extrusion Section</td>
                                <td><span className="movement-type in">Inward</span></td>
                                <td>+1,500 kg</td>
                                <td>PO-2024-0892</td>
                                <td>WH-A-12</td>
                            </tr>
                            <tr>
                                <td>Jan 18, 2026</td>
                                <td><strong>HW-2024-A45</strong></td>
                                <td>Aluminum Handle - Premium</td>
                                <td><span className="movement-type out">Outward</span></td>
                                <td>-500 pcs</td>
                                <td>ORD-2024-1240</td>
                                <td>WH-A-15</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {tab === 'shortfall' && (
                <div className="shortfall-card">
                    <div className="card-header">
                        <h3>Inventory Shortfall Report</h3>
                        <span className="alert-badge">12 Items Below Safety Stock</span>
                    </div>
                    <div className="shortfall-list">
                        <div className="shortfall-item critical">
                            <div className="shortfall-info">
                                <h4>6063-T5-80x40</h4>
                                <p>Aluminum Extrusion Section</p>
                                <div className="shortfall-details">
                                    <span>Available: 900 kg</span>
                                    <span>Safety Stock: 1,500 kg</span>
                                    <span className="shortfall-value">Shortfall: -600 kg</span>
                                </div>
                            </div>
                            <button className="btn-action">Create PO</button>
                        </div>
                        <div className="shortfall-item critical">
                            <div className="shortfall-info">
                                <h4>HW-2024-C18</h4>
                                <p>Hinge Set - Heavy Duty</p>
                                <div className="shortfall-details">
                                    <span>Available: 0 pcs</span>
                                    <span>Safety Stock: 300 pcs</span>
                                    <span className="shortfall-value">Shortfall: -300 pcs</span>
                                </div>
                            </div>
                            <button className="btn-action">Create PO</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Inventory;
