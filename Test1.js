/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Navigation } from "react-native-navigation";

const Test1 = (props) => {
  const clickkk = () => {
    Navigation.push(props.componentId, {
      component: {
        name: "ParallaxHeader",
      },
    });
  };
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "green",
          width: "100%",
          height: 150,
          alignItems: "center",
          shadowOpacity: 5,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={clickkk}>
          <Image
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
            nativeID={"image1Dest"}
            style={styles.image1}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={styles.image}
        />

        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  description: {
    fontSize: 15,
    letterSpacing: 0.2,
    lineHeight: 25,
    marginTop: 32,
    marginHorizontal: 24,
  },
  image1: {
    height: 70,
    width: 70,
    zIndex: 1,
    transform: [{ rotate: "45deg" }],
    marginLeft: 24,
    marginBottom: -24,
    // borderRadius: 20,
  },
  image: {
    height: 70,
    width: 70,
    zIndex: 1,

    marginLeft: 24,
    marginBottom: -24,
    // borderRadius: 20,
  },
});
export default Test1;
