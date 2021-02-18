import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default class App extends React.Component {

    state = {
        textInputValue: ''
    };

    render() {
        return (
            <View style={styles.container}>
                <Text testID='welcome'>Sample project in React Native to try out Detox E2E tests</Text>
                <StatusBar style="auto"/>

                <TextInput
                    testID={'messageInput'}
                    style={styles.textInput}
                    onChangeText={text => this.setState({textInputValue:text})}
                    // value={value}
                    placeholder={'Type something here'}
                />


                <Button
                    testID={'showAlertButton'}
                    title={'Show message from input above'}
                    onPress={() => Alert.alert('You have typed: ', this.state.textInputValue)}
                    color="#841584"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        height: 40,
        width:200,
        textAlign: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:10,
        margin:40
    }
});
