import React, { useState } from 'react';
import { TrendingUp, TrendingDown, BarChart3, Download } from 'lucide-react';
import './Forecasting.css';

const Forecasting: React.FC = () => {
    const [tab, setTab] = useState('extrusion');

    return (
        <div className="forecasting-page">
            <div className="page-header">
                <div>
                    <h1>Forecasting Module</h1>
                    <p className="subtitle">Demand forecasting and inventory planning</p>
                </div>
                <button className="btn-primary">
                    <Download size={18} />
                    Export Forecast
                </button>
            </div>

            <div className="forecast-tabs">
                <button className={`tab ${tab === 'extrusion' ? 'active' : ''}`} onClick={() => setTab('extrusion')}>
                    Extrusion Forecasting
                </button>
                <button className={`tab ${tab === 'hardware' ? 'active' : ''}`} onClick={() => setTab('hardware')}>
                    Hardware Forecasting
                </button>
            </div>

            {tab === 'extrusion' && (
                <div className="forecast-content">
                    <div className="forecast-chart-card">
                        <div className="card-header">
                            <h3>Extrusion Demand Trend (Last 6 Months)</h3>
                            <select className="filter-select">
                                <option>All Sections</option>
                                <option>6063-T6 Series</option>
                                <option>6063-T5 Series</option>
                            </select>
                        </div>
                        <div className="trend-chart">
                            <div className="chart-bars">
                                <div className="bar-group">
                                    <div className="bar" style={{ height: '65%' }}></div>
                                    <span className="bar-value">12,500 kg</span>
                                    <span className="bar-label">Aug</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar" style={{ height: '75%' }}></div>
                                    <span className="bar-value">14,200 kg</span>
                                    <span className="bar-label">Sep</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar" style={{ height: '85%' }}></div>
                                    <span className="bar-value">16,800 kg</span>
                                    <span className="bar-label">Oct</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar" style={{ height: '70%' }}></div>
                                    <span className="bar-value">13,500 kg</span>
                                    <span className="bar-label">Nov</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar" style={{ height: '90%' }}></div>
                                    <span className="bar-value">18,200 kg</span>
                                    <span className="bar-label">Dec</span>
                                </div>
                                <div className="bar-group">
                                    <div className="bar forecast" style={{ height: '95%' }}></div>
                                    <span className="bar-value">19,500 kg</span>
                                    <span className="bar-label">Jan (F)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="forecast-insights">
                        <div className="insight-card">
                            <div className="insight-icon trending-up">
                                <TrendingUp size={24} />
                            </div>
                            <div className="insight-content">
                                <h4>Trend Analysis</h4>
                                <p>Demand increasing by 8% month-over-month</p>
                            </div>
                        </div>
                        <div className="insight-card">
                            <div className="insight-icon">
                                <BarChart3 size={24} />
                            </div>
                            <div className="insight-content">
                                <h4>Average Demand</h4>
                                <p>15,783 kg per month (Last 6 months)</p>
                            </div>
                        </div>
                    </div>

                    <div className="forecast-table-card">
                        <div className="card-header">
                            <h3>Section-wise Forecast</h3>
                        </div>
                        <table className="forecast-table">
                            <thead>
                                <tr>
                                    <th>Section</th>
                                    <th>Last Month</th>
                                    <th>3-Month Avg</th>
                                    <th>Forecast (Next Month)</th>
                                    <th>Trend</th>
                                    <th>Recommendation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>6063-T6-100x50</strong></td>
                                    <td>4,500 kg</td>
                                    <td>4,200 kg</td>
                                    <td>4,800 kg</td>
                                    <td><span className="trend-badge up"><TrendingUp size={14} /> +7%</span></td>
                                    <td><span className="recommendation stock-up">Stock Up</span></td>
                                </tr>
                                <tr>
                                    <td><strong>6063-T5-80x40</strong></td>
                                    <td>3,200 kg</td>
                                    <td>3,500 kg</td>
                                    <td>3,400 kg</td>
                                    <td><span className="trend-badge down"><TrendingDown size={14} /> -3%</span></td>
                                    <td><span className="recommendation maintain">Maintain</span></td>
                                </tr>
                                <tr>
                                    <td><strong>6063-T6-120x60</strong></td>
                                    <td>2,800 kg</td>
                                    <td>2,600 kg</td>
                                    <td>3,100 kg</td>
                                    <td><span className="trend-badge up"><TrendingUp size={14} /> +11%</span></td>
                                    <td><span className="recommendation stock-up">Stock Up</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {tab === 'hardware' && (
                <div className="forecast-content">
                    <div className="hardware-classification">
                        <div className="classification-card runner">
                            <div className="classification-header">
                                <h3>🏃 Runner Items</h3>
                                <span className="count">145 items</span>
                            </div>
                            <p className="classification-desc">High velocity items - Ordered frequently</p>
                            <div className="classification-stats">
                                <div className="stat">
                                    <span className="label">Avg Orders/Month</span>
                                    <span className="value">12+</span>
                                </div>
                                <div className="stat">
                                    <span className="label">Stock Recommendation</span>
                                    <span className="value">High Stock</span>
                                </div>
                            </div>
                        </div>

                        <div className="classification-card stranger">
                            <div className="classification-header">
                                <h3>🚶 Stranger Items</h3>
                                <span className="count">68 items</span>
                            </div>
                            <p className="classification-desc">Medium velocity items - Occasional orders</p>
                            <div className="classification-stats">
                                <div className="stat">
                                    <span className="label">Avg Orders/Month</span>
                                    <span className="value">4-11</span>
                                </div>
                                <div className="stat">
                                    <span className="label">Stock Recommendation</span>
                                    <span className="value">Medium Stock</span>
                                </div>
                            </div>
                        </div>

                        <div className="classification-card dead">
                            <div className="classification-header">
                                <h3>⏸️ Dead Inventory</h3>
                                <span className="count">23 items</span>
                            </div>
                            <p className="classification-desc">No movement for 90+ days</p>
                            <div className="classification-stats">
                                <div className="stat">
                                    <span className="label">Last Ordered</span>
                                    <span className="value">90+ days ago</span>
                                </div>
                                <div className="stat">
                                    <span className="label">Action Required</span>
                                    <span className="value">Review & Clear</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hardware-forecast-table-card">
                        <div className="card-header">
                            <h3>Hardware Items Forecast (Runner Items)</h3>
                            <select className="filter-select">
                                <option>Runner Items</option>
                                <option>Stranger Items</option>
                                <option>Dead Inventory</option>
                            </select>
                        </div>
                        <table className="forecast-table">
                            <thead>
                                <tr>
                                    <th>Item Code</th>
                                    <th>Description</th>
                                    <th>Order Frequency</th>
                                    <th>Last Ordered</th>
                                    <th>Avg Qty/Order</th>
                                    <th>Forecast (Next Month)</th>
                                    <th>Recommendation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>HW-2024-A45</strong></td>
                                    <td>Aluminum Handle - Premium</td>
                                    <td>18 times/month</td>
                                    <td>2 days ago</td>
                                    <td>450 pcs</td>
                                    <td>8,100 pcs</td>
                                    <td><span className="recommendation stock-up">Stock 10,000 pcs</span></td>
                                </tr>
                                <tr>
                                    <td><strong>HW-2024-B32</strong></td>
                                    <td>Lock Mechanism - Standard</td>
                                    <td>15 times/month</td>
                                    <td>1 day ago</td>
                                    <td>320 pcs</td>
                                    <td>4,800 pcs</td>
                                    <td><span className="recommendation stock-up">Stock 6,000 pcs</span></td>
                                </tr>
                                <tr>
                                    <td><strong>HW-2024-C18</strong></td>
                                    <td>Hinge Set - Heavy Duty</td>
                                    <td>12 times/month</td>
                                    <td>3 days ago</td>
                                    <td>280 pcs</td>
                                    <td>3,360 pcs</td>
                                    <td><span className="recommendation maintain">Stock 4,000 pcs</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Forecasting;
