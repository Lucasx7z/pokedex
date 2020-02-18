import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Header,Item,Icon,Input,Button} from 'native-base';
import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';
import axios from 'axios';

export default class Search extends React.Component{
    state = {
        pokeSearch: "",
        onCall: true,
        data: {},
    }
    searchPoke = () => {
        this.setState({onCall: true});
        var self = this;
        axios.get("http://pokeapi.co/api/v2/pokemon/"+this.state.pokeSearch.toLowerCase()) //Usando a biblioteca axios eu consigo capturar o json da api
        .then(function(response){
            console.log(response.data)
            self.setState({data: response.data});
            self.setState({onCall: false});
        })
        .catch(function(error){
            console.log(error);
        });
    }
    renderBody = () => {
        if(this.state.onCall){
            return(
                <PokeLoader/>
            )
        }else{
            return(
                <SearchBody data={this.state.data}/>
            )
        }
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" onPress={this.searchPoke}/>
                        <Input value={this.state.pokeSearch} placeholder="Search Pokemon" onChangeText={(pokeSearch) => this.setState({pokeSearch})}/>
                    </Item>               
                </Header>
                {this.renderBody()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
});
