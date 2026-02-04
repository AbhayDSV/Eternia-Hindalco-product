import React, { useState, useRef } from 'react';
import { Database, Upload, Download, CheckCircle, AlertTriangle, X, FileText } from 'lucide-react';
import './MasterData.css';

const MasterData: React.FC = () => {
    const [tab, setTab] = useState('products');
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [uploadError, setUploadError] = useState('');
    const [dragActive, setDragActive] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleFile = (file: File) => {
        // Validate file type
        const validTypes = [
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'text/csv'
        ];

        if (!validTypes.includes(file.type)) {
            setUploadError('Please upload a valid Excel (.xlsx, .xls) or CSV file');
            return;
        }

        // Validate file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
            setUploadError('File size must be less than 10MB');
            return;
        }

        setUploadedFile(file);
        setUploadError('');
        setUploadSuccess(false);
    };

    const handleUpload = () => {
        if (!uploadedFile) return;

        setUploading(true);
        setUploadProgress(0);
        setUploadError('');

        // Simulate upload progress
        const interval = setInterval(() => {
            setUploadProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setUploading(false);
                    setUploadSuccess(true);
                    setTimeout(() => {
                        setUploadedFile(null);
                        setUploadSuccess(false);
                        setUploadProgress(0);
                    }, 3000);
                    return 100;
                }
                return prev + 10;
            });
        }, 200);
    };

    const handleRemoveFile = () => {
        setUploadedFile(null);
        setUploadError('');
        setUploadSuccess(false);
        setUploadProgress(0);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleDownloadTemplate = () => {
        // Create CSV template content
        const csvContent = `SKU Code,Description,Category,Rate,Pack Size,Tolerance,UOM
6063-T6-100x50,Aluminum Extrusion Section,Extrusion,285,6m,±2%,kg
6063-T5-80x40,Aluminum Extrusion Section,Extrusion,270,6m,±2%,kg
HW-2024-A45,Aluminum Handle - Premium,Hardware,450,50 pcs,±0%,pc
HW-2024-B32,Lock Mechanism - Standard,Hardware,320,50 pcs,±0%,pc
HW-2024-C18,Hinge Set - Heavy Duty,Hardware,280,100 pcs,±0%,pc`;

        // Create blob and download
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);

        link.setAttribute('href', url);
        link.setAttribute('download', 'ETERNIA_Product_Master_Template.csv');
        link.style.visibility = 'hidden';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Clean up
        URL.revokeObjectURL(url);
    };

    const renderUploadSection = (title: string, description: string) => (
        <div className="upload-section">
            <div className="upload-card">
                <Database size={48} />
                <h3>{title}</h3>
                <p>{description}</p>

                <div
                    className={`file-drop-zone ${dragActive ? 'drag-active' : ''} ${uploadedFile ? 'has-file' : ''}`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                >
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".xlsx,.xls,.csv"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />

                    {!uploadedFile ? (
                        <>
                            <Upload size={48} className="upload-icon" />
                            <p className="drop-text">
                                <strong>Click to upload</strong> or drag and drop
                            </p>
                            <p className="drop-hint">Excel (.xlsx, .xls) or CSV files (max 10MB)</p>
                        </>
                    ) : (
                        <div className="file-preview">
                            <FileText size={48} className="file-icon" />
                            <div className="file-info">
                                <p className="file-name">{uploadedFile.name}</p>
                                <p className="file-size">{(uploadedFile.size / 1024).toFixed(2)} KB</p>
                            </div>
                            <button
                                className="btn-remove-file"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveFile();
                                }}
                            >
                                <X size={20} />
                            </button>
                        </div>
                    )}
                </div>

                {uploading && (
                    <div className="upload-progress">
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${uploadProgress}%` }}></div>
                        </div>
                        <p className="progress-text">Uploading... {uploadProgress}%</p>
                    </div>
                )}

                {uploadSuccess && (
                    <div className="upload-message success">
                        <CheckCircle size={20} />
                        <span>File uploaded successfully!</span>
                    </div>
                )}

                {uploadError && (
                    <div className="upload-message error">
                        <AlertTriangle size={20} />
                        <span>{uploadError}</span>
                    </div>
                )}

                <div className="upload-actions">
                    <button className="btn-secondary" onClick={handleDownloadTemplate}>
                        <Download size={18} />
                        Download Template
                    </button>
                    <button
                        className="btn-primary"
                        onClick={handleUpload}
                        disabled={!uploadedFile || uploading}
                    >
                        <Upload size={18} />
                        {uploading ? 'Uploading...' : 'Upload File'}
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="master-data-page">
            <div className="page-header">
                <div>
                    <h1>Master Data Management</h1>
                    <p className="subtitle">Manage products, projects, addresses, and configurations</p>
                </div>
                <button className="btn-primary" onClick={() => fileInputRef.current?.click()}>
                    <Upload size={18} />
                    Bulk Upload
                </button>
            </div>

            <div className="master-data-tabs">
                <button className={`tab ${tab === 'products' ? 'active' : ''}`} onClick={() => setTab('products')}>
                    Products & SKUs
                </button>
                <button className={`tab ${tab === 'projects' ? 'active' : ''}`} onClick={() => setTab('projects')}>
                    Projects
                </button>
                <button className={`tab ${tab === 'addresses' ? 'active' : ''}`} onClick={() => setTab('addresses')}>
                    Addresses
                </button>
                <button className={`tab ${tab === 'mto' ? 'active' : ''}`} onClick={() => setTab('mto')}>
                    MTO Upload
                </button>
            </div>

            {tab === 'products' && (
                <div className="master-data-content">
                    {renderUploadSection(
                        'Product Master Upload',
                        'Upload SKU rates, prices, pack sizes, and tolerance settings'
                    )}

                    <div className="master-data-table-card">
                        <div className="card-header">
                            <h3>Product Master (845 records)</h3>
                            <input type="text" className="search-input" placeholder="Search products..." />
                        </div>
                        <table className="master-data-table">
                            <thead>
                                <tr>
                                    <th>SKU Code</th>
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th>Rate</th>
                                    <th>Pack Size</th>
                                    <th>Tolerance</th>
                                    <th>Last Updated</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>6063-T6-100x50</strong></td>
                                    <td>Aluminum Extrusion Section</td>
                                    <td>Extrusion</td>
                                    <td>₹285/kg</td>
                                    <td>6m</td>
                                    <td>±2%</td>
                                    <td>Jan 15, 2026</td>
                                    <td><button className="btn-action-small">Edit</button></td>
                                </tr>
                                <tr>
                                    <td><strong>HW-2024-A45</strong></td>
                                    <td>Aluminum Handle - Premium</td>
                                    <td>Hardware</td>
                                    <td>₹450/pc</td>
                                    <td>50 pcs</td>
                                    <td>±0%</td>
                                    <td>Jan 12, 2026</td>
                                    <td><button className="btn-action-small">Edit</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {tab === 'projects' && (
                <div className="master-data-content">
                    <div className="projects-header">
                        <h3>Project Management</h3>
                        <button className="btn-primary-small">Add Project</button>
                    </div>

                    <div className="projects-grid">
                        <div className="project-card">
                            <div className="project-header">
                                <h4>Skyline Tower Phase 2</h4>
                                <span className="project-status active">Active</span>
                            </div>
                            <div className="project-details">
                                <div className="detail-row">
                                    <span className="label">Project Code:</span>
                                    <span className="value">PROJ-2024-001</span>
                                </div>
                                <div className="detail-row">
                                    <span className="label">Fabricators:</span>
                                    <span className="value">ABC Fabricators, XYZ Industries</span>
                                </div>
                                <div className="detail-row">
                                    <span className="label">Start Date:</span>
                                    <span className="value">Jan 01, 2026</span>
                                </div>
                                <div className="detail-row">
                                    <span className="label">Orders:</span>
                                    <span className="value">24 orders</span>
                                </div>
                            </div>
                            <button className="btn-action">Manage SKU Mapping</button>
                        </div>

                        <div className="project-card">
                            <div className="project-header">
                                <h4>Metro Station Complex</h4>
                                <span className="project-status active">Active</span>
                            </div>
                            <div className="project-details">
                                <div className="detail-row">
                                    <span className="label">Project Code:</span>
                                    <span className="value">PROJ-2024-002</span>
                                </div>
                                <div className="detail-row">
                                    <span className="label">Fabricators:</span>
                                    <span className="value">PQR Constructions</span>
                                </div>
                                <div className="detail-row">
                                    <span className="label">Start Date:</span>
                                    <span className="value">Dec 15, 2025</span>
                                </div>
                                <div className="detail-row">
                                    <span className="label">Orders:</span>
                                    <span className="value">18 orders</span>
                                </div>
                            </div>
                            <button className="btn-action">Manage SKU Mapping</button>
                        </div>
                    </div>
                </div>
            )}

            {tab === 'addresses' && (
                <div className="master-data-content">
                    {renderUploadSection(
                        'Address Template Upload',
                        'Upload billing and shipping address templates'
                    )}

                    <div className="validation-report">
                        <div className="report-header">
                            <h3>Last Upload Validation Report</h3>
                            <span className="report-date">Jan 18, 2026 • 10:30 AM</span>
                        </div>
                        <div className="validation-summary">
                            <div className="validation-item success">
                                <CheckCircle size={20} />
                                <span>45 records uploaded successfully</span>
                            </div>
                            <div className="validation-item error">
                                <AlertTriangle size={20} />
                                <span>3 records failed validation</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {tab === 'mto' && (
                <div className="master-data-content">
                    <div className="mto-upload-section">
                        <div className="upload-card">
                            <Database size={48} />
                            <h3>MTO (Make-to-Order) Upload</h3>
                            <p>Upload MTO data with revision tracking</p>
                            <div className="upload-form">
                                <div className="form-group">
                                    <label>Effective Date</label>
                                    <input type="date" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label>Revision Number</label>
                                    <input type="text" className="form-input" placeholder="e.g., Rev 1.2" />
                                </div>

                                <div
                                    className={`file-drop-zone ${dragActive ? 'drag-active' : ''} ${uploadedFile ? 'has-file' : ''}`}
                                    onDragEnter={handleDrag}
                                    onDragLeave={handleDrag}
                                    onDragOver={handleDrag}
                                    onDrop={handleDrop}
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    {!uploadedFile ? (
                                        <>
                                            <Upload size={40} className="upload-icon" />
                                            <p className="drop-text">Click to upload or drag and drop</p>
                                        </>
                                    ) : (
                                        <div className="file-preview">
                                            <FileText size={40} className="file-icon" />
                                            <div className="file-info">
                                                <p className="file-name">{uploadedFile.name}</p>
                                                <p className="file-size">{(uploadedFile.size / 1024).toFixed(2)} KB</p>
                                            </div>
                                            <button
                                                className="btn-remove-file"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleRemoveFile();
                                                }}
                                            >
                                                <X size={20} />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {uploading && (
                                    <div className="upload-progress">
                                        <div className="progress-bar">
                                            <div className="progress-fill" style={{ width: `${uploadProgress}%` }}></div>
                                        </div>
                                        <p className="progress-text">Uploading... {uploadProgress}%</p>
                                    </div>
                                )}

                                {uploadSuccess && (
                                    <div className="upload-message success">
                                        <CheckCircle size={20} />
                                        <span>MTO file uploaded successfully!</span>
                                    </div>
                                )}

                                {uploadError && (
                                    <div className="upload-message error">
                                        <AlertTriangle size={20} />
                                        <span>{uploadError}</span>
                                    </div>
                                )}

                                <div className="upload-actions">
                                    <button className="btn-secondary" onClick={handleDownloadTemplate}>
                                        <Download size={18} />
                                        Download Template
                                    </button>
                                    <button
                                        className="btn-primary"
                                        onClick={handleUpload}
                                        disabled={!uploadedFile || uploading}
                                    >
                                        <Upload size={18} />
                                        {uploading ? 'Uploading...' : 'Upload MTO File'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mto-history-card">
                        <div className="card-header">
                            <h3>MTO Upload History</h3>
                        </div>
                        <table className="mto-history-table">
                            <thead>
                                <tr>
                                    <th>Revision</th>
                                    <th>Effective Date</th>
                                    <th>Uploaded By</th>
                                    <th>Upload Date</th>
                                    <th>Records</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Rev 1.2</strong></td>
                                    <td>Jan 15, 2026</td>
                                    <td>admin@eternia.com</td>
                                    <td>Jan 14, 2026</td>
                                    <td>1,245</td>
                                    <td><span className="status-badge active">Active</span></td>
                                </tr>
                                <tr>
                                    <td><strong>Rev 1.1</strong></td>
                                    <td>Dec 01, 2025</td>
                                    <td>admin@eternia.com</td>
                                    <td>Nov 30, 2025</td>
                                    <td>1,180</td>
                                    <td><span className="status-badge archived">Archived</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MasterData;
