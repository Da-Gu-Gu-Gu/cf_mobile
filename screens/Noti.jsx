import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NormalHeader } from '../components/Header'

const Noti = () => {
    const rightAction=()=>{
        console.log('heelo')
    }
  return (
    <View>
        <NormalHeader rightAction={rightAction} />
    </View>
  )
}

export default Noti

const styles = StyleSheet.create({})