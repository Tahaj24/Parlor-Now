//import React, { Component } from 'react';
import React from 'react';
import { StyleSheet, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Title, Right } from 'native-base';
import { StackNavigator } from 'react-navigation';

export default class Profile extends React.Component {

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
    return (
        <Container>
      
      <Header>
          <Left>
            <Title>Parlor List</Title>
          </Left>
          <Body>
              <Right>
            <Title ></Title>
            <Button  style = {styles.titleh}>
              <Text>Best For You</Text>
           </Button>
            </Right>
          </Body>
          
        </Header>      
        <Content>
        <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>Rose Beauty Parlor</Text>
                  <Text note></Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'http://www.shaditayari.pk/wp-content/uploads/cache/images/6/6-1217692094.png'}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                        We are providers for all types of beauty treatments, alignments and offering all types of beauty care treatments. We have an expertise of Makeup services like Bridal Makeup, Party Makeup, & much more.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text>Info</Text>
                </Button>
              </Left>
              <TouchableOpacity
                            style={styles.btn}
                            onPress={this.booking}>
                            <Text>Booking</Text>
               </TouchableOpacity>
            </CardItem>
          </Card>


          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>Najlas Beauty Parlor</Text>
                  <Text note></Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'http://cosmetics.pk/wp-content/uploads/2014/11/Najlas-Beauty-Clinic-and-Institute-Mehndi-30.jpg'}} style={{height: 200, width: 250, flex: 1}}/>
                <Text>
                     Our Knowledge, Your Beauty! We care and we will provide you nothing but the best because we understand the importance of your right to exquisiteness!
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text>Info</Text>
                </Button>
                
              </Left>
              <TouchableOpacity
                            style={styles.btn}
                            onPress={this.booking}>
                            <Text>Booking</Text>
               </TouchableOpacity>
            </CardItem>
          </Card>

        </Content>

        
      </Container>
    );
  }

  booking= () =>{
    this.props.navigation.navigate('Booking');
      
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
    titleh:{
        //marginTop: 15,
    },
    btn: {
        //alignSelf: 'stretch',
        backgroundColor: '#01c853',
        padding: 5,
        alignItems: 'center',
        
    }
});
