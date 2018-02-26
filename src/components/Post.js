import React, {Component} from 'react';
import {View, StyleSheet, Text, } from 'react-native'


export default class Post extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.header}>
                    {this.props.title}
                </Text>
                <Text style={styles.author}>
                    {this.props.author}
                </Text>
                <View style={styles.division}></View>
                <Text style={styles.description}>
                    {this.props.description}
                </Text>
            </View>   
        );
    }
}

const styles =  StyleSheet.create({
    header:{
        color:'#333',
        fontSize:19,
    },
    author:{
        color:'#999',
        fontSize: 16,
    },
    description:{
        color:'#666',
        fontSize: 13,
    },
    container:{
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor:'transparent',
        backgroundColor:'#fff',
        marginVertical: 20,
        padding:20,
        marginHorizontal: 10,
        shadowColor: '#eee',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation:5,
    },
    division: {
        borderWidth: .2,
        backgroundColor:'#eee',
        marginVertical:8,
    }
});