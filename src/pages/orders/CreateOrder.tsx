import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Save,
    Send,
    X,
    Plus,
    Upload,
    Download,
    Trash2,
    Copy,
    AlertCircle
} from 'lucide-react';
import './CreateOrder.css';

interface ExtrusionItem {
    id: string;
    section: string;
    sectionLength: string;
    productSeries: string;
    requiredQty: number;
    weightKg: number;
    adjustedKg: number;
    rate: number;
    lineAmount: number;
}

interface HardwareItem {
    id: string;
    itemCode: string;
    drawingNumber: string;
    description: string;
    requiredQty: number;
    packSizeAdjusted: number;
    rate: number;
    lineAmount: number;
}

const CreateOrder: React.FC = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'extrusion' | 'hardware'>('extrusion');

    // Form state
    const [orderType, setOrderType] = useState('');
    const [projectName, setProjectName] = useState('');
    const [materialType, setMaterialType] = useState<string[]>([]);
    const [selfPickup, setSelfPickup] = useState(false);
    const [billingAddress, setBillingAddress] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');
    const [remarks, setRemarks] = useState('');
    const [customDeliveryDays, setCustomDeliveryDays] = useState(false);
    const [requestedDeliveryDays, setRequestedDeliveryDays] = useState('');

    const [extrusionItems, setExtrusionItems] = useState<ExtrusionItem[]>([
        {
            id: '1',
            section: '',
            sectionLength: '',
            productSeries: '',
            requiredQty: 0,
            weightKg: 0,
            adjustedKg: 0,
            rate: 0,
            lineAmount: 0,
        },
    ]);

    const [hardwareItems, setHardwareItems] = useState<HardwareItem[]>([
        {
            id: '1',
            itemCode: '',
            drawingNumber: '',
            description: '',
            requiredQty: 0,
            packSizeAdjusted: 0,
            rate: 0,
            lineAmount: 0,
        },
    ]);

    const handleMaterialTypeChange = (type: string) => {
        if (materialType.includes(type)) {
            setMaterialType(materialType.filter(t => t !== type));
        } else {
            setMaterialType([...materialType, type]);
        }
    };

    const addExtrusionRow = () => {
        setExtrusionItems([
            ...extrusionItems,
            {
                id: Date.now().toString(),
                section: '',
                sectionLength: '',
                productSeries: '',
                requiredQty: 0,
                weightKg: 0,
                adjustedKg: 0,
                rate: 0,
                lineAmount: 0,
            },
        ]);
    };

    const duplicateExtrusionRow = (index: number) => {
        const item = { ...extrusionItems[index], id: Date.now().toString() };
        setExtrusionItems([...extrusionItems, item]);
    };

    const deleteExtrusionRow = (index: number) => {
        if (extrusionItems.length > 1) {
            setExtrusionItems(extrusionItems.filter((_, i) => i !== index));
        }
    };

    const addHardwareRow = () => {
        setHardwareItems([
            ...hardwareItems,
            {
                id: Date.now().toString(),
                itemCode: '',
                drawingNumber: '',
                description: '',
                requiredQty: 0,
                packSizeAdjusted: 0,
                rate: 0,
                lineAmount: 0,
            },
        ]);
    };

    const deleteHardwareRow = (index: number) => {
        if (hardwareItems.length > 1) {
            setHardwareItems(hardwareItems.filter((_, i) => i !== index));
        }
    };

    const handleSaveDraft = () => {
        console.log('Saving draft...');
        alert('Order saved as draft!');
        navigate('/orders');
    };

    const handleSubmitOrder = () => {
        console.log('Submitting order...');
        alert('Order submitted successfully!');
        navigate('/orders');
    };

    const handleCancel = () => {
        if (confirm('Are you sure you want to cancel? All unsaved changes will be lost.')) {
            navigate('/orders');
        }
    };

    const standardTAT = orderType === 'Retail' ? '7 days' : orderType === 'Project' ? '14 days' : orderType === 'Facade' ? '21 days' : '-';

    return (
        <div className="create-order-page">
            {/* Page Header */}
            <div className="page-header">
                <div>
                    <h1>Create New Order</h1>
                    <p className="page-subtitle">Fill in the order details and add items</p>
                </div>
                <div className="header-actions">
                    <button className="btn btn-secondary" onClick={handleCancel}>
                        <X size={18} />
                        Cancel
                    </button>
                    <button className="btn btn-secondary" onClick={handleSaveDraft}>
                        <Save size={18} />
                        Save Draft
                    </button>
                    <button className="btn btn-primary" onClick={handleSubmitOrder}>
                        <Send size={18} />
                        Submit Order
                    </button>
                </div>
            </div>

            {/* Order Form */}
            <div className="order-form-container">
                {/* Section A: Basic Details */}
                <div className="form-section">
                    <h3 className="section-title">Basic Details</h3>
                    <div className="form-grid">
                        <div className="form-group">
                            <label className="form-label">Order Date</label>
                            <input
                                type="text"
                                className="form-input"
                                value={new Date().toLocaleDateString()}
                                disabled
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Fabricator Name</label>
                            <input
                                type="text"
                                className="form-input"
                                value="John Fabricator (FAB-001)"
                                disabled
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Order Type *</label>
                            <select
                                className="form-select"
                                value={orderType}
                                onChange={(e) => setOrderType(e.target.value)}
                                required
                            >
                                <option value="">Select Order Type</option>
                                <option value="Retail">Retail</option>
                                <option value="Project">Project</option>
                                <option value="Facade">Facade</option>
                                <option value="Totalis">Totalis</option>
                            </select>
                        </div>

                        {(orderType === 'Project' || orderType === 'Facade') && (
                            <div className="form-group">
                                <label className="form-label">Project Name *</label>
                                <select
                                    className="form-select"
                                    value={projectName}
                                    onChange={(e) => setProjectName(e.target.value)}
                                    required
                                >
                                    <option value="">Select Project</option>
                                    <option value="Mumbai Metro Station">Mumbai Metro Station</option>
                                    <option value="Bangalore IT Park">Bangalore IT Park</option>
                                    <option value="Delhi Commercial Complex">Delhi Commercial Complex</option>
                                    <option value="Pune Residential Tower">Pune Residential Tower</option>
                                </select>
                            </div>
                        )}

                        <div className="form-group full-width">
                            <label className="form-label">Material Type *</label>
                            <div className="checkbox-group">
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox"
                                        checked={materialType.includes('Extrusion')}
                                        onChange={() => handleMaterialTypeChange('Extrusion')}
                                    />
                                    <span>Extrusion</span>
                                </label>
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox"
                                        checked={materialType.includes('Hardware')}
                                        onChange={() => handleMaterialTypeChange('Hardware')}
                                    />
                                    <span>Hardware</span>
                                </label>
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox"
                                        checked={materialType.includes('Punching Tools')}
                                        onChange={() => handleMaterialTypeChange('Punching Tools')}
                                    />
                                    <span>Punching Tools</span>
                                </label>
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox"
                                        checked={materialType.includes('Other')}
                                        onChange={() => handleMaterialTypeChange('Other')}
                                    />
                                    <span>Other</span>
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    className="form-checkbox"
                                    checked={selfPickup}
                                    onChange={(e) => setSelfPickup(e.target.checked)}
                                />
                                <span>Self Pickup</span>
                            </label>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Billing Address *</label>
                            <select
                                className="form-select"
                                value={billingAddress}
                                onChange={(e) => setBillingAddress(e.target.value)}
                                required
                            >
                                <option value="">Select Billing Address</option>
                                <option value="addr1">123 Main Street, Mumbai - 400001</option>
                                <option value="addr2">456 Park Avenue, Pune - 411001</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Shipping Address *</label>
                            <select
                                className="form-select"
                                value={shippingAddress}
                                onChange={(e) => setShippingAddress(e.target.value)}
                                required
                            >
                                <option value="">Select Shipping Address</option>
                                <option value="addr1">123 Main Street, Mumbai - 400001</option>
                                <option value="addr2">456 Park Avenue, Pune - 411001</option>
                                <option value="addr3">789 Industrial Area, Bangalore - 560001</option>
                            </select>
                        </div>

                        <div className="form-group full-width">
                            <label className="form-label">Remarks</label>
                            <textarea
                                className="form-textarea"
                                value={remarks}
                                onChange={(e) => setRemarks(e.target.value)}
                                placeholder="Enter any additional remarks or special instructions..."
                                rows={3}
                            />
                        </div>
                    </div>
                </div>

                {/* Section B: Delivery Timeline */}
                <div className="form-section">
                    <h3 className="section-title">Delivery Timeline</h3>
                    <div className="form-grid">
                        <div className="form-group">
                            <label className="form-label">Standard TAT</label>
                            <input
                                type="text"
                                className="form-input"
                                value={standardTAT}
                                disabled
                            />
                        </div>

                        {orderType === 'Facade' && (
                            <>
                                <div className="form-group">
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox"
                                            checked={customDeliveryDays}
                                            onChange={(e) => setCustomDeliveryDays(e.target.checked)}
                                        />
                                        <span>Custom delivery timeline</span>
                                    </label>
                                </div>

                                {customDeliveryDays && (
                                    <div className="form-group">
                                        <label className="form-label">Requested Delivery Days</label>
                                        <input
                                            type="number"
                                            className="form-input"
                                            value={requestedDeliveryDays}
                                            onChange={(e) => setRequestedDeliveryDays(e.target.value)}
                                            placeholder="Enter number of days"
                                        />
                                    </div>
                                )}
                            </>
                        )}

                        <div className="form-group">
                            <label className="form-label">Expected Delivery Date</label>
                            <input
                                type="text"
                                className="form-input"
                                value="Estimated after approval"
                                disabled
                            />
                            <p className="field-hint">
                                <AlertCircle size={14} />
                                Final delivery date will be confirmed after approval
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section C: Material Tabs */}
                <div className="form-section">
                    <h3 className="section-title">Order Items</h3>

                    <div className="material-tabs">
                        {materialType.includes('Extrusion') && (
                            <button
                                className={`tab-button ${activeTab === 'extrusion' ? 'active' : ''}`}
                                onClick={() => setActiveTab('extrusion')}
                            >
                                Extrusion Items
                            </button>
                        )}
                        {materialType.includes('Hardware') && (
                            <button
                                className={`tab-button ${activeTab === 'hardware' ? 'active' : ''}`}
                                onClick={() => setActiveTab('hardware')}
                            >
                                Hardware Items
                            </button>
                        )}
                    </div>

                    {/* Extrusion Items Tab */}
                    {activeTab === 'extrusion' && materialType.includes('Extrusion') && (
                        <div className="items-container">
                            <div className="items-header">
                                <h4>Extrusion Items</h4>
                                <div className="items-actions">
                                    <button className="btn btn-sm btn-secondary">
                                        <Download size={16} />
                                        Download Template
                                    </button>
                                    <button className="btn btn-sm btn-secondary">
                                        <Upload size={16} />
                                        Bulk Upload
                                    </button>
                                    <button className="btn btn-sm btn-primary" onClick={addExtrusionRow}>
                                        <Plus size={16} />
                                        Add Row
                                    </button>
                                </div>
                            </div>

                            <div className="items-table-container">
                                <table className="items-table">
                                    <thead>
                                        <tr>
                                            <th>Section</th>
                                            <th>Length</th>
                                            <th>Product/Series</th>
                                            <th>Qty (Pcs)</th>
                                            <th>Weight (KG)</th>
                                            <th>Adjusted (KG)</th>
                                            <th>Rate</th>
                                            <th>Amount</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {extrusionItems.map((item, index) => (
                                            <tr key={item.id}>
                                                <td>
                                                    <select className="table-input">
                                                        <option value="">Select</option>
                                                        <option value="Section A">Section A</option>
                                                        <option value="Section B">Section B</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input type="text" className="table-input" placeholder="Length" />
                                                </td>
                                                <td>
                                                    <select className="table-input">
                                                        <option value="">Select</option>
                                                        <option value="Series 1">Series 1</option>
                                                        <option value="Series 2">Series 2</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input type="number" className="table-input" placeholder="0" />
                                                </td>
                                                <td>
                                                    <input type="number" className="table-input" disabled placeholder="0.00" />
                                                </td>
                                                <td>
                                                    <input type="number" className="table-input" disabled placeholder="0.00" />
                                                </td>
                                                <td>
                                                    <input type="number" className="table-input" disabled placeholder="0.00" />
                                                </td>
                                                <td>
                                                    <input type="number" className="table-input" disabled placeholder="0.00" />
                                                </td>
                                                <td>
                                                    <div className="row-actions">
                                                        <button
                                                            className="icon-btn"
                                                            onClick={() => duplicateExtrusionRow(index)}
                                                            title="Duplicate"
                                                        >
                                                            <Copy size={16} />
                                                        </button>
                                                        <button
                                                            className="icon-btn danger"
                                                            onClick={() => deleteExtrusionRow(index)}
                                                            title="Delete"
                                                            disabled={extrusionItems.length === 1}
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Hardware Items Tab */}
                    {activeTab === 'hardware' && materialType.includes('Hardware') && (
                        <div className="items-container">
                            <div className="items-header">
                                <h4>Hardware Items</h4>
                                <div className="items-actions">
                                    <button className="btn btn-sm btn-secondary">
                                        <Download size={16} />
                                        Download Template
                                    </button>
                                    <button className="btn btn-sm btn-secondary">
                                        <Upload size={16} />
                                        Bulk Upload
                                    </button>
                                    <button className="btn btn-sm btn-primary" onClick={addHardwareRow}>
                                        <Plus size={16} />
                                        Add Row
                                    </button>
                                </div>
                            </div>

                            <div className="items-table-container">
                                <table className="items-table">
                                    <thead>
                                        <tr>
                                            <th>Item Code</th>
                                            <th>Drawing No</th>
                                            <th>Description</th>
                                            <th>Qty</th>
                                            <th>Pack Size Adj</th>
                                            <th>Rate</th>
                                            <th>Amount</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {hardwareItems.map((item, index) => (
                                            <tr key={item.id}>
                                                <td>
                                                    <input type="text" className="table-input" placeholder="Item Code" />
                                                </td>
                                                <td>
                                                    <input type="text" className="table-input" disabled placeholder="Auto" />
                                                </td>
                                                <td>
                                                    <input type="text" className="table-input" disabled placeholder="Auto" />
                                                </td>
                                                <td>
                                                    <input type="number" className="table-input" placeholder="0" />
                                                </td>
                                                <td>
                                                    <input type="number" className="table-input" disabled placeholder="0" />
                                                </td>
                                                <td>
                                                    <input type="number" className="table-input" disabled placeholder="0.00" />
                                                </td>
                                                <td>
                                                    <input type="number" className="table-input" disabled placeholder="0.00" />
                                                </td>
                                                <td>
                                                    <div className="row-actions">
                                                        <button
                                                            className="icon-btn danger"
                                                            onClick={() => deleteHardwareRow(index)}
                                                            title="Delete"
                                                            disabled={hardwareItems.length === 1}
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CreateOrder;
