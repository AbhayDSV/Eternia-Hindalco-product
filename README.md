# ETERNIA - Order Management & Forecasting Platform
### A Hindalco (Aditya Birla) Product

![ETERNIA Logo](public/eternia-logo.png)

## 🎯 Overview

ETERNIA is a modern, enterprise-grade web application for managing orders, forecasting, and supply chain operations. Built with React, TypeScript, and a premium UI design system, it provides role-based access for multiple user personas including Fabricators, Dealers, Supply Chain teams, Procurement, Sales, Finance, ERP teams, and Administrators.

## ✨ Features

### 🔐 Authentication & Authorization
- Secure login system with email/password authentication
- Role-based access control (8 user personas)
- Password visibility toggle
- Caps Lock detection
- Remember me functionality
- Session persistence

### 👥 User Roles & Dashboards

#### 1. **Fabricator**
- Create and manage orders (Retail, Project, Facade, Totalis)
- View order status (Saved, Submitted, Approved, Refer Back, WIP, Closed)
- Track shipments with driver and truck details
- Bulk upload for Extrusion and Hardware items
- Expected delivery timeline tracking
- Refer-back action items with resubmission

#### 2. **Dealer**
- Submit dealer orders
- Track order status
- View fabricator actions

#### 3. **Supply Chain**
- Approve/Refer back orders
- Manage FIFO ranking
- Allocate inventory lots
- View shortfall summaries
- Inventory snapshot integration

#### 4. **Procurement**
- View forecasting (Runner/Stranger/Dead inventory)
- Extrusion forecast trends
- Reorder suggestions
- Procurement attention items

#### 5. **Sales**
- Order volume by vertical
- Customer commitment tracking
- Delivery ETA monitoring
- Notification management

#### 6. **Finance**
- Invoice status tracking
- Payment update management
- Exception handling
- Financial reports

#### 7. **ERP Team (Oracle)**
- Integration health monitoring
- SO creation and dispatch tracking
- Data export capabilities
- Job status monitoring

#### 8. **Admin**
- User management (65+ users, scalable to 100+)
- Master data uploads
- Integration job monitoring
- System configuration
- Full access to all modules

### 📋 Order Management

#### Order Creation
- **Basic Details**
  - Auto-populated order date and fabricator info
  - Order type selection (Retail/Project/Facade/Totalis)
  - Project name (conditional for Project/Facade)
  - Multi-select material types
  - Self-pickup option
  - Billing and shipping address management
  - Remarks field

- **Delivery Timeline**
  - Standard TAT based on order type
  - Custom delivery timeline (Facade only)
  - Expected delivery date calculation
  - Approval-based final date confirmation

- **Material Entry**
  - **Extrusion Items Tab**
    - Section and length selection
    - Product/Series dropdown
    - Quantity in pieces
    - Auto-calculated weight (KG)
    - Pack size adjustment
    - Rate and line amount (auto)
    - Row add/duplicate/delete
    - Bulk upload with template
  
  - **Hardware Items Tab**
    - Item code/Part number search
    - Auto-populated drawing number
    - Auto-populated description
    - Quantity entry
    - Pack size adjustment
    - Rate and line amount (auto)
    - Bulk upload with template

#### Order Summary & Tracking
- Multi-tab view (Saved, Submitted, Refer Back, WIP, Closed, Cancelled)
- Advanced filters (Order Type, Material Type, Status, Date range, Project, Fabricator)
- Order details with PI number
- Status badges with color coding
- Expected vs. Final delivery dates
- Action buttons (View, Edit, Download, Cancel)

#### Refer Back Flow
- Highlighted refer-back remarks panel
- Editable fields (where allowed)
- Resubmit functionality
- Audit trail and remarks history

### 🎨 Design System

#### Brand Colors
- **Primary Green**: `#7CB342` (ETERNIA Green)
- **Primary Blue**: `#29B6F6` (ETERNIA Blue)
- **Dark**: `#1a1a1a` (Text and headers)
- **White**: `#ffffff` (Background)

#### Status Colors
- **Saved**: Orange (`#FFA726`)
- **Submitted**: Blue (`#42A5F5`)
- **Approved**: Green (`#66BB6A`)
- **Refer Back**: Red (`#EF5350`)
- **WIP**: Purple (`#AB47BC`)
- **Closed**: Gray (`#78909C`)
- **Cancelled**: Light Red (`#E57373`)

#### UI Components
- Modern card-based layouts
- Gradient stat cards with hover effects
- Professional data tables with sticky headers
- Advanced filters and saved views
- Modal dialogs and toast notifications
- Responsive sidebar navigation
- Global search functionality
- Notification center with badges

### 🔧 Technical Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 7.3
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Styling**: Custom CSS with CSS Variables
- **Fonts**: Inter (Google Fonts)
- **State Management**: React Context API
- **Authentication**: Local storage with session persistence

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone the repository**
   ```bash
   cd /Users/fristineinfotech/Desktop/Hindalco
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## 🔑 Demo Credentials

### Fabricator
- **Email**: `fabricator@eternia.com`
- **Password**: `fabricator123`

### Dealer
- **Email**: `dealer@eternia.com`
- **Password**: `dealer123`

### Supply Chain
- **Email**: `supplychain@eternia.com`
- **Password**: `supply123`

### Procurement
- **Email**: `procurement@eternia.com`
- **Password**: `procurement123`

### Sales
- **Email**: `sales@eternia.com`
- **Password**: `sales123`

### Finance
- **Email**: `finance@eternia.com`
- **Password**: `finance123`

### ERP Team
- **Email**: `erp@eternia.com`
- **Password**: `erp123`

### Admin
- **Email**: `admin@eternia.com`
- **Password**: `admin123`

## 📁 Project Structure

```
Hindalco/
├── public/
│   └── eternia-logo.png          # ETERNIA brand logo
├── src/
│   ├── components/               # Reusable UI components
│   │   ├── Header.tsx           # Top navigation bar
│   │   ├── Header.css
│   │   ├── Sidebar.tsx          # Role-based sidebar navigation
│   │   └── Sidebar.css
│   ├── context/                 # React Context providers
│   │   └── AuthContext.tsx      # Authentication & user management
│   ├── layouts/                 # Page layouts
│   │   ├── DashboardLayout.tsx  # Main dashboard wrapper
│   │   └── DashboardLayout.css
│   ├── pages/                   # Application pages
│   │   ├── Login.tsx            # Login page
│   │   ├── Login.css
│   │   ├── dashboards/          # Role-specific dashboards
│   │   │   ├── FabricatorDashboard.tsx
│   │   │   └── FabricatorDashboard.css
│   │   └── orders/              # Order management pages
│   │       ├── CreateOrder.tsx
│   │       └── CreateOrder.css
│   ├── App.tsx                  # Main app component with routing
│   ├── main.tsx                 # Application entry point
│   └── index.css                # Global styles & design system
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Design Highlights

### Modern & Professional UI
- **Clean, corporate aesthetic** with lots of whitespace
- **Gradient accents** using ETERNIA brand colors
- **Glassmorphism effects** on login page
- **Micro-animations** for enhanced UX
- **Responsive design** (Desktop-first, tablet-optimized)

### Enterprise Features
- **Role-based navigation** - Only relevant menu items visible
- **Audit trail** on every order
- **Commenting/remarks** thread system
- **Export capabilities** (Excel/PDF)
- **Email notification** center
- **Global search** (Order ID, PI, Project, Fabricator, SO, Item code)
- **Saved filter views** (My Orders, Pending Approval, Refer Back, Due This Week)

### Data Tables
- Sticky headers for long tables
- Column sorting
- Advanced filters
- Pagination
- Row hover effects
- Status badges
- Action buttons per row

## 🔄 Current Implementation Status

### ✅ Completed
- [x] Authentication system with 8 user roles
- [x] Login page with branding
- [x] Dashboard layout with header and sidebar
- [x] Role-based navigation filtering
- [x] Fabricator Dashboard with stats and widgets
- [x] Create Order page with comprehensive form
- [x] Extrusion and Hardware item tables
- [x] Responsive design system
- [x] Global search UI
- [x] Notification center UI
- [x] User menu dropdown

### 🚧 Planned Features (Phase 2)
- [ ] Supply Chain Dashboard
- [ ] Procurement Dashboard
- [ ] Sales Dashboard
- [ ] Finance Dashboard
- [ ] ERP Team Dashboard
- [ ] Admin Dashboard
- [ ] Order Summary/Listing page
- [ ] Order Details page with audit trail
- [ ] Approval Queue page
- [ ] Ranking & Allocation page
- [ ] Forecasting module (Extrusion & Hardware)
- [ ] Inventory management
- [ ] Shipment tracking page
- [ ] Invoice management
- [ ] Integration health dashboard
- [ ] Master Data Management
- [ ] User Management
- [ ] Notification configuration
- [ ] Reports (Oracle & WMS integration)

## 🎯 Key Features Implemented

### Dashboard Widgets
- **Order Statistics Cards**: Total, Saved, Submitted, Approved, Refer Back, WIP
- **Recent Orders Table**: Sortable, clickable rows with status badges
- **Action Required Panel**: Highlighted refer-back items with quick actions
- **Expected Deliveries**: Countdown badges for upcoming deliveries
- **Recent Shipments**: Truck and driver details with status

### Form Features
- **Dynamic field visibility** based on selections
- **Auto-calculated fields** (weight, amounts, dates)
- **Bulk upload support** with template download
- **Row operations** (add, duplicate, delete)
- **Validation hints** and error messages
- **Multi-tab material entry**
- **Conditional fields** (Project name for Project/Facade orders)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above (primary target)
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px (basic support)

## 🎨 Typography

- **Primary Font**: Inter (Google Fonts)
- **Monospace Font**: Fira Code (for version numbers, codes)
- **Font Weights**: 300, 400, 500, 600, 700, 800

## 🔒 Security Notes

- Passwords are currently stored in plain text for demo purposes
- In production, implement proper authentication backend
- Use JWT tokens or session-based authentication
- Implement HTTPS for all communications
- Add CSRF protection
- Implement rate limiting on login attempts

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

Proprietary - Hindalco Industries Limited (Aditya Birla Group)

## 👥 Development Team

Built for Hindalco Industries Limited

## 📞 Support

For support and queries, contact: support@eternia.com

---

**ETERNIA** - Empowering efficient order management and forecasting for the aluminum industry.
# Eternia-Hindalco-product
