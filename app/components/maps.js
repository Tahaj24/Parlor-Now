import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MapView } from "expo";


export default class Location extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        markers: [{
            title: 'Parlor1',
            coordinates: {
              latitude : 24.959612,
              longitude : 67.061656,
            },
        },
            {
                title: 'Parlor2',
                coordinates: {
                  latitude : 24.958717,
                  longitude : 67.065647,
                },
            },{
              title: 'Parlor3',
              coordinates: {
                  latitude : 24.84145882514575,
                  longitude : 67.02745532885866,
              },
          },
              {
                  title: 'Parlor4',
                  coordinates: {
                      latitude : 24.80045882514575,
                      longitude : 67.06745532885866,
                  },
              }]
    }
}
render(){
    return (
       <View style={styles.container}>
           <MapView
               style={styles.map}
               onRegionChangeComplete={(change)=>{console.log('data',change)}}
               initialRegion={{
                   latitude : 24.84145882514575,
                   longitude : 67.02745532885866,
                   latitudeDelta : 0.3582924745390059,
                   longitudeDelta: 0.2455376728984788
               }}
           >
               {this.state.markers.map((marker,key)=> (
                   <MapView.Marker
                       key={key+'map'}
                       coordinate={marker.coordinates}
                       title={marker.title}
                   />
               ))}
           </MapView>
       </View>
    )
}
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
},
map : {
    top : 0,
    right : 0,
    bottom : 0,
    left : 0,
    position : "absolute"

}
});







  /*  render() {
    return (
      <MapView
        style={{
          flex: 1
        }}
        initialRegion={{
          latitude: 24.9594,
          longitude: 67.0655,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    );
  }
}
*/



/*
const { width, height } = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class Location extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          initialPosition: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0,
            longitudeDelta: 0
          },
          markerPosition: {
            latitude: 0,
            longitude: 0,
          },
          markers: [{
            title: 'Parlor1',
            coordinates: {
                latitude : 24.959612,
                longitude : 67.061656,
            },
        },
            {
                title: 'Parlor2',
                coordinates: {
                    latitude : 24.958717,
                    longitude : 67.065647,
                },
            }]
        }
        
    }
    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position) => {
            //let lat = parseFloat(position.coords.latitude);
            //let long = parseFloat(position.coords.longitude);
            var lat = parseFloat(position.coords.latitude);
            var long = parseFloat(position.coords.longitude);

            
            var initialRegion = {
              latitude : lat,
              longitude : long,
              latitudeDelta : LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA
            }
            this.setState({initialPosition:initialRegion});
            this.setState({markerPosition:initialRegion});        

        },
            (error)=> alert(JSON.stringify(error)),
            {enableHighAccuracy : true , timeout: 20000, maximumAge:1000})

            
            this.watchID= navigator.geolocation.watchPosition((position)=>{
              var lat = parseFloat(position.coords.latitude)
              var long = parseFloat(position.coords.longitude)

              var lastRegion ={
                latitude: lat,
                longitude: long,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
              }
              this.setState({initialPosition: lastRegion})
              this.setState({markerPosition: lastRegion})
            })
    }
    componentWillUnmount(){
      navigator.geolocation.clearWatch(this.watchID)
    }

    render(){
        return(
            <View style={styles.container}>
              <MapView style={styles.map}
              region ={this.state.initialPosition}>
              {this.state.markers.map((marker,key)=> (
                        <MapView.Marker
                           key={key+'map'}
                           coordinate={marker.coordinates}
                           title={marker.title}
                       />
                   ))}


              { <MapView.Marker coordinate={this.state.markerPosition} >

                  <View style={styles.radius}>
                    <View style={styles.marker}>
                    </View>
                  </View>

                </MapView.Marker> }
              </MapView>
              
               

            </View>
        );
    }}


    const styles = StyleSheet.create({

        radius:{
          height: 50,
          width: 50,
          borderRadius: 50/2,
          overflow: 'hidden',
          backgroundColor: 'rgba(0,127,255,0.1)',
          borderWidth: 1,
          borderColor: 'rgba(0,112,255,0.13)',
          alignItems: 'center',
          justifyContent: 'center'

        },
        marker:{
          height: 20,
          width: 20,
          borderWidth: 3,
          borderColor: 'white',
          borderRadius: 20/2,
          overflow: 'hidden',
          backgroundColor: '#007AFF'
        },
        container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    });
*/