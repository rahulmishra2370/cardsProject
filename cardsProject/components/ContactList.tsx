import { Image,ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const Contacts=[
        {uid:1,
        name:'Rahul Mishra',
        status:'learning react native',
        imageUrl:'https://www.animaker.com/hub/wp-content/uploads/2023/03/025Pikachu.webp'
       },
       {uid:2,
        name:'Nitish Sharma',
        status:'learning react native',
        imageUrl:'https://i.pinimg.com/originals/5d/01/1d/5d011d8c478ec3509e7e02998c600bec.jpg'
       },
       {uid:3,
        name:'Navdeep Singh',
        status:'learning react native',
        imageUrl:'https://i.pinimg.com/originals/7b/ea/91/7bea91f2c58d266832cfd3b88e460704.jpg'
       },
       {uid:4,
        name:'Sonali Rajput',
        status:'learning react native',
        imageUrl:'https://netstorage-tuko.akamaized.net/images/0885fca01e5edb34.jpg?imwidth=900'
       },
    ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {Contacts.map(({uid,name,status,imageUrl})=>(
            <View key={uid}style={styles.userCard}>
                <Image
                source={{
                    uri:imageUrl
                }}
               style={styles.userImage}
               />
               <View>
               <Text style={styles.userName}>{name}</Text>
               <Text style={styles.userStatus}>{status}</Text>
               </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'#B433FF',
        padding:4,
        borderRadius:10
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:30,
        marginRight:14
    },
    userName:{
       fontSize:16,
       fontWeight:'600',
       color:'#000000'
    },
    userStatus:{
        fontSize:12
    }
})