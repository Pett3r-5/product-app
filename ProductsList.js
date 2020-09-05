import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ProductsList({ navigation }) {

  return (
    <View style={styles.container}>
        <FlatList style={{width: "100%"}}
          data={[
            {title: 'Product', org: "Pão dos pobres"},
            {title: 'Product 1', org: "Pão dos pobres"},
            {title: 'Product 1', org: "Pão dos pobres"},
            {title: 'Evento 2', org: "Pão dos pobres"},
            {title: 'Evento 3', org: "Pão dos pobres"},
            {title: 'Evento 4', org: "Pão dos pobres"},
            {title: 'Evento 5', org: "Pão dos pobres"},
            {title: 'Evento 6', org: "Pão dos pobres"},
            {title: 'Evento 7', org: "Pão dos pobres"},
            {title: 'Evento 8', org: "Pão dos pobres"},
          ]}
          renderItem={({item}) => (<TouchableOpacity onPress={() =>  navigation.navigate('EventExpanded', { name: item.title, org: item.org })}>
              <View style={styles.cardContainer}>
                                      <View style={{width:"30%", marginRight:"2%"}}>
                                        <Image resizeMode="cover" style={{height: "100%" ,width: "100%"}} source={require('./images/dolarIcon.png')}/>
                                      </View>
                                      <View style={{padding: 10, backgroundColor: "#EEEEEE", width:"65%",marginLeft:"2%"}}>
                                        <Text style={styles.itemTitle}>{item.title}</Text>
                                        <View
                                          style={{
                                            borderBottomColor: 'black',
                                            borderBottomWidth: 1,
                                          }}
                                        />
                                        
                                        <View contentContainerStyle={{display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "left"}}>
                                          <Text style={{fontSize:15, lineHeight: 30, fontFamily: "sans-serif"}}>{item.org} • 654 • 7km</Text>
                              
                                        </View>

                                        <View contentContainerStyle={{marginVertical: 5, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "left"}}>
                                          <Image resizeMode="cover" style={{height: 20 ,width: 20, marginHorizontal:2, marginRight: 2}} source={require('./images/dolarIcon.png')}/>
                                          <Text style={{marginLeft: 5, fontSize:14, lineHeight: 30, fontFamily: "sans-serif"}}>15 ago. - 16 ago.</Text>
                                        </View>
                                        <FlatList style={{width: "100%", marginTop: 5, display: "flex", flexDirection: "row"}}
                                          data={tags1}
                                          renderItem={({item}) => (<View style={{borderRadius: 50, backgroundColor:"white", paddingVertical: 10,
                                          paddingHorizontal: 15, margin: 5}}><Text>{item.name}</Text></View>)}/>
                                      </View>
                                  </View>
                                </TouchableOpacity>)}
        />
      </View>
      
  );
}

const tags1 = [
  {name: "informatica"},
  {name:"excel"}
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "white"
  },
  itemTitle: {
    fontFamily: "sans-serif",
    fontSize: 17,
    lineHeight: 30,
    fontWeight: 'bold'
  },
  cardContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    padding: 10,
    marginTop: 5, 
    marginBottom: 5, 
    width: "100%"
  }
});
