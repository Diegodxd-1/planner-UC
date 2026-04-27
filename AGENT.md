# AGENT.md

## Purpose

This file is a compact Spec-Driven Development guide for agents working on this repository.

Use it as the default reference before making changes.

## Project Overview

Planner-UC is a prototype for academic schedule planning and visualization.

Current stack:

- `frontend/`: Next.js + React + TypeScript
- `backend/`: FastAPI + Python
- `solver`: OR-Tools with `CP-SAT`

Current goal:

- generate a demo academic offering from backend data
- expose that result through an API
- visualize the generated weekly schedule in the frontend

## Current Structure

Root folders:

- `frontend/` client application
- `backend/` API and scheduling logic
- `docs/` project documentation
- `scripts/` utility scripts
- `otros/` non-core material

Do not invent a new root structure unless explicitly requested.

## Source of Truth

When working on this project, prioritize these files:

- `backend/app/scheduling_demo.py`
- `backend/app/scheduling_demo_data.py`
- `backend/app/main.py`
- `frontend/app/page.tsx`
- `frontend/app/layout.tsx`
- `backend/README.md`
- `backend/README_CP_SAT.md`
- `frontend/README.md`

## Functional Scope

The current implemented scope is:

- backend returns a generated scheduling demo
- frontend fetches backend data from `/api/scheduling-demo`
- frontend renders a weekly schedule grid
- frontend shows summary metrics and filters

Out of scope unless explicitly requested:

- real enrollment by student
- teacher assignment
- dynamic solver configuration from UI
- authentication
- production-grade persistence

## System Behavior

Backend responsibility:

- build demo data
- estimate course demand
- generate candidate patterns
- optimize section openings with `CP-SAT`
- return structured JSON

Frontend responsibility:

- call backend API
- handle loading and error states
- render the weekly schedule
- provide simple visual filters

## Technical Intent

This project uses optimization, not manual scheduling rules.

The solver model should remain centered on:

- boolean decision variables
- hard constraints
- weighted objective optimization

Prefer preserving this modeling style when extending the solver.

## Development Strategy

Work incrementally.

Rules:

- implement one meaningful change at a time
- verify each change before moving on
- prefer small safe edits over broad rewrites
- do not mix major backend and frontend refactors in one step unless necessary

## Backend Rules

Use and preserve:

- `FastAPI`
- modular Python files
- clear separation between data building, optimization, and API exposure

When editing scheduling logic:

- keep constraints explicit
- keep objective terms understandable
- prefer readable helper functions over dense inline logic
- do not replace `CP-SAT` with ad hoc heuristics unless requested

## Frontend Rules

Use and preserve:

- functional React components
- client-side fetching only where already intended
- clear loading, success, and error states
- UI that explains the schedule visually

Avoid:

- hidden business logic inside purely visual helpers
- unnecessary state complexity
- changing API contracts without updating backend accordingly

## Documentation Rules

When behavior changes, update the relevant docs:

- `backend/README.md` for backend behavior
- `backend/README_CP_SAT.md` for solver explanation
- `frontend/README.md` for frontend behavior

Keep docs concise and practical.

## Coding Standards

General:

- prefer readable code over clever code
- preserve existing naming style in each area
- avoid large unrelated formatting churn

Python:

- follow simple, explicit function design
- keep model-building code easy to explain

TypeScript / React:

- use `camelCase` for variables
- use `PascalCase` for components
- keep types explicit when they improve clarity

## Safety Boundaries

Do not:

- remove working code without a safe replacement
- modify lockfiles without reason
- change API payload shapes casually
- break the connection between `frontend` and `backend`
- introduce new infrastructure or dependencies unless justified

## Validation

Before finishing, validate what applies:

- backend still starts
- frontend still starts
- `/api/scheduling-demo` still responds
- frontend still renders fetched schedule data
- docs still match the implemented behavior

## Preferred Task Order

For most requests, follow this order:

1. Understand the current behavior.
2. Identify the smallest correct change.
3. Implement the change.
4. Verify locally if possible.
5. Update docs if behavior changed.

## Prompt Template For Another Agent

Use this when delegating work to another agent:

> You are working on Planner-UC. Keep the current architecture with `frontend/` as Next.js and `backend/` as FastAPI with OR-Tools `CP-SAT`. Preserve the current scheduling-demo flow: backend generates the schedule and frontend visualizes it from `/api/scheduling-demo`. Make the smallest safe change that solves the task, avoid unrelated refactors, keep docs aligned, and do not break the API contract unless explicitly requested.

## Definition of Done

A task is done when:

- the requested change is implemented
- current behavior outside the task is preserved
- affected docs are updated when needed
- the app remains understandable for future agents
