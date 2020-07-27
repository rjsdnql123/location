import React, { Component } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View, Text } from 'react-native';
import { AsyncStorage } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../containers/Login';
import SignUp from './SignUp';
import Main from '../containers/Main';
import {setLogin} from '../action/index'
import { Auth } from '../reducer/type';
import axios from 'axios'

function Loding() {
    return (
        <View>
            <Text>기다려주세요</Text>
        </View>
    )
}
export default Loding