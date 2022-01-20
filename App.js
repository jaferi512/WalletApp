/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
  Button,
  TouchableOpacity,
} from 'react-native';
import WalletConnectProvider, {
  useWalletConnect,
} from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Home} from './src/Home';
const App: () => Node = () => {
  return (
    <WalletConnectProvider
      bridge="https://bridge.walletconnect.org"
      clientMeta={{
        description: 'Connect with WalletConnect',
        url: 'https://walletconnect.org',
        icons: ['https://walletconnect.org/walletconnect-logo.png'],
        name: 'WalletConnect',
      }}
      redirectUrl={
        Platform.OS === 'web' ? window.location.origin : 'yourappscheme://'
      }
      storageOptions={{
        asyncStorage: AsyncStorage,
      }}>
        <Home />
    </WalletConnectProvider>
  );
};

export default App;
