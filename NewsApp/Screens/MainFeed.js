import React, {useState, useEffect} from 'react'
import { View, Text,FlatList,TouchableOpacity,StyleSheet, } from 'react-native'
import FastImage from 'react-native-fast-image';
export default function MainFeed({route,navigation}) {
    const [news, setNews] = useState([]);
  
 
  
  function fetchnews() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e8f7a4791bf644ccb04bfaf4c518311e')
      .then((res) => res.json())
      .then((resjson) => {
        console.log('data', resjson.articles);
        setNews(resjson.articles);
      });
    }
      useEffect(() => {
        fetchnews();
      }, []);

function getitem(item){
    navigation.navigate('DetailsFeed',{
        'item':item
    });
}


    return (
        <View style={styles.container}>
                <FlatList
        data={news}
        keyExtractor={(id) => news.id}
        renderItem={({item}) => (
          <View style={{margin:1,padding:5}}>
              
            <TouchableOpacity onPress={()=>{
                getitem(item)
            }}>
            
            <FastImage
                style={{width: 380, height: 250, borderRadius:5, borderWidth:1,margin:5}}
                source={{
                  uri: item.urlToImage,
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
             
              
         
         
            </TouchableOpacity>
            <Text style={{margin:5}}>{item.title}</Text>
            
          </View>
        )}
      />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f8ff',
    },
  });