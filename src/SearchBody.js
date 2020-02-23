import React from 'react';
import {ScrollView, Text, StyleSheet, View, Image, ImageBackground} from 'react-native';
import { ListItem, List } from 'native-base';

export default class SearchBody extends React.Component{
    render(){
        var pokemon = this.props.data;
        if(!pokemon){
            return <View/>
        }
        return(
            <ImageBackground style={styles.background} source={{uri: "https://pokemongolive.com/img/posts/raids_loading.png"}}>
            <ScrollView>
                <Text style={styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
                <View style={styles.viewStyle}>
                    <Image source={{uri: pokemon.sprites.front_default}} style={styles.img}/>
                </View>
                <View style={styles.info}>
                    <ListItem itemDivider> 
                        <Text style={{fontWeight: 'bold'}}>Size</Text>
                    </ListItem>
                    <ListItem> 
                        <Text style={{fontWeight: 'bold'}}>Weight - {pokemon.weight}</Text>
                    </ListItem>
                    <ListItem> 
                        <Text style={{fontWeight: 'bold'}}>Height - {pokemon.height}</Text>
                    </ListItem>
                    <ListItem itemDivider> 
                        <Text style={{fontWeight: 'bold'}}>Abilities</Text>
                    </ListItem>
                    <List dataArray = {pokemon.abilities} renderRow={(item)=>
                        <ListItem> 
                            <Text style={{fontWeight: 'bold'}}>{item.ability.name}</Text>
                        </ListItem>
                    }>
                    </List>
                </View>     
            </ScrollView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center',
        backgroundColor: 'white',
    },
    viewStyle : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img : {
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    info : {
        flex: 1,
        backgroundColor: 'white',
        opacity: 0.8,
    },
    background : {
        flex: 1, 
        resizeMode: 'cover', 
        height: '100%', 
        width: '100%',
    }
});
