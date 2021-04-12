import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
export default function App() {
  const a = useSelector((state) => state);
  console.log(a);
  return (
    <View>
      <Text>ㅎㅇ</Text>{" "}
    </View>
  );
}

const MainText = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10px;
  color: red;
`;
