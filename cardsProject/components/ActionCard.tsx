import { Image,StyleSheet, Text, View,Linking,TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {
  function openWebsite(websiteLink:string){
    Linking.openURL(websiteLink)
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            what's new in the React Native
          </Text>
        </View>
        <Image
          
          source={{
             uri:'https://miro.medium.com/v2/1*ZjIhdWXPOt8AAQAzxrYsnw.png'
          }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={2}>
          React Native StyleSheet is crucial for styling components, offering a systematic and efficient way to define and organize styles. It enhances code readability, promotes reusability, and ensures a consistent and visually appealing design across the entire application.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
          onPress={()=>openWebsite('https://rahulmishrawrites.hashnode.dev/navigating-react-native-unleashing-stylesheets-and-flex-magic')}>
            <Text style={styles.socialLinks}>read more</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>openWebsite('https://twitter.com/rahulmishra2370')}>
            <Text style={styles.socialLinks}>follow me</Text>
          </TouchableOpacity>
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
    width:360,
    height:340,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:16,
    
  },
  elevatedCard:{
    height:400,
    backgroundColor:'#E07C24',
    elevation:3,
    shadowOffset:{
      width:1,
      height:1
    },
    shadowColor:'#333',
    shadowOpacity:0.4
  },
  headingContainer:{
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  headerText:{
    fontSize:16,
    fontWeight:'600'
  },
  cardImage:{
   height:250,
  },
  bodyContainer:{
    padding:10
  },
  footerContainer:{
    padding:8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  socialLinks:{
    fontSize:16,
    color:'#000000',
    backgroundColor:'#ffffff',
    paddingHorizontal:20,
    paddingVertical:6,
    borderRadius:6
  }
})