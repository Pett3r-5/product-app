import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {ProductsList} from './ProductsList'
import { FlatList, Image, StyleSheet, Text, View, SafeAreaView, ScrollView  } from 'react-native';
import { WebView } from 'react-native-webview';
import Map from './Map'

const tags1 = [
    {name: "informatica"},
    {name:"excel"}
  ]

export default function ProductExpanded({route}) {

    return (
      <ScrollView nestedScrollEnabled={true} style={{flex: 1, padding: 20,
        align: 'top', backgroundColor: "white", paddingBottom: 30}}>
        <View style={{padding: 5, boxShadow: "1px 1px 3px 1px #9E9E9E", backgroundColor: "white", shadowRadius: 1, marginHorizontal: 2, marginVertical: 10, shadowOffset: { width: 5, height: 5 },
  shadowColor: '#9E9E9E', shadowOpacity: 1, elevation: 3}}>
            <Text style={{fontFamily: "sans-serif", fontSize: 17}}>
                    {route.params.org}
            </Text>
        
        </View>    
        <Text style={{fontFamily: "sans-serif", fontSize: 24,
                lineHeight: 30,
                fontWeight: 'bold', paddingVertical: 10}}>
        {route.params.name}
    </Text>
    <Text style={{fontFamily: "sans-serif", fontSize: 14, lineHeight: 20}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis, erat nec scelerisque vestibulum, neque felis sollicitudin sem, sed commodo odio ex eu risus. Ut in magna consectetur, ultrices augue non, ullamcorper quam. Curabitur tempor, ex eget sagittis dictum, ex elit auctor magna, eu consequat nisi quam eu nisl. Sed fringilla est ve
        </Text>

        <View contentContainerStyle={{minHeight: 100, flexGrow:1, padding: 20, marginVertical: 30, justifyContent: "center", backgroundColor: "#EEEEEE"}}>
            <View contentContainerStyle={{marginVertical: 5, flexGrow:1, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "left"}}>
            <View contentContainerStyle={{display: "flex", flexGrow:1, flexDirection: "row", justifyContent: "flex-start", alignItems: "left"}}>
                                          <Image resizeMode="contain" style={{height: 20 ,width: 20, marginHorizontal:2, marginRight: 2}} source={require('./images/dolarIcon.png')}/>
                                          <Text style={{marginLeft: 5, fontSize:14, lineHeight: 30, fontFamily: "sans-serif"}}>15 ago. - 16 ago.</Text>
            </View>
                                          <View contentContainerStyle={{display: "flex", flexGrow:1, flexDirection: "row", justifyContent: "flex-start", alignItems: "left"}}>
                                          <Image resizeMode="contain" style={{height: 20 ,width: 20, marginHorizontal:2, marginRight: 2}} source={require('./images/dolarIcon.png')}/>
                                          <Text style={{marginLeft: 5, fontSize:14, lineHeight: 30, fontFamily: "sans-serif"}}>15h - 16h</Text>
                                          </View>
            </View>
            
            <View contentContainerStyle={{marginVertical: 5,flexGrow:1, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "left"}}>
                                          <Image resizeMode="contain" style={{height: 20 ,width: 20, marginHorizontal:2, marginRight: 2}} source={require('./images/dolarIcon.png')}/>
                                          <Text style={{marginLeft: 5, fontSize:14, lineHeight: 30, fontFamily: "sans-serif"}}>Centro histórico, Porto Alegre</Text>
                                          
                                
            </View>
            
            <Text style={{fontSize:16, lineHeight: 30, fontFamily: "sans-serif", fontWeight: 'bold'}}>Requisitos: </Text>
            <FlatList contentContainerStyle={{width: "100%", flexGrow:1, marginTop: 10, display: "flex", flexDirection: "row", alignItems: "center"}}
                                          data={tags1}
                                          renderItem={({item}) => (<View style={{display: "flex", borderRadius: 50, backgroundColor:"white", paddingVertical: 10,
                                          paddingHorizontal: 15, margin: 5}}><Text>{item.name}</Text></View>)}/>
        </View>
        
        
        <View style={{ marginBottom: 60, display: "flex",
        alignItems: "center",
        justifyContent: "center"}}>
            <View style={{align: "center"}}>
                <Map />
            </View>
        </View>
        

    </ScrollView>
    );
  
    
  
  }
  