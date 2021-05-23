import React , {useEffect, useState}from 'react'
import {  View,
    Text,
    TouchableOpacity,
    Linking,
    TextInput,
    StyleSheet, } from 'react-native'
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/FontAwesome';
import Share from 'react-native-share';
export default function DetailsFeed({route, navigation}) {
    const {item} = route.params;
    function sharenews(item){
       // alert(item.url);
    
const shareOptions = {
    title: item.title,
    url: item.url,
    
};
Share.open(shareOptions)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    err && console.log(err);
  });
     

    }
    return (
        <View style={styles.main}>
            <FastImage
                style={{width: 380, height: 250, borderRadius:5, borderWidth:1,margin:5}}
                source={{
                  uri: item.urlToImage,
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />

              <TouchableOpacity style={styles.save}>
                  <Text style={{textAlign:"center",justifyContent:"center",alignContent:"center",padding:1,fontSize:16}}>Save Image</Text>
              </TouchableOpacity>
              <Text style={{margin:5}}>{item.title}</Text>
              <View style={styles.row}>
              <Text>{item.author}</Text>
             <TouchableOpacity onPress={()=>{
                 sharenews(item)
             }}>
             <Icon size={24} color="black" name="share" />
             </TouchableOpacity>
              <Text>{item.publishedAt}</Text>
              </View>

              <Text style={{margin:5}}>{item.content}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: '#f0f8ff',
      
     
    },
    row
    :{
        direction:"rtl",
        flexDirection:"row",justifyContent:"space-between",margin:5
    },save:{width: 150,
        alignContent:"center",height:30,marginTop:10,marginLeft:120,marginRight:120,marginBottom:10,backgroundColor:"#F3F2F2",textAlign:"center"



    }
  });