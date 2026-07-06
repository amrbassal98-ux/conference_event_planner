# Triple-Slice Conference Event Cost Calculator with Redux Toolkit State Machines

A React single-page application implementing a triple-slice Redux Toolkit architecture for venue selection, AV equipment allocation, and meal planning with real-time cost aggregation. Demonstrates domain-driven state decomposition, quantity-constrained inventory management, and selector-derived total cost computation.

---

## Architecture Overview

### State Machine Topology

The application employs **Redux Toolkit's `createSlice`** to define three independent state domains that share a unified `configureStore` root, each managing a distinct event planning domain:

```
configureStore
  |
  +-- venue reducer     (venueSlice)   -- Venue inventory + quantity constraints
  +-- av reducer        (avSlice)      -- AV equipment inventory + quantity controls
  +-- meals reducer     (mealsSlice)   -- Meal option selection + toggle logic
```

### VenueSlice State Machine

```
State: Array<{ img, name, cost, quantity }>

Transitions:
  incrementQuantity -> quantity++ (capped at 3 for Auditorium Hall)
  decrementQuantity -> quantity-- (floor at 0)
```

**Business Rule**: Auditorium Hall (Capacity:200) is limited to 3 units maximum.

### AVSlice State Machine

```
State: Array<{ img, name, cost, quantity }>

Transitions:
  incrementAvQuantity -> quantity++
  decrementAvQuantity -> quantity-- (floor at 0)
```

### MealsSlice State Machine

```
State: Array<{ name, cost, selected: boolean }>

Transitions:
  toggleMealSelection -> selected = !selected
```

### Cost Aggregation Flow

```
TotalCost Component
  |
  +-- useSelector(state.venue)    -> Sum(venue[i].cost * venue[i].quantity)
  +-- useSelector(state.av)       -> Sum(av[i].cost * av[i].quantity)
  +-- useSelector(state.meals)    -> Sum(meals[i].cost * meals[i].selected)
  |
  v
  Grand Total = Venue Total + AV Total + Meals Total
```

### Component Hierarchy

```
App
  +-- ConferenceEvent
  |     +-- Venue Section (increment/decrement per venue type)
  |     +-- AV Section (increment/decrement per equipment type)
  |     +-- Meals Section (toggle selection per meal type)
  +-- TotalCost
        +-- Venue cost line items
        +-- AV cost line items
        +-- Meals cost line items
        +-- Grand total computation
```

---

## Technical Stack Matrix

| Component | Technology | Version | Role |
|:---|:---|:---|:---|
| UI Framework | React | ^18.2.0 | Component rendering, virtual DOM |
| State Management | Redux Toolkit | ^2.2.3 | Slice-based state machines |
| React-Redux | react-redux | ^9.1.1 | Hook-based store binding |
| Build Tool | Vite | ^7.3.1 | Dev server, HMR, production bundler |
| Linter | ESLint | ^8.57.0 | Static analysis, React Hooks rules |
| Module System | ES Modules | - | `import`/`export` (type: "module") |

---

## Operational Blueprint

### Prerequisites

- Node.js 18+ (via NVM recommended)
- npm 9+

### Local Setup

```bash
# Clone the repository
git clone https://github.com/amrbassal98-ux/conference_event_planner.git
cd conference_event_planner

# Install dependencies (user-space, no sudo)
npm install

# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

Development server runs on `http://localhost:5173` (Vite default).

---

## Project Structure

```
conference_event_planner/
  src/
    main.jsx                    # React DOM root mount
    App.jsx                     # Root component, store provider
    store.js                    # configureStore (venue + av + meals reducers)
    venueSlice.js               # Redux slice: venue inventory + quantity constraints
    avSlice.js                  # Redux slice: AV equipment + quantity controls
    mealsSlice.js               # Redux slice: meal selection toggle
    ConferenceEvent.jsx         # Main event configuration interface
    ConferenceEvent.css         # Event section styling
    TotalCost.jsx               # Cost aggregation display
    TotalCost.css               # Cost panel styling
    AboutUs.jsx                 # About page component
    index.css                   # Global styles
  index.html                    # HTML entry point
  vite.config.js                # Vite configuration
  package.json                  # Dependencies and scripts
```

---

## Architectural Modernization Roadmap

### 1. TypeScript Migration for Type-Safe State Interfaces

Define explicit TypeScript interfaces for `VenueItem`, `AVItem`, `MealOption`, and `AppState`. Replace plain JavaScript objects with typed state shapes, enabling compile-time guarantees on dispatch payloads (e.g., `incrementQuantity(index: number)` vs. arbitrary payload). This eliminates runtime property access errors and enables IDE auto-completion for all Redux operations.

### 2. LocalStorage Persistence Middleware

Implement a Redux middleware that intercepts venue/AV/meals mutation actions, serializing the combined state to `localStorage` on every dispatch. On application boot, hydrate the store from persisted data via `preloadedState`. This ensures event configurations survive page refreshes without requiring a backend, enabling offline-capable event planning.

### 3. Vite Asset Optimization Pipeline

Configure Vite's `build.rollupOptions.output.manualChunks` to split vendor dependencies (`react`, `react-dom`, `@reduxjs/toolkit`) into separate cache-busting chunks. Enable `build.cssCodeSplit: true` for per-component CSS extraction. Implement `build.rollupOptions.input` with code splitting for lazy-loaded route components. This reduces initial load time by optimizing the critical rendering path.

---

*Part of the IBM Full-Stack Cloud Developer Professional Certificate portfolio.*
