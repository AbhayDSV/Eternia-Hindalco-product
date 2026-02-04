import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import DashboardLayout from './layouts/DashboardLayout';
import FabricatorDashboard from './pages/dashboards/FabricatorDashboard';
import DealerDashboard from './pages/dashboards/DealerDashboard';
import SupplyChainDashboard from './pages/dashboards/SupplyChainDashboard';
import ProcurementDashboard from './pages/dashboards/ProcurementDashboard';
import SalesDashboard from './pages/dashboards/SalesDashboard';
import FinanceDashboard from './pages/dashboards/FinanceDashboard';
import ERPDashboard from './pages/dashboards/ERPDashboard';
import AdminDashboard from './pages/dashboards/AdminDashboard';
import CreateOrder from './pages/orders/CreateOrder';
import OrderSummary from './pages/orders/OrderSummary';
import Approvals from './pages/Approvals';
import Ranking from './pages/Ranking';
import Forecasting from './pages/Forecasting';
import Inventory from './pages/Inventory';
import Shipments from './pages/Shipments';
import Invoices from './pages/Invoices';
import Integrations from './pages/Integrations';
import Notifications from './pages/Notifications';
import MasterData from './pages/MasterData';
import Users from './pages/Users';
import './index.css';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

// Dashboard Router - routes to role-specific dashboard
const DashboardRouter: React.FC = () => {
  const { user } = useAuth();

  // Route to role-specific dashboard
  switch (user?.role) {
    case 'fabricator':
      return <FabricatorDashboard />;
    case 'dealer':
      return <DealerDashboard />;
    case 'supply_chain':
      return <SupplyChainDashboard />;
    case 'procurement':
      return <ProcurementDashboard />;
    case 'sales':
      return <SalesDashboard />;
    case 'finance':
      return <FinanceDashboard />;
    case 'erp_team':
      return <ERPDashboard />;
    case 'admin':
      return <AdminDashboard />;
    default:
      return <FabricatorDashboard />;
  }
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardRouter />} />
            <Route path="orders" element={<OrderSummary />} />
            <Route path="orders/create" element={<CreateOrder />} />
            <Route path="orders/:id" element={<div className="page-placeholder"><h2>Order Details</h2><p>Coming soon...</p></div>} />
            <Route path="approvals" element={<Approvals />} />
            <Route path="ranking" element={<Ranking />} />
            <Route path="forecasting" element={<Forecasting />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="shipments" element={<Shipments />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="integrations" element={<Integrations />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="master-data" element={<MasterData />} />
            <Route path="users" element={<Users />} />
          </Route>

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
