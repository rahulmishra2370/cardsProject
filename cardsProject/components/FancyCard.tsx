import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText} >Trending Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image
          
         source={{
            uri:'https://cdn.audleytravel.com/700/501/79/1328411-hawa-mahal-jaipur.jpg'
         }}
       style={styles.cardImage}
       />
       
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>JAIPUR</Text>
            <Text style={styles.cardLable}>pink city,Jaipur</Text>
            <Text style={styles.cardDiscription}>Jaipur, the Pink City of India, captivates with its historic forts, ornate palaces, and vibrant markets. Known for its rich culture and Rajput architecture, Jaipur is a mesmerizing blend of tradition and modernity.</Text>
            <Text style={styles.cardFooter}>10 mins away</Text>
        </View>
      </View>


      <View style={[styles.card,styles.cardElevated]}>
        <Image
          
         source={{
            uri:'https://t3.ftcdn.net/jpg/01/30/12/98/360_F_130129868_8hyrv8S3yTZvMdUSAYxADf8Ta8RPgojf.jpg'
         }}
       style={styles.cardImage}
       />
       
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>UDAIPUR</Text>
            <Text style={styles.cardLable}>city of lakes,Udaipur</Text>
            <Text style={styles.cardDiscription}>Udaipur, the City of Lakes in India, enchants with its romantic ambiance, majestic palaces, and serene lakes. Renowned for its royal heritage, Udaipur is a timeless gem in Rajasthan.</Text>
            <Text style={styles.cardFooter}>10 mins away</Text>
        </View>
      </View>


      <View style={[styles.card,styles.cardElevated]}>
        <Image
          
         source={{
            uri:'https://www.trawell.in/admin/images/upload/472763834Chandigarh_Sukhna_Lake_Main.jpg'
         }}
       style={styles.cardImage}
       />
       
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>SUKHNA LAKE</Text>
            <Text style={styles.cardLable}>city beautifull,Chandigarh</Text>
            <Text style={styles.cardDiscription}>Chandigarh, a modern city in India, is renowned for its well-planned architecture, lush greenery, and vibrant cultural scene. As a union territory, it serves as the capital of Haryana and Punjab.</Text>
            <Text style={styles.cardFooter}>10 mins away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        height:360,
        width:350,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    cardElevated:{
        backgroundColor:'#FFFFFF',
      elevation:3,
      shadowOffset:{
        width:1,
        height:1
      }
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6

    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4,
        textAlign:'center'
    },
    cardLable:{
        color:'#000000',
        fontSize:14,
        marginBottom:6,
        textAlign:'center'
    },
    cardDiscription:{
        color:'#242B2E',
        fontSize:12,
        marginTop:6,
        marginBottom:12,
        flexShrink:1
    },
    cardFooter:{}
})