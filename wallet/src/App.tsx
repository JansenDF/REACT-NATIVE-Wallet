import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ThemeProvider} from 'styled-components/native';

import COLORS from '../src/styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={COLORS}>
      <View>
        <Text style={styled.font}>Wallet</Text>
      </View>
    </ThemeProvider>
  );
};

const styled = StyleSheet.create({
  font: {
    fontFamily: 'DMSans-Bold',
    color: COLORS.COLORS.TITLE,
  },
});

export {App};
