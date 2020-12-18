import * as React from "react";
import { Bones } from "../Bones";
import { View } from "react-native";

export const BonesDefault: React.VFC<{}> = () => <Bones />;

export const BonesCustomWidth: React.VFC<{}> = () => <Bones width={600} />;

export const BonesCircle: React.VFC<{}> = () => (
  // since default width is 50
  <Bones borderRadius={25} />
);

export const BonesLayout: React.VFC<{}> = () => (
  // Views or div if web
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
);

export const BonesLayoutRounded: React.VFC<{}> = () => (
  // Views or div if web
  <View>
    <Bones borderRadius={25} />
    <View style={{ padding: 10 }} />
    <Bones width={600} height={20} borderRadius={10} />
    <View style={{ padding: 10 }} />
    <Bones width={600} height={20} borderRadius={10} />
    <View style={{ padding: 10 }} />
    <Bones width={600} height={20} borderRadius={10} />
    <View style={{ padding: 10 }} />
  </View>
);

export const BonesCustomColor: React.VFC<{}> = () => (
  // Views or div if web
  <View>
    <Bones borderRadius={25} toColor={"#800080"} fromColor={"#eeeeee"} />
  </View>
);

export const BonesCustomDuration: React.VFC<{}> = () => (
  // Views or div if web
  <View>
    <Bones borderRadius={25} duration={400} />
  </View>
);

export default {
  title: "Bones",
};
