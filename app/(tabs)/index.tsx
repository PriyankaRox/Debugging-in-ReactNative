import { Text, StyleSheet, Platform, View, SafeAreaView } from "react-native";
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
    <SafeAreaView className="flex-1 justify-center items-center bg-gray-200">
      <View className="w-100 h-100 bg-blue-500">
        {/* flex-1 flex-col justify-center items-center text-green-300 w-10 h-10 bg-blue-200 text-xl */}

        <Text className="color-red-100 text-xl ">Hai tailwind!!!!</Text>

        {/* <NotFoundScreen /> */}
        <Text>Hai pink</Text>
      </View>
    </SafeAreaView>

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
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
    // gap: 8
  }
});
