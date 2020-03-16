import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const CardView = ({data}) => {
    return (
        <View style={styles.CardContainer}>
        <Image source={data.image} style={{width:"100%", height: 200, borderRadius: 4}}/>
        <Text style={styles.CardTitle}>{data.name}</Text>
        <Text style={styles.CardContent}>{data.address}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    CardContainer: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        margin: 20,
        elevation: 5
    },
    CardTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10
    },
    CardContent: {
        width: '100%',
        fontSize: 12,
        padding: 10
    },
});

export default CardView;