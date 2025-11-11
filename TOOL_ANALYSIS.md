# Restaurant Financial Analysis Tool - Complete Analysis

## Project Overview
This is a sophisticated financial planning and menu management tool for "Restaurante ConAcento", built with vanilla JavaScript, HTML5, and Supabase backend. It's designed in Spanish (es-ES) for restaurant operators to:
- Plan daily operations and occupancy
- Simulate menu scenarios for different customer personas
- Manage menu items and pricing
- Calculate financial projections
- Track personnel costs
- Monitor operating expenses

---

## 1. MAIN FEATURES & SECTIONS

### Tab 1: Planificación y Variables (Planning & Sales Variables)
**Purpose**: Set up core business metrics and daily planning

**Key Inputs**:
- **Capacidad Total (Total Seating)**: Range 40-120, default 80 (40 terrace + 50 interior)
- **Ticket Medio (Average Ticket)**: Range 20-60€, default 35€
- **Aprovisionamiento (Supply Cost)**: % of sales, range 25-45%, default 40% (historical 35%)

**Functionality**:
- Interactive range sliders with real-time value displays
- Daily calendar planning with month expansion
- Mark days as open/closed for the restaurant
- Set occupancy percentage per day (0-100%)
- Specify number of shifts per day
- Automatic financial calculations based on daily planning

**Output**:
- Accumulated cash flow chart (Flujo de Tesorería)
- Month summaries with projected revenue/costs
- Day-by-day breakdown

---

### Tab 2: Escenarios Menú (Menu Scenarios Simulator)
**Purpose**: Create and compare menu order scenarios for different customer personas

**Two Modes**:
1. **Crear Escenario (Create Scenario)**
   - Input: Number of customers (1-20) + Customer persona type
   - Personas (7 types):
     - Los Tapeadores: Share small plates (0.8 appetizers, 0.8 starters, 2 drinks per person)
     - Los Steak Lovers: Premium meat lovers (1 meat dish, 0.5 dessert per person)
     - Los Value Hunters: Budget-conscious (1 meat, 0.3 appetizers per person)
     - Los Foodies: Experience seekers (0.8 starters, 0.5 meat per person)
     - Las Familias: Weekend family groups (large quantities)
     - Los Grupos Sociales: Friend groups (balanced menu)
     - Los Festivos: Special occasions (high dessert/drinks consumption)
   - Generate random menu based on persona patterns
   - Manually add/remove items from categories
   - Validates against menu rules

2. **Escenarios Guardados (Saved Scenarios)**
   - View previously saved menu scenarios
   - Compare multiple scenarios side-by-side
   - Delete old scenarios
   - Stored in browser localStorage (key: 'savedMenuScenarios')

**Scenario Calculations**:
- **Total Revenue**: Sum of item prices × quantities
- **Total Cost**: Sum of item costs × quantities
- **Gross Margin**: Revenue - Cost
- **Margin %**: (Margin / Revenue) × 100
- **Average per Person**: Total Revenue / Number of People

**Rules Validation**:
- System enforces active menu rules during scenario creation
- Prevents adding items that violate max/min quantity constraints

---

### Tab 3: Administrar Menú (Manage Menu)
**Purpose**: Full CRUD operations for menu items with history tracking

**Sub-tabs**:

#### 3.1 Productos (Products)
**Search & Filter**:
- Search by product name
- Filter by food/drink categories
- Download menu as CSV

**Product Categories** (18 total):
- **Food**: Aperitivos, Entrantes, Ensaladas, Carnes, Guarniciones, Postres
- **Wine**: Vinos Blancos, Vinos Rosados, Vinos Tintos, Espumosos
- **Beverages**: Aperitivos (Bebidas), Cervezas, Refrescos, Zumos, Aguas, Cafés

**CRUD Operations**:
- **Create**: Add new products with name, description, price, cost
- **Read**: Display all products in formatted table
- **Update**: Edit individual product fields (inline editing)
- **Delete**: Remove products with confirmation

**Bulk Edit Panel** (optional):
- Adjust prices by percentage (e.g., +10% or -5%)
- Adjust costs by percentage
- Calculate prices based on target margin %

**Data Persistence**:
- Pulls from Supabase table `menu_items`
- Fallback to local data if Supabase unavailable
- Updates sync with Supabase

#### 3.2 Reglas de Simulación (Simulation Rules)
**Purpose**: Define constraints for menu building

**Rule Types**:
- **Maximum rules**: Limit max quantity of items in categories
- **Minimum rules**: Require minimum quantity of items in categories

**Rule Parameters**:
- Select one or more categories
- Define quantity limit
- Apply per person (e.g., "max 2 wines per 2 people") or total ("max 4 wines total")
- Activate/deactivate without deletion

**Validation**:
- System blocks rule violations when creating scenarios
- Shows clear error message with rule details

#### 3.3 Historial (Audit Log)
**Purpose**: Track all menu changes over time

**Tracked Actions**:
- add: New products created
- edit: Product modifications
- delete: Product deletions
- bulk_edit: Bulk price/cost adjustments

**Filter Options**:
- By action type (Edit, Add, Delete, Bulk Edit)
- By category
- By product name (search)

**Log Data Captured**:
- Action type
- Product name
- Category
- Field changed (if edit)
- Old value → New value
- Timestamp (ISO format)

**Supabase Table**: `menu_audit_log`

---

### Tab 4: Personal y Salarios (Personnel & Salaries)
**Purpose**: Manage employee costs with tax calculations

**Default Employees** (7):
1. Vito (Jefe de Sala + Gerente): 2000€ net/month
2. Francisco (Ayudante cocina): 1450€ net/month
3. Elena (Ayudante cocina): 1550€ net/month
4. Elena U (Camarero): 1450€ net/month
5. Extra cocina (fin de semana): 550€ net/month
6. Extra sala (fin de semana): 550€ net/month
7. Extra office (40h): 1050€ net/month

**Calculation Logic** (Spanish Tax System - Andalucía 2025):
- Input: Monthly net salary (what employee receives)
- Reverse calculation to gross:
  - Apply IRPF (progressive tax: 19%-45% depending on bracket)
  - Apply Social Security deduction (6.35%)
- Calculate employer costs:
  - Gross annual salary
  - Employer Social Security (31% of gross)
  - **Total Annual Cost = Gross + SS Empresa (31%)**

**IRPF Brackets** (Andalucía 2025):
- 0€ - 12,450€: 19%
- 12,450€ - 13,000€: 21.5%
- 13,000€ - 20,200€: 24%
- 20,200€ - 21,000€: 27%
- 21,000€ - 35,200€: 30%
- 35,200€ - 50,000€: 37%
- 50,000€ - 60,000€: 41%
- 60,000€+: 45%

**Features**:
- Add/remove custom employees
- Expandable detail view showing:
  - Gross annual salary
  - IRPF deductions
  - Social Security deductions
  - Total annual company cost
- Total annual personnel cost display

---

### Tab 5: Gastos Operativos (Operating Expenses)
**Purpose**: Track fixed and variable operating costs

**Standard Expenses**:
1. Alquiler Local (Rent): 1,836€/month
2. Luz (Electricity): 750€/month
3. Agua (Water): 250€/month
4. Gas: 300€/month
5. Internet: 50€/month
6. Alarma (Alarm): 30€/month
7. Redes Sociales (Social Media): 150€/month
8. Mantenimiento (Maintenance): 150€/month
9. Veladores (Outdoor Furniture Rental): 1,415€/year
10. Qamarero (Waiter Supplies): 1,000€/year
11. Asesoría (Accounting/Legal): 320€/month (3,840€/year)

**Custom Expenses**:
- Add unlimited custom expenses
- Set amount and frequency (monthly/annual)
- Automatic annual total calculation

**Total Annual Operating Costs**: Displayed at bottom (~46,545€ default)

---

### Tab 6: Resultados (Financial Results)
**Purpose**: Display comprehensive financial projections

**Three Views**:

#### 6.1 Resultado 2025 (Nov-Dec only)
Financial flow breakdown:
- Gross Revenue
- Supply Costs
- Gross Margin
- Personnel Costs
- Operating Costs
- **Operating Result**

#### 6.2 Resultado 2026 (Full year)
Same structure as 2025 for full 12-month period

#### 6.3 Desglose Mensual (Monthly Breakdown Table)
Columns:
- Month
- Number of shifts
- Gross revenue
- Supply costs
- Gross margin
- Personnel costs
- Operating costs
- Monthly result (profit/loss)

#### 6.4 Visualización de Resultados (Chart)
- Bar chart showing financial flow
- Total revenue → Costs → Operating result
- Color-coded (green for positive, red for negative)

---

## 2. DATA BEING TRACKED & CALCULATED

### Input Data
1. **Daily Planning**:
   - Date
   - Open/Closed status
   - Number of shifts
   - Occupancy percentage (0-100%)

2. **Business Metrics**:
   - Total seating capacity
   - Average ticket price
   - Supply cost percentage

3. **Personnel**:
   - Employee names
   - Net monthly salary
   - Employment type

4. **Operating Expenses**:
   - Fixed monthly costs
   - Annual/monthly variable costs

5. **Menu**:
   - Product name, description
   - Selling price
   - Cost
   - Category

### Calculated Data

**Daily Level**:
- Estimated guests = Capacity × Occupancy % × Shifts
- Daily revenue = Guests × Average ticket
- Daily supply cost = Daily revenue × Supply cost %
- Daily gross margin = Daily revenue - Supply cost

**Monthly Level**:
- Sum of daily revenues
- Sum of supply costs
- Monthly personnel costs (prorated from annual)
- Monthly operating costs
- Monthly result = Gross margin - Personnel - Operating

**Annual Level**:
- Total revenue by year
- Total costs by category
- Operating result (net profit/loss)
- Cumulative cash flow

**Scenario Level** (Menu):
- Total order cost
- Total order price
- Gross margin per order
- Margin percentage
- Average spend per person

---

## 3. USER WORKFLOW

### Standard Usage Flow:

1. **Setup Phase**:
   - Navigate to "Planificación y Variables" tab
   - Set seating capacity, ticket price, supply cost %
   - Click through calendar, mark days open/closed
   - Set occupancy % for each day

2. **Menu Planning**:
   - Go to "Administrar Menú" → Productos
   - Review/customize menu items and prices
   - Define operational rules in "Reglas de Simulación"

3. **Scenario Analysis** (Optional):
   - Go to "Escenarios Menú" tab
   - Select customer count and persona type
   - Generate random menu OR manually select items
   - Save interesting scenarios for comparison

4. **Personnel Setup**:
   - Navigate to "Personal y Salarios"
   - Add/remove employees
   - Input net monthly salaries (auto-calculates company costs)

5. **Expense Configuration**:
   - Go to "Gastos Operativos"
   - Input fixed costs for rent, utilities, etc.
   - Add custom variable expenses

6. **Results Review**:
   - Click "Resultados" tab
   - Review 2025 & 2026 projections
   - Check monthly breakdown table
   - Analyze financial flow chart

7. **Adjustments & Iterations**:
   - Change variables (capacity, ticket price, costs)
   - Watch calculations update in real-time
   - Save favorable scenarios
   - Export menu as CSV for external use

---

## 4. SUPABASE TABLES & DATA STRUCTURES

### Supabase Connection:
- **URL**: https://drmareaqvenjqdhidzeb.supabase.co
- **Auth**: Anon key (public, read/write access)

### Tables:

#### Table 1: `menu_items`
```
Columns:
- id (UUID, primary key)
- category (text): aperitivos, entrantes, carnes, etc.
- name (text): Product name
- description (text): Product description
- price (numeric): Selling price in €
- cost (numeric): Cost in €
- created_at (timestamp)
```

**Operations**:
- SELECT all by category
- INSERT new items
- UPDATE price/cost/description
- DELETE items
- CSV download

---

#### Table 2: `menu_rules`
```
Columns:
- id (UUID, primary key)
- rule_type (text): 'max' or 'min'
- categories (array): List of affected categories
- quantity (numeric): Limit quantity
- per_people (integer): null if total, else # people
- is_active (boolean): Enable/disable without deleting
- created_at (timestamp)
```

**Operations**:
- SELECT all rules (order by created_at DESC)
- INSERT new rule
- UPDATE is_active status
- DELETE rules

---

#### Table 3: `menu_audit_log`
```
Columns:
- id (UUID, primary key)
- action (text): 'add', 'edit', 'delete', 'bulk_edit'
- category (text): Product category
- product_name (text): Product name
- field_changed (text): Which field was edited (null for add/delete)
- old_value (text): Previous value
- new_value (text): New value
- created_at (timestamp, auto-set to NOW())
```

**Operations**:
- INSERT log entries on every action
- SELECT all (or filtered by action/category)
- Read-only table (no updates/deletes)

---

## 5. CSV FILES & CONTENTS

### File 1: `calendario_novdic2025_y_2026.csv`
**Purpose**: Full calendar with date metadata
**Columns**:
- fecha (YYYY-MM-DD format)
- dia_semana (Day of week in Spanish)
- dia (Day number 1-31)
- mes (Month number 1-12)
- año (Year 2025/2026)
- semana_iso (ISO week number)

**Rows**: 460 entries (Nov 1, 2025 - Dec 31, 2026)

**Usage**: 
- Embedded in HTML as constant `calendarCSV`
- Parsed to generate interactive calendar
- Used to group days by month
- Determine which year/month for financial calculations

---

### File 2: `Estimacion flujos caja y ventas - Estimación salario.csv`
**Purpose**: Historical salary data and calculations

**Sections**:
1. Historical data (2019-2024):
   - Total salaries
   - Indemnities
   - Employer Social Security
   - Total personnel cost

2. Employee breakdown (current 7 employees):
   - Employee name
   - Gross monthly salary
   - Gross annual (prorated)
   - Employer SS (30%)
   - Total annual cost
   - Net monthly after SS
   - Net monthly after IRPF

**Used by**: Personnel tab calculations, wage projection models

---

### File 3: `Estimacion flujos caja y ventas - Estimación ventas y gastos.csv`
**Purpose**: Operating expense baseline and revenue scenarios

**Sections**:
1. Operating expenses breakdown:
   - Monthly and annual costs for each expense item
   - Subtotals by category

2. Three scenarios (Optimista/Regular/Pesimista):
   - Total diners: 80
   - Average ticket: 30€
   - Shifts/week: 9
   - Annual shifts: 441
   - Occupancy: 50% / 40% / 30%
   - Expected gross revenue
   - Supply costs
   - Operating result

**Used by**: Initial templates, scenario comparisons

---

## 6. TECHNOLOGY STACK

**Frontend**:
- HTML5 with embedded CSS
- Vanilla JavaScript (no frameworks)
- Chart.js for financial charts
- Responsive grid layout (CSS Grid)
- Mobile-optimized (iPhone compatibility)

**Backend**:
- Supabase (PostgreSQL + Real-time APIs)
- Anon-key authentication

**Data Storage**:
- Browser localStorage (saved scenarios)
- Supabase cloud (menu, rules, audit log)

**External Libraries**:
- Chart.js 4.x (via CDN)
- Supabase JS client 2.x (via CDN)
- System fonts (no custom fonts)

---

## 7. KEY BUSINESS LOGIC

### Financial Flow:
```
Revenue = Capacity × Occupancy % × Ticket Price × Shifts
Gross Margin = Revenue - (Revenue × Supply Cost %)
Operating Result = Gross Margin - Personnel Costs - Operating Costs
```

### Personnel Cost Calculation:
```
1. Input: Net monthly salary (what employee receives)
2. Calculate: Gross = Net / (1 - IRPF_rate - SS_rate)
3. Annual: Gross × 12
4. Employer SS: Annual Gross × 31%
5. Total Cost: Annual Gross + Employer SS
```

### Menu Rule Validation:
```
For each active rule:
  1. Count current items in rule's categories
  2. Calculate limit:
     - If per_people: (people / per_people) × rule_quantity
     - If total: rule_quantity
  3. If rule_type = 'max' and count >= limit:
     - Block the addition
     - Show error with rule details
```

---

## MULTI-TENANT SAAS CONVERSION CONSIDERATIONS

### Current Single-Tenant Limitations:
1. Hard-coded Supabase credentials in HTML
2. All data in shared Supabase account
3. No user authentication
4. No restaurant/tenant isolation
5. Fixed menu and expenses in code
6. Scenarios stored per-browser (localStorage)

### Conversion Requirements:
1. **Multi-tenant architecture**: Each restaurant = separate tenant
2. **Authentication**: User login with tenant association
3. **Data isolation**: RLS (Row Level Security) policies on all tables
4. **API layer**: Backend to handle auth & data validation
5. **Scalability**: Move calculations to backend if needed
6. **White-label options**: Custom branding per tenant
7. **Pricing model**: Per-restaurant or per-user subscription

