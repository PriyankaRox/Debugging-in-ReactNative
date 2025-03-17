import { Image, StyleSheet, Platform, View } from "react-native";
import {
  NavigationContainer,
  useNavigationContainerRef
} from "@react-navigation/native";
import { useReactNavigationDevTools } from "@dev-plugins/react-navigation/build/useReactNavigationDevTools";
import NotFoundScreen from "../+not-found";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { useApolloClientDevTools } from "@dev-plugins/apollo-client";
//react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useReactQueryDevTools } from "@dev-plugins/react-query";

//redux plugin
import devToolsEnhancer from "redux-devtools-expo-dev-plugin";
import { configureStore } from "@reduxjs/toolkit";

//redux plugin
// const store = configureStore({
//   reducer: rootReducer,
//   enhancers: (defaultEnhancers) => [...defaultEnhancers, devToolsEnhancer()],
// });

//react query
const queryClient = new QueryClient();

//apollo client
const client = new ApolloClient({
  uri: "https://api.example.com/graphql",
  cache: new InMemoryCache()
});

export default function HomeScreen() {
  const navRef = useNavigationContainerRef();
  useReactNavigationDevTools(navRef);

  useApolloClientDevTools(client);

  useReactQueryDevTools(queryClient);

  return (
    <View style={{ flex: 1 }}>
      {/* App content */}
      <NotFoundScreen />
    </View>

    //devtools plugins
    // <NavigationContainer ref={navRef}>
    //   {/* App content */}
    //   <NotFoundScreen />
    // </NavigationContainer>

    //apollo client
    // <ApolloProvider client={client}>{/* App content */}</ApolloProvider>;

    //react query
    // <QueryClientProvider client={queryClient}>{/* App content */}</QueryClientProvider>;

    //redux
    // <Provider store={store}>{/* App content */}</Provider>;
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute"
  }
});
