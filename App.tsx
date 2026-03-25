import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationConductor } from '@app/navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationConductor />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
