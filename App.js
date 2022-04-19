import * as React from "react"
import { Dimensions, StyleSheet, Text, View, Image } from "react-native"
import MapView, { Callout, Circle, Marker } from "react-native-maps"

export default function App(){
  const [pin, setPin] = React.useState ({ 
    latitude: 41.41333837000969,
    longitude: 2.190292455416901 
  })

  const [ pin2, setPin2 ] = React.useState ({
    latitude: 41.41226320865796, 
    longitude: 2.195613996955381
  })

  const [ pin3, setPin3 ] = React.useState ({
    latitude: 41.41040589678637, 
    longitude: 2.186878289581639
  })

  const [ pin4, setPin4 ] = React.useState ({
    latitude: 41.40371320676137, 
    longitude: 2.1896454112415866
  })
    
  return (
    <View style = { styles.container }>
      <MapView 
        style ={styles.map} 
        initialRegion={{
          latitude: 41.41333837000969,
          longitude: 2.190292455416901,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider= "google"
      >
        <Marker 
          coordinate= {pin}
          draggable = { true }
          onDragStart= {(e) => {
            console.log("Drag Start", e.nativeEvent.coordinate)
          }}
          onDragEnd= {(e) => {
            setPin ({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude
            })
          }}
        >
          <Callout tooltip>
            <View>
              <View style= {styles.bubble}>
                <Text style= {styles.name}> Escola Jesüites el Clot</Text>
                <Text>Escola on cursem DAW2</Text>
                <Image styles= {styles.image} source= {require("./assets/escola.jpg")} />
              </View>
            </View>
          </Callout>
        </Marker>
        <Marker 
          coordinate= {pin2}
          draggable = { true }
          onDragStart= {(e) => {
            console.log("Drag Start", e.nativeEvent.coordinate)
          }}
          onDragEnd= {(e) => {
            setPin2 ({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude
            })
          }}
        >
          <Callout tooltip>
            <View>
              <View style= {styles.bubble}>
                <Text style= {styles.name}>Clot de la Mel</Text>
                <Text>Poliesportiu al barri del clot</Text>
                <Image styles= {styles.image} source= {require("./assets/mel.jpg")} />
              </View>
            </View>
          </Callout>
        </Marker>
        <Marker 
          coordinate= {pin3}
          draggable = { true }
          onDragStart= {(e) => {
            console.log("Drag Start", e.nativeEvent.coordinate)
          }}
          onDragEnd= {(e) => {
            setPin3 ({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude
            })
          }}
        >
          <Callout tooltip>
          <View>
              <View style= {styles.bubble}>
                <Text style= {styles.name}>L1 Metro Clot</Text>
                <Text>Parade de metro L1 i L2</Text>
                <Image styles= {styles.image} source= {require("./assets/metro.jpg")} />
              </View>
            </View>
          </Callout>
        </Marker>
        <Marker 
          coordinate= {pin4}
          draggable = { true }
          onDragStart= {(e) => {
            console.log("Drag Start", e.nativeEvent.coordinate)
          }}
          onDragEnd= {(e) => {
            setPin4 ({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude
            })
          }}
        >
          <Callout tooltip>
          <View>
              <View style= {styles.bubble}>
                <Text style= {styles.name}>Torre Agbar</Text>
                <Text>Oficina Aigües de BCN</Text>
                <Image styles= {styles.image} source= {require("./assets/agbar.jpg")} />
              </View>
            </View>
          </Callout>
        </Marker>
        <Circle center= {pin} radius={200} /> 
      </MapView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  bubble: {
    flexDirection: 'column',
    backgroundColor: "white",
    borderWidth: 1,
    alignSelf: "center",
  },
  name: {
    fontSize: 17,
    marginBottom: 5
  },
  image: {
    width: 120,
    height: 80
  }
});
