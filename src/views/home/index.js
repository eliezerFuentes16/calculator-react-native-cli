//import liraries
import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import universidades from '../../data/universidades';

// componentes
import CardUniversity from '../../components/home/cardUniversity';
import CardUsers from '../../components/home/cardUsers';

// create a component
const Home = () => {

  const data = universidades;
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    getData()
  }, [page])

  const getData=()=>{
    fetch('https://randomapi.com/api/b41f4ee35c29f45c991256aeeb0e36a2?results=10&page='+page
    ,{
      method:'get'
    }
    )
      .then(function(response){
        // console.warn(response)
        return response.json();
      })
      .then(function(myJson) {
        let data =  users.concat(myJson.results);
        setUsers(data);
      });
  }

  const Connect = (id) => {
    setUsers(users.filter(item=>item.id !== id))
  }
  

  const RenderItem=({item, index, separators})=>{
    return(
        <CardUniversity
          item={item}
          index={index}
          data={data}
        />
    );
  }

  const RenderUser=({item, index, separators})=>{
    return(
        <CardUsers
          item={item}
          connect={(id)=>Connect(id)}
        />
    );
  }

  const onEndReached = () => {
    setPage(page + 1);
  };

  const getItemLayout = useCallback(
    (data, index) => ({
      length: 165,
      offset: 165 * index,
      index,
    }),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop:66,paddingLeft:12, width:'100%'}}>
        <Text style={[styles.font,{lineHeight:42, fontSize:hp('4.6%'), color:'black'}]}>Buscador de Facuamigos</Text>
      </View>
      <View style={{width:'100%', marginTop:16, height:40,alignItems:'center' }}>
        <TextInput
          style={[styles.font,{width:'95%', height:'100%', backgroundColor: '#FFFFFF', fontSize:hp('1.8%'), paddingLeft:15, color:'black', borderRadius:23}]}
          placeholder="¿A quién queres conocer?"
          placeholderTextColor="black"
        />
      </View>
      <View style={{ height:46,marginTop:35, justifyContent:'center'}}>
          <FlatList
              data={data}
              renderItem={RenderItem}
              keyExtractor={(item, index) => index}
              style={{ width:'100%',paddingHorizontal:12}}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={(props) => {
                return (<View style={{width:11,}} />);
              }}
          />
      </View> 
      <View style={{marginTop:25, width:'100%', marginBottom:19, marginLeft:19}}>
            <Text style={[styles.font,{fontSize:18, color:'black'}]}>Recomendado para vos</Text>
      </View>
      <View style={{flex:1,}}>
        <FlatList
              data={users}
              renderItem={RenderUser}
              keyExtractor={(item, index) => index}
              style={{height:'100%' ,width:'100%', paddingHorizontal:14}}
              // showsVerticalScrollIndicator={false}
              getItemLayout={getItemLayout}
              onEndReached={onEndReached}
              onEndReachedThreshold={0.4}
              ItemSeparatorComponent={(props) => {
                return (<View style={{height:25,}} />);
              }}
        />
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6E2FF',
    width:'100%',
  },
  font:{
    fontFamily:'ProximaNova-Regular'
  }
});

//make this component available to the app
export default Home;
