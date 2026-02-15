# ScreenPause

The focus app that helps you stop doom-scrolling and start accomplishing more.

## Features

- **Focus Sessions** — Set a timer and put your phone down
- **Daily Goals** — Track your daily focus time
- **Statistics** — See your progress over time
- **Streaks** — Build consistent focus habits

## Tech Stack

- Expo SDK 54
- React Native 0.79
- Expo Router for navigation
- Zustand for state management
- RevenueCat for monetization

## Getting Started

```bash
npm install
npx expo start
```

## Premium

Upgrade to Premium for:
- Friend challenges
- Advanced analytics
- Focus sounds
- Cloud sync

## API Configuration

### Required API Keys
Create a `.env` file in the project root:
```bash
EXPO_PUBLIC_REVENUECAT_API_KEY=your_revenuecat_api_key
```

### Getting API Keys
1. RevenueCat: https://www.revenuecat.com

### Type Checking
npx tsc --noEmit

### Building for Production
eas build --platform ios
eas build --platform android
