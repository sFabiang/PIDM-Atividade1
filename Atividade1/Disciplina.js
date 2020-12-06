import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';


export default class Disciplina extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text>Disciplina: {this.props.nome}!</Text>
            </View>
        );
    } 
}
 
AppRegistry.registerComponent('PIDM', () => Disciplina);