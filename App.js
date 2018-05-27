import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Expo from 'expo';
import { StackNavigator } from 'react-navigation';
//import * as firebase from 'firebase';
import Signup from './app/components/signup/signup';
import Login from './app/components/login/login';
import Profile from './app/components/profile/profile';
import Booking from './app/components/booking/booking';
import Welcome from './app/components/welcome';
import Location from './app/components/maps';
//import BookingDetail from './app/components/bookingDetail';

// Initialize Firebase

const ParouNowApp = StackNavigator({

     // Home: { screen: Welcome},
      //Signup:{screen: Signup},
      //Login: {screen: Login},
      Profile: { screen: Profile},
      Booking:{screen: Booking},
      Location:{screen: Location}
      //BookingDetail: {screen: BookingDetail}
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

