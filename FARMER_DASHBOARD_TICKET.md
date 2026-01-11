# Ticket: Farmer's Dashboard

**Feature:** Develop the farmer-facing dashboard for managing livestock, farm operations, and marketplace listings.

**User Story:** As a farmer, I need a powerful and intuitive dashboard to manage my livestock's health, track farm operations, and sell my animals and products on the Livemo marketplace. I want a single place to monitor my farm's performance and connect with buyers.

## Acceptance Criteria

### 1. Dashboard Overview ("Your Farm at a Glance")
- [ ] The main dashboard must display key farm metrics in a clear and concise manner, including `Total Animals`, `Healthy Animals`, `Active Alerts`, `Feed Efficiency`, `Pasture Utilization`, and `Monthly Revenue`.
- [ ] A "Quick Actions" section should provide easy access to common tasks like `Add Animal`, `Schedule Feeding`, and `View Alerts`.
- [ ] The dashboard should feature a summary of recent alerts, upcoming tasks, and a snapshot of the farm's health status by livestock category.

### 2. Livestock Management ("My Animals")
- [ ] A comprehensive section for managing all livestock, with options to add, edit, and view individual animal profiles.
- [ ] The list of animals should be searchable and filterable by type, status, and other key attributes.
- [ ] Each animal's detailed view must show its complete profile, including health metrics, vaccination records, breeding information, and any assigned IoT sensor data.

### 3. Health & Alerts Management
- [ ] A centralized page to view and manage all health alerts from IoT sensors.
- [ ] Alerts should be categorized by severity (e.g., Critical, Warning, Info).
- [ ] Farmers must be able to acknowledge alerts, log actions taken, and view the historical alert log for each animal.

### 4. Marketplace Integration
- [ ] Farmers must be able to create and manage listings for their livestock and products on the two public marketplaces: **Livestock Marketplace** and **Products Marketplace**.
- [ ] The dashboard should provide tools to manage inventory, set pricing, and communicate with potential buyers.
- [ ] A section to track sales, manage orders, and view earnings from the marketplace.

### 5. Farm Operations & Reporting
- [ ] Tools for managing feeding schedules, pasture rotation, and breeding cycles.
- [ ] A reporting section to generate detailed reports on health, production, and financials.
- [ ] Farmers should be able to export their data for compliance and record-keeping purposes.

## Technical Details

- **Frontend Framework:** React with Material-UI, consistent with the design system in `LIVEMO_UI_DESIGN_SYSTEM.md`.
- **API Endpoints:** The farmer dashboard will be powered by the `livemo-backend` through endpoints such as:
  - `GET /api/farm/dashboard`
  - `GET /api/farm/animals`
  - `POST /api/farm/animals`
  - `GET /api/farm/animals/{id}`
  - `GET /api/farm/alerts`
  - `POST /api/farm/listings`
  - `GET /api/farm/orders`
  - `GET /api/farm/reports`
- **Real-time Data:** Implement WebSocket connections to display real-time data from IoT sensors on the dashboard.
- **Authentication:** Secure login and session management to protect farmers' data. Note: The public clientside uses cookie-based authentication.
- **Responsive Design:** The farmer's dashboard should be accessible and functional on various screen sizes, including desktop, tablet, and mobile, to accommodate farmers working in the field.

## Mockups

*Refer to `LIVEMO_CUSTOMER_PORTAL_DESIGN.md` for detailed UI mockups and layouts for the farmer's dashboard, animal management pages, and other related components.*
