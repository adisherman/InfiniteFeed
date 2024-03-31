# React Native InfiniteFeed

## Overview

InfiniteFeed is a React Native application designed to emulate the engaging experience of social media feeds. It features an endlessly scrolling list of posts, where users can interact through likes and comments. The application is built using MobX for efficient state management, ensuring a reactive and seamless user experience. It showcases custom hooks for scroll management and dynamic data loading, demonstrating best practices in modern app development.

## Getting Started

## Prerequisites

Node.js installed on your system.
React Native environment setup, including Node, Watchman, and either Xcode or Android Studio.

## Setup

1. **Clone the repository**:

git clone https://github.com/adisherman/InfiniteFeed.git

2. **Navigate to the project directory:**:

cd InfiniteFeed

3. **Install dependencies**:

npm install

4. **Run the app**:

- iOS:
  ```
  npx react-native run-ios
  ```
- Android:
  ```
  npx react-native run-android
  ```

## Key Features

- **Infinite Scrolling**: Implements a smooth, infinite scrolling experience, loading more posts as the user scrolls, simulating a never-ending feed.
- **nteractive Post Elements**: Allows users to engage with posts by liking and commenting, fostering an interactive community feel
- **Efficient State Management**: Utilizes MobX for state management, organizing the app's state in a scalable and maintainable manner, enabling automatic updates when the state changes.
- **Custom Hooks and Components**: Features custom React hooks, such as useInfiniteScroll, to encapsulate and manage scroll-related logic, along with modular React components for an organized codebase.

## Architecture

- **PostsStore**: Manages posts, loading state and data fetching. i've handled the fetch it self in the store, becuase ait seems to be best practice in the context of state management and separation of concerns.
- **PostsModal**: Represents the data structure and functionality of a single post, managing individual post attributes, likes, and comments.
- **useInfiniteScroll**: Custom hook for scroll handling and post fetching. i've implemented the scroll handeling in the hook to controll the refresh event instead of the use of the prop "onRefresh" beacause it demends the loading state which will require unnecessary re-renders.
- **Post**: A reusable component that renders individual posts. It handles user interactions such as likes and comments, providing a dynamic and responsive user experience.
