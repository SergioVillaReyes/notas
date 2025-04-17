import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/home';
import AddNote from '../../screens/add-note';
import ListNotes from '../../screens/list-notes';
import About from '../../screens/about';


const RootStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="AddNote" component={AddNote} />
      <RootStack.Screen name="ListNotes" component={ListNotes} />
      <RootStack.Screen name="About" component={About} />
    </RootStack.Navigator>
  );
};

export default Stack;
