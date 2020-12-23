# react-bones

Dead simple loading components for React and React-Native.

[NPM](https://www.npmjs.com/package/react-bones)
[GitHub](https://github.com/jottenlips/react-bones/)

```
💀 npm i react-bones
```

React

```
import { Bones } from "react-bones/lib";

```

React-Native

```
import { Bones } from "react-bones/native";

```

```javascript
const Post = (props) =>
  props.loading ? (
    <View>
      <Bones />
      <View style={{ padding: 10 }} />
      <Bones width={600} height={20} />
      <View style={{ padding: 10 }} />
      <Bones width={600} height={20} />
      <View style={{ padding: 10 }} />
      <Bones width={600} height={20} />
      <View style={{ padding: 10 }} />
    </View>
  ) : (
    <View>
      <Image style={{ width: 50, height: 50 }} source={{ uri: props.image }} />
      <Text>{props.text}</Text>
    </View>
  );
```

## Storybook Demo

[Homepage](https://react-bones.com/)

[Demo](https://react-bones.com/?path=/docs/bones--bones-default)

## Example

Clone the repo and run `yarn run web` for a CRA example.

A fully linked React-Native example is coming soon.

For now, cd packages/bones_react_native_app

```
yarn
yarn run ios
```

## Thanks

Shoutout to everyone that works on [react-native-web](https://github.com/necolas/react-native-web) It is a great library!
