# Subscription Tracker Dashboard

A full-stack Subscription Tracker Dashboard built using React.js, Node.js, and Express.js.

## Features

### Dashboard Metrics

* Total Monthly Burn Rate
* Upcoming Renewal Count
* Renewing Soon Indicators

### Subscription Management

* Add New Subscription
* View All Subscriptions
* Toggle Active / Paused Status
* Delete Subscription

### Business Logic

* Monthly Cost Normalization
* Renewal Date Calculations
* Upcoming Renewal Detection
* Dashboard Metrics Computation

## Tech Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Node.js
* Express.js
* UUID
* CORS

## Project Structure

```text
subscription-tracker/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── data/
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── services/
    │   ├── App.jsx
    │   ├── App.css
    │   └── main.jsx
```

## Installation

### Clone Repository

```bash
git clone https://github.com/tarnuN/Quantiphi.git
cd Quantiphi
```

## Backend Setup

```bash
cd backend

npm install

node server.js
```

Backend runs on:

```text
http://localhost:3001
```

## Frontend Setup

```bash
cd frontend

npm install

npm install axios

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## API Endpoints

### Get All Subscriptions

```http
GET /api/subscriptions
```

### Add Subscription

```http
POST /api/subscriptions
```

### Toggle Status

```http
PATCH /api/subscriptions/:id/toggle
```

### Delete Subscription

```http
DELETE /api/subscriptions/:id
```

### Get Metrics

```http
GET /api/metrics
```

## Assumptions

* Data is stored in memory.
* No database is used.
* Active subscriptions contribute to Monthly Burn Rate.
* Renewals within 7 days are marked as "Renewing Soon".

## Future Improvements

* MongoDB Integration
* Authentication & Authorization
* Persistent Storage
* Email Renewal Notifications
* Responsive Mobile UI

## Author

Tarun Naik

GitHub:
https://github.com/tarnuN
