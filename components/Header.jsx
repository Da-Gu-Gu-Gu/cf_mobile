import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useNavigation } from '@react-navigation/native';

const Header = ({leftAction,rightAction}) => {
    
  return (
    <View style={styles.header}>
    <Pressable style={styles.iconWrapper} onPress={leftAction}>
      <Image source={{ uri: "https://img.icons8.com/fluency/48/000000/futurama-amy-wong.png"}} 
        style={{ width: 28, height: 28, resizeMode:'contain' }}
      />
    </Pressable>
    <Text style={styles.title}>Blah Blah</Text>
    <Pressable  style={styles.iconWrapper} onPress={rightAction}>
    <Ionicons name="md-notifications-outline" size={28} color="black" />
    </Pressable>
</View>
  )
}

export default Header


export const NormalHeader=({rightAction})=>{
    const navigation =useNavigation()
    return(
        <View style={styles.header}>
        <Pressable style={styles.iconWrapper} onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={28} color="black" />
        </Pressable>
        <Text style={styles.title}>Blah Blah</Text>
        <Pressable  style={styles.iconWrapper} onPress={rightAction}>
        <Ionicons name="ellipsis-horizontal-outline" size={28} color="black" />
        </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
    header:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        height:110,
        
      },
      title:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
      },
      iconWrapper:{
        width:40,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:10,
        shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity:  0.17,
    shadowRadius: 2.54,
    elevation: 3
      }
})