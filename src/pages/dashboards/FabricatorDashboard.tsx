import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ShoppingCart,
    Clock,
    AlertCircle,
    Truck,
    Plus,
    Upload,
    FileText,
    TrendingUp,
    Package,
    CheckCircle
} from 'lucide-react';
import './FabricatorDashboard.css';

interface OrderStats {
    saved: number;
    submitted: number;
    approved: number;
    referBack: number;
    wip: number;
    closed: number;
    cancelled: number;
}

interface RecentOrder {
    id: string;
    piNo: string;
    orderType: string;
    materialType: string;
    createdDate: string;
    expectedDelivery: string;
    status: string;
}

const FabricatorDashboard: React.FC = () => {
    const navigate = useNavigate();

    const orderStats: OrderStats = {
        saved: 3,
        submitted: 8,
        approved: 15,
        referBack: 2,
        wip: 12,
        closed: 45,
        cancelled: 1,
    };

    const recentOrders: RecentOrder[] = [
        {
            id: 'ORD-2024-001',
            piNo: 'PI-2024-045',
            orderType: 'Project',
            materialType: 'Extrusion',
            createdDate: '2024-01-15',
            expectedDelivery: '2024-02-20',
            status: 'approved',
        },
        {
            id: 'ORD-2024-002',
            piNo: 'PI-2024-046',
            orderType: 'Retail',
            materialType: 'Hardware',
            createdDate: '2024-01-16',
            expectedDelivery: '2024-02-15',
            status: 'wip',
        },
        {
            id: 'ORD-2024-003',
            piNo: '-',
            orderType: 'Facade',
            materialType: 'Extrusion, Hardware',
            createdDate: '2024-01-17',
            expectedDelivery: 'Pending approval',
            status: 'refer-back',
        },
        {
            id: 'ORD-2024-004',
            piNo: 'PI-2024-047',
            orderType: 'Project',
            materialType: 'Extrusion',
            createdDate: '2024-01-18',
            expectedDelivery: '2024-02-25',
            status: 'submitted',
        },
    ];

    const referBackItems = [
        {
            orderId: 'ORD-2024-003',
            remark: 'Please update section length for Item #5 - not available in master',
            timestamp: '2 hours ago',
        },
        {
            orderId: 'ORD-2024-012',
            remark: 'Billing address incomplete - please add GST number',
            timestamp: '1 day ago',
        },
    ];

    const upcomingDeliveries = [
        { orderId: 'ORD-2024-001', piNo: 'PI-2024-045', date: '2024-02-20', daysLeft: 5 },
        { orderId: 'ORD-2024-015', piNo: 'PI-2024-038', date: '2024-02-22', daysLeft: 7 },
        { orderId: 'ORD-2024-018', piNo: 'PI-2024-041', date: '2024-02-25', daysLeft: 10 },
    ];

    const recentShipments = [
        { orderId: 'ORD-2024-010', piNo: 'PI-2024-032', truck: 'MH-12-AB-1234', driver: 'Rajesh Kumar', status: 'In Transit' },
        { orderId: 'ORD-2024-008', piNo: 'PI-2024-029', truck: 'GJ-05-CD-5678', driver: 'Amit Patel', status: 'Delivered' },
    ];

    const totalOrders = Object.values(orderStats).reduce((a, b) => a + b, 0);

    return (
        <div className="fabricator-dashboard">
            {/* Page Header */}
            <div className="dashboard-header">
                <div>
                    <h1>Fabricator Dashboard</h1>
                    <p className="dashboard-subtitle">Welcome back! Here's your order overview</p>
                </div>
                <div className="header-actions">
                    <button className="btn btn-secondary" onClick={() => navigate('/orders/bulk-upload')}>
                        <Upload size={18} />
                        Bulk Upload
                    </button>
                    <button className="btn btn-primary" onClick={() => navigate('/orders/create')}>
                        <Plus size={18} />
                        Create Order
                    </button>
                </div>
            </div>

            {/* Order Status Cards */}
            <div className="stats-grid">
                <div className="stat-card total">
                    <div className="stat-icon">
                        <ShoppingCart />
                    </div>
                    <div className="stat-content">
                        <h3>{totalOrders}</h3>
                        <p>Total Orders</p>
                    </div>
                </div>

                <div className="stat-card saved">
                    <div className="stat-icon">
                        <FileText />
                    </div>
                    <div className="stat-content">
                        <h3>{orderStats.saved}</h3>
                        <p>Saved Drafts</p>
                    </div>
                </div>

                <div className="stat-card submitted">
                    <div className="stat-icon">
                        <Clock />
                    </div>
                    <div className="stat-content">
                        <h3>{orderStats.submitted}</h3>
                        <p>Pending Approval</p>
                    </div>
                </div>

                <div className="stat-card approved">
                    <div className="stat-icon">
                        <CheckCircle />
                    </div>
                    <div className="stat-content">
                        <h3>{orderStats.approved}</h3>
                        <p>Approved</p>
                    </div>
                </div>

                <div className="stat-card refer-back">
                    <div className="stat-icon">
                        <AlertCircle />
                    </div>
                    <div className="stat-content">
                        <h3>{orderStats.referBack}</h3>
                        <p>Refer Back</p>
                    </div>
                </div>

                <div className="stat-card wip">
                    <div className="stat-icon">
                        <Package />
                    </div>
                    <div className="stat-content">
                        <h3>{orderStats.wip}</h3>
                        <p>In Progress</p>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="dashboard-grid">
                {/* Recent Orders */}
                <div className="dashboard-card recent-orders">
                    <div className="card-header">
                        <h3>Recent Orders</h3>
                        <button className="btn btn-sm btn-secondary" onClick={() => navigate('/orders')}>
                            View All
                        </button>
                    </div>
                    <div className="table-container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>PI No</th>
                                    <th>Type</th>
                                    <th>Material</th>
                                    <th>Created</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentOrders.map((order) => (
                                    <tr key={order.id} onClick={() => navigate(`/orders/${order.id}`)} style={{ cursor: 'pointer' }}>
                                        <td><strong>{order.id}</strong></td>
                                        <td>{order.piNo}</td>
                                        <td>{order.orderType}</td>
                                        <td>{order.materialType}</td>
                                        <td>{new Date(order.createdDate).toLocaleDateString()}</td>
                                        <td>
                                            <span className={`badge badge-${order.status}`}>
                                                {order.status.replace('-', ' ')}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Refer Back Items */}
                <div className="dashboard-card refer-back-card">
                    <div className="card-header">
                        <h3>
                            <AlertCircle size={20} />
                            Action Required
                        </h3>
                    </div>
                    <div className="refer-back-list">
                        {referBackItems.map((item, index) => (
                            <div key={index} className="refer-back-item">
                                <div className="refer-back-header">
                                    <strong>{item.orderId}</strong>
                                    <span className="timestamp">{item.timestamp}</span>
                                </div>
                                <p className="refer-back-remark">{item.remark}</p>
                                <button
                                    className="btn btn-sm btn-primary"
                                    onClick={() => navigate(`/orders/${item.orderId}`)}
                                >
                                    Review & Resubmit
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Upcoming Deliveries */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h3>
                            <TrendingUp size={20} />
                            Expected Deliveries
                        </h3>
                    </div>
                    <div className="delivery-list">
                        {upcomingDeliveries.map((delivery, index) => (
                            <div key={index} className="delivery-item">
                                <div className="delivery-info">
                                    <strong>{delivery.orderId}</strong>
                                    <span className="delivery-pi">{delivery.piNo}</span>
                                </div>
                                <div className="delivery-date">
                                    <span className="date">{new Date(delivery.date).toLocaleDateString()}</span>
                                    <span className={`days-badge ${delivery.daysLeft <= 5 ? 'urgent' : ''}`}>
                                        {delivery.daysLeft} days
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Shipments */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h3>
                            <Truck size={20} />
                            Recent Shipments
                        </h3>
                        <button className="btn btn-sm btn-secondary" onClick={() => navigate('/shipments')}>
                            View All
                        </button>
                    </div>
                    <div className="shipment-list">
                        {recentShipments.map((shipment, index) => (
                            <div key={index} className="shipment-item">
                                <div className="shipment-header">
                                    <strong>{shipment.orderId}</strong>
                                    <span className={`status-badge ${shipment.status.toLowerCase().replace(' ', '-')}`}>
                                        {shipment.status}
                                    </span>
                                </div>
                                <div className="shipment-details">
                                    <div><strong>PI:</strong> {shipment.piNo}</div>
                                    <div><strong>Truck:</strong> {shipment.truck}</div>
                                    <div><strong>Driver:</strong> {shipment.driver}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FabricatorDashboard;
