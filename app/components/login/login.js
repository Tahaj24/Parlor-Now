import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class Login extends React.Component {
   
    constructor(props) //constructor for login component
    {
        
        super(props);
        //this.login=this.login.bind(this)
        //adding states / declaring values
        this.state = {
            customerName: '',
            customerPassword: '',
        }
    }

    componentDidMount()  // to check if customer has previously logged in or not 
    {
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {

        var value = await AsyncStorage.getItem('customer');
        if(value !== null)
        {
            this.props.navigation.navigate('profile'); // customer is already loggd in so navigate to the customer area
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behaviour='padding' style={styles.wrapper}> 
                <View style={styles.container}>
                    <Text style={styles.header}>- LOGIN -</Text>

                    <TextInput
                        style={styles.textInput} placeholder='User Name'
                        onChangeText={ (customerName) => this.setState({customerName}) }
                        underlineColorAndroid='transparent'
                    />

                     <TextInput
                        style={styles.textInput} placeholder='Password'
                        onChangeText={ (customerPassword) => this.setState({customerPassword}) }
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                     />

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={this.login}>
                            <Text>log in</Text>
                        </TouchableOpacity>
    
                </View>
            </KeyboardAvoidingView>
        );
  }

  login = () => 
  {
      //  alert(this.state.customerName);

        //fetch( 'http://192.168.1.101:3000/users', // to check if the  customer exists in the database.
       fetch( 'http://10.90.201.76:3000/users',
       {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                customerName: this.state.customerName,
                customerPassword: this.state.customerPassword,
            })
        }) 

        .then((response) => response.json())
        .then ((res) => {
        
                    if   (res.success === true) {
                        AsyncStorage.setItem('customer', res.customer);
                        this.props.navigation.navigate('Profile');
                    }

                    else {

                        alert(res.message);
                    }
            })
        .done();
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
    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#01c853',
        padding: 20,
        alignItems: 'center',
    }
});
