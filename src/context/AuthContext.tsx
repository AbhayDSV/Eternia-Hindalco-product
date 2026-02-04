import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

// User roles
export type UserRole =
    | 'fabricator'
    | 'dealer'
    | 'supply_chain'
    | 'procurement'
    | 'sales'
    | 'finance'
    | 'erp_team'
    | 'admin';

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    fabricatorId?: string;
    permissions: string[];
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Dummy user credentials
const DUMMY_USERS: Record<string, { password: string; user: User }> = {
    'fabricator@eternia.com': {
        password: 'fabricator123',
        user: {
            id: 'fab-001',
            name: 'John Fabricator',
            email: 'fabricator@eternia.com',
            role: 'fabricator',
            fabricatorId: 'FAB-001',
            permissions: ['create_order', 'view_own_orders', 'edit_draft', 'view_shipments']
        }
    },
    'dealer@eternia.com': {
        password: 'dealer123',
        user: {
            id: 'dealer-001',
            name: 'Sarah Dealer',
            email: 'dealer@eternia.com',
            role: 'dealer',
            permissions: ['create_dealer_order', 'view_dealer_orders', 'track_orders']
        }
    },
    'supplychain@eternia.com': {
        password: 'supply123',
        user: {
            id: 'sc-001',
            name: 'Mike Supply Chain',
            email: 'supplychain@eternia.com',
            role: 'supply_chain',
            permissions: ['approve_orders', 'manage_ranking', 'allocate_lots', 'view_all_orders']
        }
    },
    'procurement@eternia.com': {
        password: 'procurement123',
        user: {
            id: 'proc-001',
            name: 'Lisa Procurement',
            email: 'procurement@eternia.com',
            role: 'procurement',
            permissions: ['view_forecasts', 'manage_inventory', 'view_reports']
        }
    },
    'sales@eternia.com': {
        password: 'sales123',
        user: {
            id: 'sales-001',
            name: 'David Sales',
            email: 'sales@eternia.com',
            role: 'sales',
            permissions: ['view_orders', 'view_commitments', 'view_notifications']
        }
    },
    'finance@eternia.com': {
        password: 'finance123',
        user: {
            id: 'fin-001',
            name: 'Emma Finance',
            email: 'finance@eternia.com',
            role: 'finance',
            permissions: ['view_invoices', 'manage_payments', 'view_financial_reports']
        }
    },
    'erp@eternia.com': {
        password: 'erp123',
        user: {
            id: 'erp-001',
            name: 'Robert ERP',
            email: 'erp@eternia.com',
            role: 'erp_team',
            permissions: ['manage_oracle', 'view_integration_status', 'export_data']
        }
    },
    'admin@eternia.com': {
        password: 'admin123',
        user: {
            id: 'admin-001',
            name: 'Admin User',
            email: 'admin@eternia.com',
            role: 'admin',
            permissions: ['all']
        }
    }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(() => {
        const savedUser = localStorage.getItem('eternia_user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const login = async (email: string, password: string): Promise<boolean> => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));

        const userCredentials = DUMMY_USERS[email.toLowerCase()];

        if (userCredentials && userCredentials.password === password) {
            setUser(userCredentials.user);
            localStorage.setItem('eternia_user', JSON.stringify(userCredentials.user));
            return true;
        }

        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('eternia_user');
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                isAuthenticated: !!user
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
