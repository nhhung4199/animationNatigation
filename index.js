import { Navigation } from "react-native-navigation";
import { AppRegistry } from "react-native";
import App from "./App";
import Test1 from "./Test1";

import Test2 from "./Test2";
import ParallaxHeader from "./testParallaxHeader/ParallaxHeader";
import { name as appName } from "./app.json";
AppRegistry.registerComponent(appName, () => App);
Navigation.registerComponent("App", () => App);
Navigation.registerComponent("Test1", () => Test1);
Navigation.registerComponent("Test2", () => Test2);
Navigation.registerComponent("ParallaxHeader", () => ParallaxHeader);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "App",
            },
          },
        ],
      },
    },
  });
});
