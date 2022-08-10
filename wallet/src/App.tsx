import React from 'react';
import {View, Text} from 'react-native';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';

import COLORS from '../src/styles/theme';
import FONTS from '../src/styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={COLORS}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Wallet App</Text>
      </View>
    </ThemeProvider>
  );
};

export {App};
