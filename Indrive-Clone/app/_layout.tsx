import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "./config/redux/store/Store";

export default function RootLayout() {
  return (
    <Provider store={store}>

    <Stack>
      <Stack.Screen name="index" />
    </Stack>
    </Provider>
  );
}
