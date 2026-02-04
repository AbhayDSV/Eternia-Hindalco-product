import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Search, Bell, User, LogOut, Settings, ChevronDown } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
    const { user, logout } = useAuth();
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [notifications] = useState([
        { id: 1, message: 'Order #ORD-2024-001 has been approved', time: '5 min ago', unread: true },
        { id: 2, message: 'New shipment dispatched for PI-2024-045', time: '1 hour ago', unread: true },
        { id: 3, message: 'Order #ORD-2024-003 referred back', time: '2 hours ago', unread: false },
    ]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
        // Implement search functionality
    };

    const handleLogout = () => {
        logout();
        window.location.href = '/login';
    };

    const unreadCount = notifications.filter(n => n.unread).length;

    return (
        <header className="header">
            <div className="header-content">
                {/* Search Bar */}
                <form className="header-search" onSubmit={handleSearch}>
                    <div className="search-wrapper">
                        <Search size={18} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search orders, PI, projects, items..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                            style={{
                                height: '44px',
                                lineHeight: '44px',
                                padding: '0 16px 0 44px',
                                fontSize: '14px',
                                borderRadius: '14px',
                                position: 'relative',
                                zIndex: 1,
                            }}
                        />
                    </div>
                </form>

                {/* Right Section */}
                <div className="header-actions">
                    {/* Notifications */}
                    <div className="notification-wrapper">
                        <button className="icon-button">
                            <Bell size={20} />
                            {unreadCount > 0 && (
                                <span className="notification-badge">{unreadCount}</span>
                            )}
                        </button>
                    </div>

                    {/* User Menu */}
                    <div className="user-menu-wrapper">
                        <button
                            className="user-menu-trigger"
                            onClick={() => setShowUserMenu(!showUserMenu)}
                        >
                            <div className="user-avatar">
                                <User size={18} />
                            </div>
                            <div className="user-info">
                                <span className="user-name">{user?.name}</span>
                                <span className="user-role">{user?.role.replace('_', ' ')}</span>
                            </div>
                            <ChevronDown size={16} className={`chevron ${showUserMenu ? 'open' : ''}`} />
                        </button>

                        {showUserMenu && (
                            <div className="user-dropdown">
                                <div className="dropdown-header">
                                    <div className="dropdown-user-info">
                                        <strong>{user?.name}</strong>
                                        <span>{user?.email}</span>
                                    </div>
                                </div>
                                <div className="dropdown-divider"></div>
                                <button className="dropdown-item">
                                    <User size={16} />
                                    <span>Profile</span>
                                </button>
                                <button className="dropdown-item">
                                    <Settings size={16} />
                                    <span>Settings</span>
                                </button>
                                <div className="dropdown-divider"></div>
                                <button className="dropdown-item logout" onClick={handleLogout}>
                                    <LogOut size={16} />
                                    <span>Logout</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
