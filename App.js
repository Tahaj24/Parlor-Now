import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Expo from 'expo';
import { StackNavigator } from 'react-navigation';

import Signup from './app/components/signup/signup';
import Login from './app/components/login/login';
import Profile from './app/components/profile/profile';
import Booking from './app/components/booking/booking';

const ParouNowApp = StackNavigator({
      Home: { screen: Login},
      Login: {screen: Login},
      Profile: { screen: Profile},
      Booking:{screen: Booking}
},  
  
  {
        navigationOptions: {
          header: false,
        }
  
  });
export default class App extends React.Component {
  render() {
    return <ParouNowApp />;
  }
}

