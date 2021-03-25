import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Form, H3, Header, Icon, Picker} from "native-base";

export default class App extends React.Component {

    state = {
        textInputValue: '',
        pickerSelectedKey: 'key0'
    };

    onPickerChange = (newSelectedKey) => {
        this.setState({pickerSelectedKey: newSelectedKey})
    };

    render() {

        return (
            <Container testID={'tidContainer'}>
                <Header testID={'tidHeader'}/>
                <Content testID={'tidContent'}>
                    <H3 testID='welcome' style={styles.welcomeStyle}>
                        Sample project in React Native to try out Detox E2E tests,
                        using native-base framework
                    </H3>

                    <Form testID={'tidForm'}>
                        <Picker
                            testID={'tidPicker'}
                            style={styles.pickerStyle}
                            itemStyle={styles.itemStyle}
                            mode="dropdown"
                            selectedValue={this.state.pickerSelectedKey}
                            onValueChange={this.onPickerChange}
                            iosIcon={
                                <Icon name="chevron-down-outline"
                                      style={{color: 'rgba(255,255,255,0.8)', lineHeight: 20}}/>
                            }
                        >
                            <Picker.Item label="Wallet" value="key0" testID={'tidPickerItem0'}/>
                            <Picker.Item label="ATM Card" value="key1" testID={'tidPickerItem1'}/>
                            <Picker.Item label="Debit Card" value="key2" testID={'tidPickerItem2'}/>
                            <Picker.Item label="Credit Card" value="key3" testID={'tidPickerItem3'}/>
                            <Picker.Item label="Net Banking" value="key4" testID={'tidPickerItem4'}/>
                        </Picker>
                    </Form>
                </Content>
            </Container>
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
        width: 200,
        textAlign: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        margin: 40
    },
    pickerStyle: {
        width: '100%',
        backgroundColor: 'gray'
    },
    itemStyle: {
        marginLeft: 0,
        paddingLeft: 15,
    },
    welcomeStyle: {
        margin: 30
    }
});
