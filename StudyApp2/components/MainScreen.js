import React, {Component} from 'react';
import {StyleSheet, View, Platfrom, Text} from 'react-native';
import { Icon } from 'native-base'; // 추가된 코드

export default class MainScreen extends Component {

    static navigationOptions = {
        headerLeft: <Icon name='camera' style={ { paddingLeft:10 }}/>,
        title: 'Instagram',
        headerRight: <Icon name='ios-send' style={{ paddingRight:10 }}/>,
      }

    render() {
        return (
            <View style={styles.container}>
                <Text>MainScreen TEST</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});