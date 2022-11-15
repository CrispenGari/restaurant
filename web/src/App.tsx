import React from "react";
import Routes from "./pages";
import { GraphQLProvider, ReduxProvider } from "./providers";
interface Props {}
const App: React.FC<Props> = () => {
  return (
    <GraphQLProvider>
      <ReduxProvider>
        <Routes />
      </ReduxProvider>
    </GraphQLProvider>
  );
};

export default App;
