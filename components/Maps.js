import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

function Maps() {
    return (
        <View style={styles.mapWrapper}>
            <Text>
                Map
            </Text>
            <MapView
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            />
            </View> 
    );
}

export default Maps;

const styles = StyleSheet.create({
    mapWrapper: {
        flex: 1,
        alignItems: 'center',

    },
})