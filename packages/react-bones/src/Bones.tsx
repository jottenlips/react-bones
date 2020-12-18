import * as React from "react";
import { View } from "react-native";

import { animated, useSpring } from "react-spring";

interface BonesProps {
  width?: number;
  height?: number;
  toColor?: string;
  fromColor?: string;
  duration?: number;
  borderRadius?: number;
}

export const Bones = (props: BonesProps) => {
  const spring = useSpring({
    to: async (next) => {
      while (1) {
        await next({ backgroundColor: props.toColor || "#f0f0f0" });
        await next({ backgroundColor: props.fromColor || "#fdfdfd" });
      }
    },
    from: { backgroundColor: props.fromColor || "#fdfdfd" },
    config: { duration: props.duration || 500 },
  });

  return (
    <View>
      <AnimatedView
        style={{
          ...spring,
          borderRadius: props.borderRadius,
          width: props.width || 50,
          height: props.height || 50,
        }}
      />
    </View>
  );
};

const AnimatedView = animated(View);
