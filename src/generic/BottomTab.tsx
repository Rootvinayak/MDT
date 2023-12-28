import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TicketScreen from '../screens/TicketScreen';
import StatusScreen from '../screens/StatusScreen';
import KnowledgeScreen from '../screens/KnowledgeScreen';
import AccountScreen from '../screens/AccountScreen';
import HomeScreen from '../screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Signin from '../screens/Signin';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({}) => ({
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={25} color="gray" />
          ),
        })}
      />
      <Tab.Screen
        name="Status"
        component={StatusScreen}
        options={({}) => ({
          tabBarIcon: () => (
            <Foundation name="graph-trend" size={25} color="gray" />
          ),
        })}
      />
      <Tab.Screen
        name="Knowledge"
        component={KnowledgeScreen}
        options={({}) => ({
          tabBarIcon: () => <Feather name="book-open" size={25} color="gray" />,
        })}
      />
      <Tab.Screen
        name="Tickets"
        component={TicketScreen}
        options={({}) => ({
          headerLeft: () => (
            <TouchableOpacity style={styles.toolBar}>
              <AntDesign style={styles.toolBar1} name="left" size={20} />
              <Text style={styles.toolBar2}>Ticket list</Text>
            </TouchableOpacity>
          ),
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="comment-alert-outline"
              size={25}
              color="gray"
            />
          ),
          headerTintColor: 'white',
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={({}) => ({
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={25}
              color="gray"
            />
          ),
        })}
      />
      {/* <Tab.Screen name='Signin' component={Signin} /> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  toolBar: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'gray',
  },
  toolBar1: {
    marginRight: 5,
    color: 'gray',
  },
  toolBar2: {
    color: 'gray',
  },
});
export default BottomTab;
