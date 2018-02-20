import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class Profile extends React.Component {
   
    
    render() {
    return (
        <KeyboardAvoidingView behaviour='padding' style={styles.wrapper}> 
                <View style={styles.container}>
                    <Text style={styles.header}>- PROFILE -</Text>

                    

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={this.booking}>
                            <Text>Booking</Text>
                        </TouchableOpacity>
    
                </View>
            </KeyboardAvoidingView>
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
    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#01c853',
        padding: 20,
        alignItems: 'center',
    }
});
