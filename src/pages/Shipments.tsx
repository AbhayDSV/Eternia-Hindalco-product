import React from 'react';
import { Truck, MapPin, Clock, Package, Download } from 'lucide-react';
import './Shipments.css';

const Shipments: React.FC = () => {
    return (
        <div className="shipments-page">
            <div className="page-header">
                <div>
                    <h1>Shipment Tracking</h1>
                    <p className="subtitle">Track deliveries with driver and truck details</p>
                </div>
                <button className="btn-primary">
                    <Download size={18} />
                    Export Report
                </button>
            </div>

            <div className="shipments-stats">
                <div className="stat-card">
                    <Truck size={32} />
                    <div>
                        <h3>In Transit</h3>
                        <p className="stat-value">24</p>
                    </div>
                </div>
                <div className="stat-card">
                    <Package size={32} />
                    <div>
                        <h3>Delivered Today</h3>
                        <p className="stat-value">18</p>
                    </div>
                </div>
                <div className="stat-card">
                    <Clock size={32} />
                    <div>
                        <h3>Pending Dispatch</h3>
                        <p className="stat-value">12</p>
                    </div>
                </div>
            </div>

            <div className="shipments-grid">
                <div className="shipment-card in-transit">
                    <div className="shipment-header">
                        <div>
                            <h3>ORD-2024-1245</h3>
                            <p className="shipment-meta">PI-2024-0892 • ABC Fabricators</p>
                        </div>
                        <span className="status-badge in-transit">In Transit</span>
                    </div>
                    <div className="shipment-details">
                        <div className="detail-row">
                            <Truck size={18} />
                            <div>
                                <span className="label">Truck Number</span>
                                <span className="value">MH-12-AB-1234</span>
                            </div>
                        </div>
                        <div className="detail-row">
                            <MapPin size={18} />
                            <div>
                                <span className="label">Driver Name</span>
                                <span className="value">Rajesh Kumar</span>
                            </div>
                        </div>
                        <div className="detail-row">
                            <Clock size={18} />
                            <div>
                                <span className="label">Expected Delivery</span>
                                <span className="value">Jan 22, 2026 • 2:00 PM</span>
                            </div>
                        </div>
                        <div className="detail-row">
                            <Package size={18} />
                            <div>
                                <span className="label">Dispatch Date</span>
                                <span className="value">Jan 19, 2026 • 10:30 AM</span>
                            </div>
                        </div>
                    </div>
                    <div className="shipment-progress">
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: '65%' }}></div>
                        </div>
                        <span className="progress-text">65% Complete • 280 km remaining</span>
                    </div>
                </div>

                <div className="shipment-card delivered">
                    <div className="shipment-header">
                        <div>
                            <h3>ORD-2024-1240</h3>
                            <p className="shipment-meta">PI-2024-0888 • XYZ Industries</p>
                        </div>
                        <span className="status-badge delivered">Delivered</span>
                    </div>
                    <div className="shipment-details">
                        <div className="detail-row">
                            <Truck size={18} />
                            <div>
                                <span className="label">Truck Number</span>
                                <span className="value">MH-14-CD-5678</span>
                            </div>
                        </div>
                        <div className="detail-row">
                            <MapPin size={18} />
                            <div>
                                <span className="label">Driver Name</span>
                                <span className="value">Suresh Patil</span>
                            </div>
                        </div>
                        <div className="detail-row">
                            <Clock size={18} />
                            <div>
                                <span className="label">Delivered On</span>
                                <span className="value">Jan 19, 2026 • 11:45 AM</span>
                            </div>
                        </div>
                        <div className="detail-row">
                            <Package size={18} />
                            <div>
                                <span className="label">Dispatch Date</span>
                                <span className="value">Jan 18, 2026 • 9:00 AM</span>
                            </div>
                        </div>
                    </div>
                    <button className="btn-view-pod">View Proof of Delivery</button>
                </div>

                <div className="shipment-card pending">
                    <div className="shipment-header">
                        <div>
                            <h3>ORD-2024-1238</h3>
                            <p className="shipment-meta">PI-2024-0885 • PQR Constructions</p>
                        </div>
                        <span className="status-badge pending">Pending Dispatch</span>
                    </div>
                    <div className="shipment-details">
                        <div className="detail-row">
                            <Package size={18} />
                            <div>
                                <span className="label">Ready for Dispatch</span>
                                <span className="value">Yes</span>
                            </div>
                        </div>
                        <div className="detail-row">
                            <Clock size={18} />
                            <div>
                                <span className="label">Scheduled Dispatch</span>
                                <span className="value">Jan 20, 2026 • 8:00 AM</span>
                            </div>
                        </div>
                    </div>
                    <button className="btn-assign-truck">Assign Truck & Driver</button>
                </div>
            </div>

            <div className="shipments-table-card">
                <div className="card-header">
                    <h3>All Shipments</h3>
                    <select className="filter-select">
                        <option>All Status</option>
                        <option>In Transit</option>
                        <option>Delivered</option>
                        <option>Pending</option>
                    </select>
                </div>
                <table className="shipments-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>PI Number</th>
                            <th>Customer</th>
                            <th>Truck Number</th>
                            <th>Driver Name</th>
                            <th>Dispatch Date</th>
                            <th>Expected Delivery</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>ORD-2024-1245</strong></td>
                            <td>PI-2024-0892</td>
                            <td>ABC Fabricators</td>
                            <td>MH-12-AB-1234</td>
                            <td>Rajesh Kumar</td>
                            <td>Jan 19, 10:30 AM</td>
                            <td>Jan 22, 2:00 PM</td>
                            <td><span className="status-badge in-transit">In Transit</span></td>
                        </tr>
                        <tr>
                            <td><strong>ORD-2024-1240</strong></td>
                            <td>PI-2024-0888</td>
                            <td>XYZ Industries</td>
                            <td>MH-14-CD-5678</td>
                            <td>Suresh Patil</td>
                            <td>Jan 18, 9:00 AM</td>
                            <td>Jan 19, 11:45 AM</td>
                            <td><span className="status-badge delivered">Delivered</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Shipments;
