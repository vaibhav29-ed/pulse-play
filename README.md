# create-project

create-project is a Next.js web application for Pulse Play, a gamified fitness application. Built with React and Tailwind CSS, it features marketing and informational pages covering workouts, progress tracking, community challenges, team members, and trust and safety guidelines.

## Overview

Pulse Play provides a web presence for a fitness gamification platform. The project contains marketing pages that introduce gamified workouts, social features, leaderboards, and progress tracking, alongside application information such as leadership details, contact mechanisms, and trust and safety standards.

## Features

- **Gamified Workouts & Challenges**: Marketing interface detailing fitness gamification, achievements, quests, and community challenges.
- **Dark Mode Support**: Theme toggling between light and dark modes with preference persistence in browser `localStorage`.
- **Direct APK Download**: Built-in download handler and link for retrieving the Android application (`/app-debug.apk`).
- **Contact Form**: Form submission integration posting user messages to external form handling services.
- **Trust & Safety Guidelines**: Dedicated view highlighting data protection, fair play guidelines, and community standards.

## Tech Stack

- **Framework**: Next.js 14.0.4
- **UI Library**: React 18
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Iconography**: FontAwesome Free (`@fortawesome/fontawesome-free`), Lucide React (`lucide-react`)

## Installation

Install project dependencies by executing:

```bash
npm install
```

## Usage

Run the application locally in development mode:

```bash
npm run dev
```

To build the application for production release:

```bash
npm run build
```

To start the production server after building:

```bash
npm run start
```

To run Next.js linting checks:

```bash
npm run lint
```
