# ScreenPause - Setup Guide

## Prerequisites

- Node.js 20.x LTS
- npm or yarn
- Expo CLI (`npx expo`)
- Apple Developer account (for App Store)
- Google Play Console (for Android)
- RevenueCat account

## Install

```bash
cd builds/screen-pause
npm install
```

## Run Development

```bash
npx expo start
```

Scan QR code with iOS Camera or Android Expo Go.

## RevenueCat Setup

1. Create account at [revenuecat.com](https://revenuecat.com)
2. Create new app (iOS + Android)
3. Create products:
   - `premium_monthly` - $4.99/month
   - `premium_yearly` - $29.99/year
4. Copy API key to `.env`:
   ```
   REVENUECAT_API_KEY=your_api_key_here
   ```
5. Enable sandbox mode for testing

## App Store Connect

- Bundle ID: `com.startupstartup.screenpause`
- App Name: ScreenPause
- Category: Health & Fitness

## Build for iOS (EAS)

```bash
npx expo eas build --platform ios --profile production
```

## Submit to App Store

1. Upload build via EAS or Xcode
2. Fill App Store metadata in App Store Connect
3. Submit for review

## Features

- Digital wellness challenges
- Screen time tracking and goals
- Daily/weekly challenges
- Statistics and insights
- Premium: unlimited challenges, detailed analytics, custom goals
