# react-native-learn-on-the-go

Learn React App Following Course Steps

# EP-01-BASICS

## JS Essentials

- let - var - const
- array
- map
- functions
- promises
- props
- classes

## TS Essentials

- interfaces
- props with interfaces

**ARRAY & MAP**
eg:

```
* const products = [{name: 'phone',price: 200}, {name:'tv', price: 400}]
* const productNames = products.map(e=> e.name);
```

decostrunction:

```
const tv = {name: 'TV', price: 400};
const phone = {name: 'TV', price: 400};

const {name} = tv;

const {name,...other} = tv;

const [product] = [tv,phone]

```

**FUNCTIONS**

Base

```
function myFun() {
    // do inside
}
```

Arrow

```
const myFun = () => {}

```

**PROMISES**

```
const myPromise = ():Promise<any> => {}

async myFun(){
    const do = await myPromise();
    return do;
}
```

eg:

```
function timeout(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}


timeout(0).then(v => {
  console.log(v);
});
```

**CLASSES**

Bases

```
class MyClass {
    MyClass(){}
}
```

Static

```

class MyClass {
    static myFun = () => 20;
    static prop = 'something';
}

```

## TS essentials

**INTERFACE**

```
interface Person {
    name: string;
    age: number;
    father: Person;
}
```

eg:

```
const luke:Person = {
    name: 'Luke',
    age: 21,
    father: {
        name: 'Anakin',
        age: 50,
    }
}

```

eg with Components

```
const Section: React.FC<{title: string}> = ({children, title}) => {
const isDarkMode = useColorScheme() === 'dark';

    return (
    <View style={styles.sectionContainer}>
        <Text> {title} </Text>
        <Text
            style={[
            styles.sectionDescription,
            {color: isDarkMode ? Colors.light : Colors.dark},
            ]}>
            {children}
        </Text>
    </View>
    );

};
```

## Class Component - Deprecated

- (Example)[https://snack.expo.dev/embedded/@jiepeng/react-native-counter?preview=true&platform=ios&iframeId=edas9aj8aq&theme=light]
