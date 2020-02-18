import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default class PokeLoader extends React.Component{
    render(){
        return(
            <View>
                <Image style={styles.img} source={{uri: "https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif"}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    img: {
        height: 400,
        width: 400,
        justifyContent: 'center',
    },
});