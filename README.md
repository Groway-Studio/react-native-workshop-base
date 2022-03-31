# react-native-learn-on-the-go

Learn React App Following Course Steps

## EP 02 Layout & Styling

**UI**

- user interface
- explica el desarollo de una vista

**UX**

- user experience
- explica la experiencia de una vista

**STYLING**

```
const styles = StyleSheet.create({
  container: {
    with: 400,
    height: 200,
    color: 'red'
  },
});
```

**UI-KITS**

- paper
- kitten

**FONTS**
while using fonts we would need to update the `react-native.config.js`

```
module.exports = {
    project: {
        ios: {},
        android: {}, // grouped into "project"
    },
    assets: ["./assets/fonts/"], // stays the same
};
```

and copy the following into the paper

```
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
}
```

**LAYOUT-FLEX**

```
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // flexDirection: 'row',
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
```

**LAYOUT-PIXEL-PERFECT**

```
const styles = StyleSheet.create({
  container: {
   paddingHorizontal: res(20)
  },
});
```
