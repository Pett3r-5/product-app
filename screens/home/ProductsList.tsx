import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ProductsList({ navigation }:any) {

  return (
    <View style={styles.container}>
        <FlatList style={{width: "100%"}}
          data={[
            {title: 'Product', org: "teste"},
            {title: 'Product 0', org: "teste"},
            {title: 'Product 1', org: "teste"},
            {title: 'Product 2', org: "teste"},
            {title: 'Product 3', org: "teste"},
            {title: 'Product 4', org: "teste"},
            {title: 'Product 5', org: "teste"},
            {title: 'Product 6', org: "teste"},
            {title: 'Product 7', org: "teste"},
            {title: 'Product 8', org: "teste"},
          ]}
          renderItem={({item}) => (<TouchableOpacity onPress={() =>  navigation.navigate('ProductExpanded', { name: item.title, org: item.org })}>
              <View style={styles.cardContainer}>
                                      <View style={{width:"30%", marginRight:"2%"}}>
                                        <Image resizeMode="cover" style={{height: "100%" ,width: "100%"}} source={require('../../assets/images/dolarIcon.png')}/>
                                      </View>
                                      <View style={{padding: 10, backgroundColor: "#EEEEEE", width:"65%",marginLeft:"2%"}}>
                                        <Text style={styles.itemTitle}>{item.title}</Text>
                                        <View
                                          style={{
                                            borderBottomColor: 'black',
                                            borderBottomWidth: 1,
                                          }}
                                        />
                                        
                                        <View style={{display: "flex", flexDirection: "row"}}>
                                          <Text style={{fontSize:15, lineHeight: 30, fontFamily: "sans-serif"}}>{item.org} • 654 • 7 unidades</Text>
                              
                                        </View>

                                        <View style={{marginVertical: 5, display: "flex", flexDirection: "row"}}>
                                          <Text style={{marginLeft: 5, fontSize:14, lineHeight: 30, fontFamily: "sans-serif"}}>R$ 27,99</Text>
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
  {name: "tag1"},
  {name:"tag2"}
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
