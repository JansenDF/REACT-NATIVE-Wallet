import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App: React.FC = () => {
  return (
    <View>
      <Text style={styled.font}>Wallet</Text>
    </View>
  );
};

const styled = StyleSheet.create({
  font: {
    fontFamily: 'DMSans-Bold',
  },
});

export {App};
