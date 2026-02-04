import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth, type UserRole } from '../context/AuthContext';
import {
    LayoutDashboard,
    ShoppingCart,
    CheckCircle,
    TrendingUp,
    Package,
    DollarSign,
    Database,
    Settings,
    Users,
    FileText,
    Truck,
    BarChart3,
    Bell,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';
import './Sidebar.css';

interface SidebarProps {
    collapsed: boolean;
    onToggle: () => void;
}

interface NavItem {
    path: string;
    label: string;
    icon: React.ReactNode;
    roles: UserRole[];
}

const navigationItems: NavItem[] = [
    {
        path: '/dashboard',
        label: 'Dashboard',
        icon: <LayoutDashboard size={20} />,
        roles: ['fabricator', 'dealer', 'supply_chain', 'procurement', 'sales', 'finance', 'erp_team', 'admin'],
    },
    {
        path: '/orders',
        label: 'Orders',
        icon: <ShoppingCart size={20} />,
        roles: ['fabricator', 'dealer', 'supply_chain', 'sales', 'admin'],
    },
    {
        path: '/orders/create',
        label: 'Create Order',
        icon: <FileText size={20} />,
        roles: ['fabricator', 'dealer'],
    },
    {
        path: '/approvals',
        label: 'Approvals',
        icon: <CheckCircle size={20} />,
        roles: ['supply_chain', 'admin'],
    },
    {
        path: '/ranking',
        label: 'Ranking & Allocation',
        icon: <TrendingUp size={20} />,
        roles: ['supply_chain', 'admin'],
    },
    {
        path: '/forecasting',
        label: 'Forecasting',
        icon: <BarChart3 size={20} />,
        roles: ['procurement', 'supply_chain', 'admin'],
    },
    {
        path: '/inventory',
        label: 'Inventory',
        icon: <Package size={20} />,
        roles: ['procurement', 'supply_chain', 'admin'],
    },
    {
        path: '/shipments',
        label: 'Shipments',
        icon: <Truck size={20} />,
        roles: ['fabricator', 'supply_chain', 'sales', 'admin'],
    },
    {
        path: '/invoices',
        label: 'Invoices',
        icon: <DollarSign size={20} />,
        roles: ['finance', 'admin'],
    },
    {
        path: '/integrations',
        label: 'Integrations',
        icon: <Database size={20} />,
        roles: ['erp_team', 'admin'],
    },
    {
        path: '/notifications',
        label: 'Notifications',
        icon: <Bell size={20} />,
        roles: ['sales', 'admin'],
    },
    {
        path: '/master-data',
        label: 'Master Data',
        icon: <Settings size={20} />,
        roles: ['admin'],
    },
    {
        path: '/users',
        label: 'User Management',
        icon: <Users size={20} />,
        roles: ['admin'],
    },
];

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
    const { user } = useAuth();

    const filteredNavItems = navigationItems.filter(item =>
        item.roles.includes(user?.role as UserRole)
    );

    return (
        <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
                {!collapsed && (
                    <img
                        src="/eternia-logo.png"
                        alt="ETERNIA"
                        className="sidebar-logo"
                    />
                )}
                <button className="sidebar-toggle" onClick={onToggle}>
                    {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>
            </div>

            <nav className="sidebar-nav">
                {filteredNavItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `nav-item ${isActive ? 'active' : ''}`
                        }
                        title={collapsed ? item.label : undefined}
                    >
                        <span className="nav-icon">{item.icon}</span>
                        {!collapsed && <span className="nav-label">{item.label}</span>}
                    </NavLink>
                ))}
            </nav>

            {!collapsed && (
                <div className="sidebar-footer">
                    <div className="sidebar-info">
                        <p className="info-title">ETERNIA</p>
                        <p className="info-subtitle">A Hindalco Product</p>
                        <p className="info-version">v1.0.0</p>
                    </div>
                </div>
            )}
        </aside>
    );
};

export default Sidebar;
