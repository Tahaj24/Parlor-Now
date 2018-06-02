import React from 'react';
import { StyleSheet, View, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Title, Right } from 'native-base';
import { StackNavigator } from 'react-navigation';
export default class Login extends React.Component {
   
    state = {
        fontLoaded: false,
      };

    async componentWillMount() {
        await Expo.Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({ fontLoaded: true });
      }
      
   
    render() {
        return(
        <Container>
        <Content padder>

         <Image style={{backgroundColor:'#fff',alignSelf:'stretch'}} source={{uri: 'https://scontent.fkhi12-1.fna.fbcdn.net/v/t34.18173-12/26241640_1914096868605176_402852195_n.png?_nc_cat=0&oh=76529e11b49d7499e52c84b047de6682&oe=5B0D6ADB'}} style={{height: 200, width: 200 , marginLeft: 80 , marginTop:100 ,marginBottom:-100}}/>
         <Text style={{marginLeft: 10,marginTop:80 ,fontSize:15}}>Life is more beautiful when you meet the right parlour</Text>
          <Text style={{marginTop: 30, marginLeft:70, fontSize: 20}}>Welcome To ParlourNow</Text>
          <Button full rounded primary
            style={{ marginTop: 30, backgroundColor: '#01c853'  }}
            onPress={() => this.props.navigation.navigate("Login")}>
            <Text>Login</Text>
          </Button>
          <Button full rounded primary
            style={{ marginTop: 10, backgroundColor: '#01c853' }}
            onPress={() => this.props.navigation.navigate("Signup")}>
            <Text>Signup</Text>
          </Button>
        </Content>
      </Container>
      );
  }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896d3',
        paddingLeft: 40,
        paddingRight: 40,
    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold',
    },
    textInput: {
        alignSelf:'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor:'#fff',
    },
});
