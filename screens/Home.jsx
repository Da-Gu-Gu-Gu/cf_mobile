import { View, Text,StyleSheet ,TextInput,Image,FlatList, ScrollView} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import PrimaryButton from '../components/PrimaryButton'
import { Ionicons } from '@expo/vector-icons';

const Home = ({navigation,}) => {

  const goProfile=()=>{
    navigation.push('Profile')
  }

  const goNoti=()=>{
    navigation.push('Noti')
  }

  const fl=[
    {
      id:1,
      name:'Gu Gu Gr Gr',
      img:"https://img.icons8.com/fluency/48/000000/iron-man.png"
    },
    {
      id:2,
      name:'Blha Blah',
      img:"https://img.icons8.com/fluency/48/000000/cookie-monster.png"
    },
    {
      id:3,
      name:'ZZZ',
      img:"https://img.icons8.com/fluency/48/000000/mummy.png",
    },
    {
      id:4,
      name:'Afdfe w',
      img:"https://img.icons8.com/fluency/48/000000/super-mario.png"
    },
    {
      id:5,
      name:'Gu Gu Gr Gr',
      img:"https://img.icons8.com/fluency/48/000000/iron-man.png"
    },
    {
      id:6,
      name:'Blha Blah',
      img:"https://img.icons8.com/fluency/48/000000/cookie-monster.png"
    },
    {
      id:7,
      name:'ZZZ',
      img:"https://img.icons8.com/fluency/48/000000/mummy.png",
    },
    {
      id:8,
      name:'Afdfe w',
      img:"https://img.icons8.com/fluency/48/000000/super-mario.png"
    },
    {
      id:9,
      name:'ZZZ',
      img:"https://img.icons8.com/fluency/48/000000/mummy.png",
    },
    {
      id:10,
      name:'Afdfe w',
      img:"https://img.icons8.com/fluency/48/000000/super-mario.png"
    }
  ]

  return (
    <View style={styles.wrapper}>
      {/* header */}
      <View style={styles.headerContainer}>
        <Header leftAction={goProfile} 
        rightAction={goNoti}
        />
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder="Search ..." />
          <PrimaryButton > Search </PrimaryButton>
        </View>
       </View>

    {/* share section */}
      <View style={styles.invite}>
        <Text style={styles.inviteText}>Invite Your Friends</Text>
        <PrimaryButton > Share </PrimaryButton>
      </View>

      {/* body section */}
      <View style={styles.flwrapper}>
        <Text style={styles.fl_text}>Friends List</Text>
        
        <FlatList 
        data={fl}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>{
      return (
          <View style={styles.friend} >
          <View style={styles.fl_content}>
          <Image source={{ uri:item.img}} 
          style={styles.fl_img}
      />
          <Text style={styles.fl_name}>{item.name}</Text>
          </View>
          <Pressable style={styles.friendImg}>
          <Ionicons name="ios-heart-outline" size={24} color="black" />
          </Pressable>
        </View>
          )
        }}
        />
      
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:'white'
  },
  headerContainer:{
    paddingTop:20,
    paddingBottom:10,
    backgroundColor:'#e2e2e2'
  },
  inputWrapper:{
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    height:55,
    borderRadius:10,
    marginHorizontal:20,
    backgroundColor:'white'
  },
  input:{
    flex:1,
  },
  invite:{
    margin:20,
    borderRadius:10,
    borderWidth:1,
    borderStyle:'solid',
    padding:15,
  },

  inviteText:{
    fontWeight:'900',
    fontSize:15,
    marginBottom:10
  },
  flwrapper:{
    marginHorizontal:20,
  },
  fl_text:{
    fontWeight:'700',
    fontSize:15,
    marginBottom:20
  },
  friend:{
    marginBottom:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderWidth:1,
    height:50,
  },
  list:{
    backgroundColor:'red',
    height:500,
  },
  fl_content:{
    flex:1,
    height:50,
    flexDirection:'row',
    alignItems:'center',
  },
  friendImg:{
    width:50,
    height:50,
    borderLeftWidth:1,
    alignItems:'center',
    justifyContent:'center',
  },
  fl_img:{
    width:50,
    height:50,
    padding:10,
    resizeMode:'contain',
    borderRightWidth:1
  },
  fl_name:{
    paddingLeft:10,
    height:50,
    lineHeight:50,
    borderLeftWidth:1,
  }

})

export default Home