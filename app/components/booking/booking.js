import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';
import DateTimePicker from 'react-native-modal-datetime-picker';
//import ModalDropdown from 'react-native-modal-dropdown';

export default class Booking extends React.Component {
    state = {
        isDateTimePickerVisible: false,
      };
      _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
      _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
     
      _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
    };
   
    constructor(props){
        super(props);
        this.state = {
            parlorName:'',
            packageName: '',
            bookingDate: '',
            
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
        let parlorNames = [{
            value: 'Mahrose',
          }, {
            value: 'Rose',
          }, {
            value: 'Najlas',
          }];

          let packageNames = [{
            value: 'Threading',
          }, {
            value: 'Party makeup',
          }, {
            value: 'Bridal makeup',
          }];
        return (
            
            <KeyboardAvoidingView behaviour='padding' style={styles.wrapper}>
                
                <View style={styles.container}>
                    <Text style={styles.header}>- BOOKING -</Text>
                        
                    <Dropdown  onChangeText={ (parlorName) => this.setState({parlorName}) } label='Parlor Name'data={parlorNames }/>
                    <Dropdown onChangeText={ (packageName) => this.setState({packageName}) } label='Package Name'data={packageNames}/>
         
                    <TouchableOpacity onPress={this._showDateTimePicker}>
                        <Text style={{fontSize:18,  marginTop:20, marginBottom:20}}>Select Date and Time</Text>
                        </TouchableOpacity>
                        <DateTimePicker
                        mode="datetime"
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._hideDateTimePicker }
                        onConfirm={(bookingDate) => this.setState({bookingDate})}
                        onCancel={this._hideDateTimePicker}
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
    alert("date "+this.state.bookingDate);
    //alert("package"+this.state.packageName);
    //alert(this.state.parlorName);
    
      // fetch( 'http://192.168.1.101:3000/users',
        fetch( 'http://10.90.201.76:3000/users', 
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
