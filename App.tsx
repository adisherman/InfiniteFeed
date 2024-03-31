import React from 'react';
import ErrorBoundary from './src/common/Components/ErrorBoundary';
import FallbackComponent from './src/common/Components/FallbackComponent';
import AppNavigation from './src/navigation/AppNavigation';
import {KeyboardAvoidingView, LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  'Warning: Encountered two children with the same key,',
]);

const App = () => {
  const errorHandler = (
    current: ErrorBoundary,
    error: null | Error,
    stack: string,
  ) => {
    console.log(stack);
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ErrorBoundary
        FallbackComponent={FallbackComponent}
        onError={errorHandler}>
        <AppNavigation />
      </ErrorBoundary>
    </KeyboardAvoidingView>
  );
};

export default App;
