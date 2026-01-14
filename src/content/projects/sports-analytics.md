---
title: "Sports Analytics"
description: "High-performance bankroll management and predictive analytics platform for e-Sports betting, featuring a concurrent Go backend and AI-driven insights."
tags: ["Go", "TypeScript", "React", "PostgreSQL", "Azure", "Docker"]
publishDate: 2026-01-10
featured: true
githubLink: "https://github.com/xnzperez/sports-analytics"
demoLink: "https://sports-analytics-eight.vercel.app/"
---

## The Challenge

In the e-Sports betting ecosystem (LoL, Valorant), users often lack visibility into their performance metrics and struggle with responsible bankroll management. The goal for the **Microsoft Imagine Cup** was to build a system that ensures financial integrity while providing actionable, data-driven insights to improve user profitability and safety.

## Technical Implementation

As the **Lead Full-Stack Architect**, I designed a solution focusing on concurrency and data consistency:

- **High-Performance Backend (Go):** Built a RESTful API using **Fiber (v2)** and **GORM**. Implemented a background **Worker** (Goroutine) that acts as a scheduler to process and settle pending bets automatically without blocking the main thread.
- **Data Integrity:** Utilized **PostgreSQL** with ACID transactions and row-level locking (`SELECT FOR UPDATE`) to prevent race conditions during high-concurrency betting operations.
- **Modern Frontend:** Developed a SPA with **React**, **TypeScript**, and **Zustand** for state management, featuring real-time dashboards and visualizations with Recharts.
- **Cloud Infrastructure:** Containerized with **Docker** and deployed on **Azure Container Apps** with Azure Database for PostgreSQL.

## Key Features

- **Auto-Settlement Worker:** A concurrent service that resolves bets and updates the financial ledger every 10 seconds.
- **AI/Heuristic Advisor:** An analytics engine that detects betting patterns and suggests stake adjustments based on WinRate and ROI paradoxes.
- **Financial Ledger:** An immutable record of every transaction to ensure auditability.

## Impact

The platform creates a safer betting environment by automating risk management. The use of Go reduced API latency significantly, while the modular architecture allows for easy horizontal scaling on Azure.
