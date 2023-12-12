
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Flatcards from './components/FlatCards';
import ElevatedCards from './components/Elevated';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
export default function App() {
  return (
    <SafeAreaView>
    <ScrollView>
       <Flatcards/>
       <ElevatedCards/>
       <FancyCard></FancyCard>
       <ActionCard></ActionCard>
       <ContactList></ContactList>
       
    </ScrollView>
    
    </SafeAreaView>
  );
}
