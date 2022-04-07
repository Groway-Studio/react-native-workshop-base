import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  Avatar,
  Button,
  configureFonts,
  DefaultTheme,
  IconButton,
  Provider as PaperProvider,
  Text,
} from 'react-native-paper';
import {rs} from './utils/responsive';

const fontConfig = {
  ios: {
    regular: {
      fontFamily: 'Montserrat-Regular',
    },
    medium: {
      fontFamily: 'Montserrat-Medium',
    },
    light: {
      fontFamily: 'Montserrat-Light',
    },
    thin: {
      fontFamily: 'Montserrat-Thin',
    },
  },
  android: {
    regular: {
      fontFamily: 'Montserrat-Regular',
    },
    medium: {
      fontFamily: 'Montserrat-Medium',
    },
    light: {
      fontFamily: 'Montserrat-Light',
    },
    thin: {
      fontFamily: 'Montserrat-Thin',
    },
  },
};
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
    <PaperProvider
      settings={{
        icon: props => <MaterialIcons {...props} />,
      }}
      theme={customPaperTheme(dark)}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>WhatsaApp</Text>
          <View style={styles.row}>
            <IconButton icon="search" color="white" />
            <IconButton icon="more-vert" color="white" />
          </View>
        </View>
        <View style={styles.red} />

        <View style={styles.orange}>
          <View style={{...styles.row, flex: 1}}>
            <View style={{flex: 1}}>
              <Avatar.Image size={rs(60)} />
            </View>
            <View style={{flex: 7}}></View>
            <View style={{flex: 1}}></View>
            <>
              <Text>Temp Title</Text>
              <Text>
                n publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without rely
              </Text>
            </>
            <View>
              <Text>4:30:pm</Text>
              <Avatar.Image size={rs(4)} />
            </View>
          </View>
        </View>
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
  title: {
    fontSize: rs(18),
    fontWeight: '500',
    color: 'white',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: rs(10),
    alignItems: 'center',
    paddingHorizontal: rs(10),
    backgroundColor: '#295d56',
  },
  orange: {
    flex: 9,
  },
  green: {
    backgroundColor: 'green',
    flex: 3,
  },
});

export default App;
