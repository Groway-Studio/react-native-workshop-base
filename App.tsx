import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

const fontConfig = {};
const customPaperTheme = (dark: boolean): ReactNativePaper.Theme => ({
  ...DefaultTheme,
  dark,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
  },
});

const App = () => {
  const dark = true;
  return (
    <PaperProvider theme={customPaperTheme(dark)}>
      <SafeAreaView style={styles.container}>
        <View style={styles.red} />
        <View style={styles.orange} />
        <View style={styles.green} />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  red: {
    backgroundColor: 'red',
    flex: 1,
  },
  orange: {
    backgroundColor: 'darkorange',
    flex: 5,
  },
  green: {
    backgroundColor: 'green',
    flex: 3,
  },
});

export default App;
