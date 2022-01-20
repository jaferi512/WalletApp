import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import WalletConnectProvider, {
    useWalletConnect,
  } from '@walletconnect/react-native-dapp';

const Home = () => {
    const Connector = useWalletConnect();
  return (
    <View>
    <TouchableOpacity onPress={() => Connector.connect()}>
      <Text>Connect</Text>
    </TouchableOpacity>
  </View>
  );
};

export {Home};

const styles = StyleSheet.create({});
