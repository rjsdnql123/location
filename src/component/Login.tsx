import React from "react";
import { Text, View, Button } from "react-native";

function Login({ navigation }: any) {
  return (
    <View>
      <Text>gsssd</Text>
      <Button title="gogo" onPress={() => navigation.navigate("Asdf")}>
        asdf
      </Button>
    </View>
  );
}

export default Login;
