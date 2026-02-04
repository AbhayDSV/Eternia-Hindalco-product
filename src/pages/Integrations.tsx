import React, { useState } from 'react';
import { Activity, Database, CheckCircle, XCircle, Download, FileText, Upload, X } from 'lucide-react';
import './Integrations.css';

const Integrations: React.FC = () => {
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [selectedDestination, setSelectedDestination] = useState<'oracle' | 'wns' | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadSuccess, setUploadSuccess] = useState(false);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile || !selectedDestination) return;

        setIsUploading(true);
        setUploadProgress(0);

        // Simulate file upload with progress
        const fileSize = selectedFile.size;
        const chunkSize = fileSize / 100; // Divide into 100 chunks for percentage
        let uploaded = 0;

        const uploadInterval = setInterval(() => {
            uploaded += chunkSize;
            const progress = Math.min((uploaded / fileSize) * 100, 100);
            setUploadProgress(Math.round(progress));

            if (progress >= 100) {
                clearInterval(uploadInterval);
                setTimeout(() => {
                    setIsUploading(false);
                    setUploadSuccess(true);

                    // Auto-close modal after 2 seconds
                    setTimeout(() => {
                        handleCloseModal();
                    }, 2000);
                }, 500);
            }
        }, 50); // Adjust speed based on file size simulation
    };

    const handleCloseModal = () => {
        setShowUploadModal(false);
        setSelectedDestination(null);
        setSelectedFile(null);
        setIsUploading(false);
        setUploadProgress(0);
        setUploadSuccess(false);
    };

    return (
        <div className="integrations-page">
            <div className="page-header">
                <div>
                    <h1>Integration Health Dashboard</h1>
                    <p className="subtitle">Oracle ERP and WMS integration monitoring</p>
                </div>
                <button className="btn-primary" onClick={() => setShowUploadModal(true)}>
                    <Upload size={18} />
                    Upload Data
                </button>
            </div>

            {/* Upload Modal */}
            {showUploadModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="upload-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Upload Data to System</h2>
                            <button className="close-btn" onClick={handleCloseModal}>
                                <X size={24} />
                            </button>
                        </div>

                        {!uploadSuccess ? (
                            <>
                                <div className="modal-content" style={{width:"100%"}}>
                                    <div className="destination-selection">
                                        <h3>Select Destination System</h3>
                                        <div className="destination-options">
                                            <button
                                                className={`destination-btn ${selectedDestination === 'oracle' ? 'selected' : ''}`}
                                                onClick={() => setSelectedDestination('oracle')}
                                                disabled={isUploading}
                                            >
                                                <Database size={32} />
                                                <span>Oracle ERP</span>
                                            </button>
                                            <button
                                                className={`destination-btn ${selectedDestination === 'wns' ? 'selected' : ''}`}
                                                onClick={() => setSelectedDestination('wns')}
                                                disabled={isUploading}
                                            >
                                                <Database size={32} />
                                                <span>WNS</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="file-upload-section">
                                        <h3>Select File to Upload</h3>
                                        <div className="file-input-wrapper">
                                            <input
                                                type="file"
                                                id="file-upload"
                                                accept=".csv,.xlsx,.xls,.pdf,.doc,.docx"
                                                onChange={handleFileSelect}
                                                disabled={isUploading}
                                            />
                                            <label htmlFor="file-upload" className="file-upload-label">
                                                <Upload size={24} />
                                                <span>
                                                    {selectedFile ? selectedFile.name : 'Choose CSV or Document'}
                                                </span>
                                            </label>
                                        </div>
                                        {selectedFile && (
                                            <div className="file-info">
                                                <p>File size: {(selectedFile.size / 1024).toFixed(2)} KB</p>
                                            </div>
                                        )}
                                    </div>

                                    {isUploading && (
                                        <div className="upload-progress">
                                            <div className="progress-info">
                                                <span>Uploading...</span>
                                                <span>{uploadProgress}%</span>
                                            </div>
                                            <div className="progress-bar">
                                                <div
                                                    className="progress-fill"
                                                    style={{ width: `${uploadProgress}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="modal-footer">
                                    <button
                                        className="btn-secondary"
                                        onClick={handleCloseModal}
                                        disabled={isUploading}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="btn-primary"
                                        onClick={handleUpload}
                                        disabled={!selectedFile || !selectedDestination || isUploading}
                                    >
                                        {isUploading ? 'Uploading...' : 'Upload'}
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="upload-success">
                                <CheckCircle size={64} className="success-icon" />
                                <h3>Upload Successful!</h3>
                                <p>Data has been successfully uploaded to {selectedDestination === 'oracle' ? 'Oracle ERP' : 'WNS'}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="integration-health">
                <div className="health-card healthy">
                    <div className="health-header">
                        <Activity size={32} />
                        <div>
                            <h3>Oracle ERP</h3>
                            <p>Last sync: 2 mins ago</p>
                        </div>
                    </div>
                    <div className="health-status">
                        <span className="status-indicator healthy"></span>
                        <span className="status-text">Healthy</span>
                    </div>
                    <div className="health-stats">
                        <div className="stat">
                            <span className="label">Uptime</span>
                            <span className="value">99.8%</span>
                        </div>
                        <div className="stat">
                            <span className="label">Sync Success Rate</span>
                            <span className="value">98.5%</span>
                        </div>
                    </div>
                </div>

                <div className="health-card healthy">
                    <div className="health-header">
                        <Database size={32} />
                        <div>
                            <h3>WMS (Signore)</h3>
                            <p>Last sync: 5 mins ago</p>
                        </div>
                    </div>
                    <div className="health-status">
                        <span className="status-indicator healthy"></span>
                        <span className="status-text">Healthy</span>
                    </div>
                    <div className="health-stats">
                        <div className="stat">
                            <span className="label">Uptime</span>
                            <span className="value">99.5%</span>
                        </div>
                        <div className="stat">
                            <span className="label">Sync Success Rate</span>
                            <span className="value">97.8%</span>
                        </div>
                    </div>
                </div>

                <div className="health-card warning">
                    <div className="health-header">
                        <Activity size={32} />
                        <div>
                            <h3>Email Service</h3>
                            <p>Last sync: 15 mins ago</p>
                        </div>
                    </div>
                    <div className="health-status">
                        <span className="status-indicator warning"></span>
                        <span className="status-text">Degraded</span>
                    </div>
                    <div className="health-stats">
                        <div className="stat">
                            <span className="label">Uptime</span>
                            <span className="value">95.2%</span>
                        </div>
                        <div className="stat">
                            <span className="label">Delivery Rate</span>
                            <span className="value">92.1%</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="integration-jobs-card">
                <div className="card-header">
                    <h3>Integration Job Status</h3>
                    <button className="btn-secondary-small">
                        <Download size={16} />
                        Export Logs
                    </button>
                </div>
                <table className="jobs-table">
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
                            <td><span className="status-badge success"><CheckCircle size={14} /> Success</span></td>
                            <td><button className="btn-action-small">View Log</button></td>
                        </tr>
                        <tr className="failed-row">
                            <td><strong>JOB-2024-5677</strong></td>
                            <td>Dispatch Update</td>
                            <td>ORD-2024-1240</td>
                            <td>10:42 AM</td>
                            <td>-</td>
                            <td><span className="status-badge failed"><XCircle size={14} /> Failed</span></td>
                            <td><button className="btn-action-small">Retry</button></td>
                        </tr>
                        <tr>
                            <td><strong>JOB-2024-5676</strong></td>
                            <td>Inventory Sync</td>
                            <td>-</td>
                            <td>10:30 AM</td>
                            <td>15.8s</td>
                            <td><span className="status-badge success"><CheckCircle size={14} /> Success</span></td>
                            <td><button className="btn-action-small">View Log</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="integration-reports">
                <div className="report-card">
                    <div className="report-header">
                        <h3>Oracle Reports</h3>
                        <Database size={20} />
                    </div>
                    <div className="report-list">
                        <button className="report-btn">
                            <FileText size={18} />
                            <div>
                                <h4>Shipment Report</h4>
                                <p>Driver & truck details, dispatch status</p>
                            </div>
                        </button>
                        <button className="report-btn">
                            <FileText size={18} />
                            <div>
                                <h4>Stock Report</h4>
                                <p>Current inventory levels</p>
                            </div>
                        </button>
                        <button className="report-btn">
                            <FileText size={18} />
                            <div>
                                <h4>Sales Order Status</h4>
                                <p>SO creation and processing status</p>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="report-card">
                    <div className="report-header">
                        <h3>WMS Reports</h3>
                        <Database size={20} />
                    </div>
                    <div className="report-list">
                        <button className="report-btn">
                            <FileText size={18} />
                            <div>
                                <h4>Inventory Report</h4>
                                <p>Warehouse inventory snapshot</p>
                            </div>
                        </button>
                        <button className="report-btn">
                            <FileText size={18} />
                            <div>
                                <h4>PO Report</h4>
                                <p>Purchase order tracking</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Integrations;
