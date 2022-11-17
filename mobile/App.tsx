import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import { Loading } from "./src/components";
import { GraphQLProvider, ReduxProvider } from "./src/providers";
import Routes from "./src/routes";
const App = () => {
  const [loaded] = useFonts({
    Sono: require("./assets/fonts/Sono.ttf"),
  });
  if (!loaded) {
    return <Loading />;
  }

  return (
    <ReduxProvider>
      <GraphQLProvider>
        <Routes />
      </GraphQLProvider>
    </ReduxProvider>
  );
};

export default App;
