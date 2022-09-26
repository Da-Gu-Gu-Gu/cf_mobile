import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

const PrimaryButton = ({children}) => {
  return (
    <Pressable style={{alignItems:'flex-start'}}>
          <Text style={[styles.shareText,styles.search]}>{children}</Text>
        </Pressable>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    search:{
        backgroundColor:'black',
        paddingHorizontal:25,
        paddingBottom:10,
        paddingTop:8,
        borderRadius:5,
      },
      shareText:{
        color:'white'
      },
})