# Ticket: Admin Dashboard

**Feature:** Develop the central admin dashboard for managing the entire Livemo platform, including users, listings, transactions, and system health.

**User Story:** As an administrator, I need a comprehensive and secure dashboard to oversee all platform activities. I want to manage users, monitor marketplace listings, handle disputes, view analytics, and configure system settings to ensure the platform runs smoothly and efficiently.

## Acceptance Criteria

### 1. Dashboard Overview
- [ ] The main dashboard page should provide a high-level overview of the platform's key metrics: total users, active listings, sales volume, and system health status.
- [ ] It must include visualizations for user growth, revenue trends, and marketplace activity.
- [ ] A section for recent activities and pending administrative actions (e.g., user verification, reported listings) should be prominently displayed.

### 2. User Management
- [ ] A user management section to view, search, and filter all users (farmers, buyers, admins).
- [ ] Admins must have the ability to verify, suspend, or delete user accounts.
- [ ] It should be possible to view a user's activity history, including listings, purchases, and communications.

### 3. Marketplace Management
- [ ] A section to manage all listings for the two core marketplaces: **Livestock** and **Products**.
- [ ] Admins must be able to approve, reject, or remove listings that violate platform policies.
- [ ] Functionality to feature or promote certain listings on the homepage.

### 4. Transaction & Financial Management
- [ ] A comprehensive log of all transactions conducted on the platform, including those from the shopping cart and checkout flow.
- [ ] Admins should be able to manage the escrow system, including releasing payments and handling refunds.
- [ ] A reporting tool to generate financial reports, track commissions, and manage payouts to sellers.

### 5. System Health & Configuration
- [ ] A system health dashboard to monitor server status, API performance, and database health.
- [ ] Admins must be able to configure platform settings, such as commission rates, site-wide announcements, and content pages (e.g., `How it Works`, `Help`).
- [ ] A tool for managing categories, custom fields, and other platform-wide taxonomies.
- [ ] A section to manage the content of the global footer, which appears on all clientside pages.

## Technical Details

- **Frontend Framework:** React with Material-UI, adhering to the design system defined in `LIVEMO_UI_DESIGN_SYSTEM.md`.
- **API Endpoints:** The admin dashboard will interact with a dedicated set of admin APIs from the `livemo-backend`. Key endpoints will include:
  - `GET /api/admin/stats`
  - `GET /api/admin/users`
  - `PUT /api/admin/users/{id}/status`
  - `GET /api/admin/listings`
  - `PUT /api/admin/listings/{id}/status`
  - `GET /api/admin/transactions`
  - `POST /api/admin/payouts`
  - `GET /api/admin/settings`
  - `PUT /api/admin/settings`
- **Authentication:** Secure, role-based access control (RBAC) to ensure that only authorized administrators can access the dashboard. Note: The clientside uses cookie-based authentication.
- **Security:** Implement security best practices, including input validation, CSRF protection, and logging of all administrative actions.
- **Responsive Design:** The admin dashboard should be accessible and functional on various screen sizes, though priority is given to desktop and tablet views for administrative tasks.

## Mockups

*While a specific admin design document is not available, the layout should follow the principles and component styles outlined in `LIVEMO_UI_DESIGN_SYSTEM.md`. The dashboard should be professional, data-dense, and highly functional.*
