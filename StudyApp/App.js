import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native'
import SwitchExample from "./components/SwitchExample";

const App = () => {

    var toggleSwitch1 = "";

    return (
        <View style={{flex: 1, marginTop: 50}}>
            <View>
                <SwitchExample
                    toggleSwitch1 = {this.toggleSwitch1}
                    switch1Value = {this.state.switch1Value}/>
            </View>
            {/*<StatusBar style={{height: 50}} barStyle = "default" hidden = {false} backgroundColor = "#00BCD4" translucent = {false}/>
            <Text>test</Text>*/}
        </View>
    )
}
export default App