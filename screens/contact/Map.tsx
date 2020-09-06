import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const key ="mock";

export default function Map() {
    return (
    <WebView style={{marginTop: 20, height: 50,
    width: 200
    }}
    javaScriptEnabled={true}
    domStorageEnabled={true}
              source={{html: `<iframe style="width:100%; height:100%" src="https://www.google.com/maps/embed/v1/place?key=${key}&q=Av.+Padre+Cacique,891+-+Praia+de+Belas,Porto+Alegre+-+RS" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`}}
  			>
		</WebView>);
}