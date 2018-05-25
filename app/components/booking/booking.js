import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
//import ModalDropdown from 'react-native-modal-dropdown';

export default class Booking extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {
            parlorName:'',
            packageName: '',
            bookingDate: '',
            bookingTime: ''
        }
    }

    componentDidMount() {
        this._loadInitialState().done();
    }
    _loadInitialState = async () => {

        var value = await AsyncStorage.setItem('booking');
        if(value !== null)
        {
            this.props.navigation.navigate('profile');
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behaviour='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.header}>- BOOKING -</Text>
                        
                            <TextInput
                                style={styles.textInput} placeholder='parlorName'
                                onChangeText={ (parlorName) => this.setState({parlorName}) }
                                underlineColorAndroid='transparent'
                             />
                    
                    <TextInput
                                style={styles.textInput} placeholder='packageName'
                                onChangeText={ (packageName) => this.setState({packageName}) }
                                underlineColorAndroid='transparent'
                            />

                     <TextInput
                        style={styles.textInput} placeholder='YYYY/MM/DD'
                        onChangeText={ (bookingDate) => this.setState({bookingDate}) }
                        underlineColorAndroid='transparent'
                     />

                    
                     <TextInput
                        style={styles.textInput} placeholder='bookingTime'
                        onChangeText={ (bookingTime) => this.setState({bookingTime}) }
                        underlineColorAndroid='transparent'
                     />

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={this.confirm}>
                            <Text>confirm</Text>
                        </TouchableOpacity>
    
                </View>
            </KeyboardAvoidingView>
        );
  }

  confirm = () => 
  {
    //alert(this.state.parlorName);
    
      // fetch( 'http://192.168.0.104:3000/users',
        fetch( 'http://10.20.203.228:3000/users', 
       //fetch( 'http://10.90.203.131:3000/users',  
       {
            

            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                parlorName: this.state.parlorName,
                packageName: this.state.packageName,
                bookingDate: this.state.bookingDate,
                bookingTime: this.state.bookingTime,
               // alert(parlorName);        
            })
            
        })
        
        .then((response) => response.json())
        .then ((res) => {

        alert(res.message);

        if   (res.sucess === true) {
            AsyncStorage.getItem('booking', res.booking);
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
