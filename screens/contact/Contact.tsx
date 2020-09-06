import React from 'react';
import { View } from 'react-native';
import Map from './Map'


export default function Contact() {
    return (
    <View style={{ marginBottom: 60, display: "flex",
    alignItems: "center",
    justifyContent: "center"}}>
        <View >
            <Map />
        </View>
    </View>
    )
  
  
}