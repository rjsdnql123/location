import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../../component/Login";
import Asdf from "./ASD";
const Stack = createStackNavigator();
const Home = createStackNavigator();
// const Tab = createBottomTabNavigator();

function LoginForm() {
  return (
    <View>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Asdf" component={Asdf} />
      </Stack.Navigator>
    </View>
  );
}

export default LoginForm;
