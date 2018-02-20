import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class Signup extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {
            customerName: '',
            customerEmail: '',
            customerPassword: '',
            customerNumber:''
        }
    }

    componentDidMount() {
        this._loadInitialState().done();
    }
    _loadInitialState = async () => {

        var value = await AsyncStorage.getItem('customer');
        if(value !== null)
        {
            this.props.navigation.navigate('profile');
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behaviour='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.header}>- SIGNUP -</Text>

                    <TextInput
                        style={styles.textInput} placeholder='customerName'
                        onChangeText={ (customerName) => this.setState({customerName}) }
                        underlineColorAndroid='transparent'
                    />

                    <TextInput
                        style={styles.textInput} placeholder='Email id'
                        onChangeText={ (customerEmail) => this.setState({customerEmail}) }
                        underlineColorAndroid='transparent'
                    />

                     <TextInput
                        style={styles.textInput} placeholder='customerPassword'
                        onChangeText={ (customerPassword) => this.setState({customerPassword}) }
                        underlineColorAndroid='transparent'
                     />

                    
                     <TextInput
                        style={styles.textInput} placeholder='customerNumber'
                        onChangeText={ (customerNumber) => this.setState({customerNumber}) }
                        underlineColorAndroid='transparent'
                     />

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={this.signup}>
                            <Text>signup</Text>
                        </TouchableOpacity>
    
                </View>
            </KeyboardAvoidingView>
        );
  }

  signup = () => 
  {
       // alert(this.state.customerName);

        //fetch( 'http://10.90.203.131:3000/users', 
        fetch( 'http://192.168.0.102:3000/users',        
        {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                customerName: this.state.customerName,
                customerEmail: this.state.customerEmail,
                customerPassword: this.state.customerPassword,    
                customerNumber: this.state.customerNumber
            })
        }) 
        .then((response) => response.json())
        .then ((res) => {

        alert(res.message);

        if   (res.sucess === true) {
            AsyncStorage.setItem('customer', res.customer);
               this.props.navigation.navigate('Login');
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
