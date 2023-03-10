import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from "react-native-vector-icons/Ionicons"
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../assets/Colors';
import FeedScreen from '../../screens/StudentFlow/FeedScreen';
import AboutScreen from '../../screens/StudentFlow/AboutScreen';
import SupportScreen from '../../screens/StudentFlow/SupportScreen';
import ProfileScreen from '../../screens/StudentFlow/ProfileScreen';
import SettingsScreen from '../../screens/StudentFlow/SettingsScreen';
import MarketPlace from '../../screens/StudentFlow/MarketPlace/MarketPlace';
import Bubble from '../../components/IconBubble';
import SessionConfirmationMain from '../../screens/StudentFlow/SessionConfirmation/SessionMain';
import ClassesMainScreen from '../../screens/StudentFlow/ClassScreen';
import ChatScreen from '../../screens/StudentFlow/Chat/ChatScreen';
import TutorApplicationFlowStack from './TeacherApplicationFlow';
import InboxScreenRunAI from '../../screens/StudentFlow/RunAi/RunAiInbox';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BAPScreen from '../../screens/StudentFlow/Bap/BapScreen';
import UserList from '../../screens/StudentFlow/DummyScreenApi/DummyScreen';


const Drawer = createDrawerNavigator();

interface Props {
  navigation: any;
}
const size = hp('2.5');
const color = Colors.orange;
const Root: React.FC<Props> = ({ navigation }) => {
  return (
    <Drawer.Navigator

      initialRouteName='Feed'
      screenOptions={({ navigation }) => ({
        headerLeft: () =>
          <Entypo
            name='menu'
            size={hp('3')}
            color={color}
            style={{ marginLeft: 10 }}
            onPress={navigation.toggleDrawer}
          />,
        drawerActiveBackgroundColor: Colors.lightorange,
        drawerActiveTintColor: Colors.black


      }

      )
      }
    >
      <Drawer.Screen
        name='Feed'
        component={FeedScreen}
        options={{

          drawerIcon: ({ focused, size }) => (
            <AntDesign
              name="home"
              size={size}
              color={Colors.black}
            />
          ),
          headerTitle: () =>
            <Image
              source={require('./../../../assets/logo.jpg')}
              style={{
                height: hp('5'),
                width: wp('22'),
                alignSelf: 'center',
                resizeMode: 'contain'
              }}
            />,
          headerTitleAlign: 'center',
          headerRight: () =>
            [<View style={styles.icon} >
              <TouchableOpacity
                onPress={() => navigation.navigate('Notification')}>
                <Bubble
                  icon={
                    <FontAwesome
                      name="bell-o"
                      size={size}
                      color={color}
                    />} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Search')}>
                <Bubble icon=
                  {<Ionicons
                    name="search-outline"
                    size={size}
                    color={color} />} />
              </TouchableOpacity>
            </View>
            ]
        }} />
      <Drawer.Screen
        name='MarketPlace'
        component={MarketPlace}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="library"
              size={size}
              color={Colors.black}
            />
          ),
          headerTitle: () =>
            <Image
              source={require('./../../../assets/logo.jpg')}
              style=
              {{
                height: hp('5%'),
                width: wp('20%'),
                alignSelf: 'center'
              }}
              resizeMode='contain'
            />,
          headerTitleAlign: 'center',
          headerRight: () =>
            [<View style={styles.icon} >
              <TouchableOpacity
                onPress={() => navigation.navigate('Notification')}>
                <Bubble
                  icon={
                    <FontAwesome
                      name="bell-o"
                      size={size}
                      color={color}
                    />} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Search')}>
                <Bubble icon=
                  {<Ionicons
                    name="search-outline"
                    size={size}
                    color={color} />} />
              </TouchableOpacity>
            </View>
            ]
        }} />
      <Drawer.Screen
        name='InboxScreenRunAI'
        component={InboxScreenRunAI}
        options={{
          headerShown: (false),
          drawerLabel: 'Ruu AI',
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons name="bird" size={size} color="black" />
          )
        }} />
      <Drawer.Screen
        name='BAPScreen'
        component={BAPScreen}
        options={{
          headerShown: (false),
          
          drawerLabel: 'Brand Ambassador Program',
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="notification-important" size={size} color="black" />
          )
        }} />
      {/* <Drawer.Screen
        name='UserList'
        component={UserList}
        options={{
          headerShown: (false),
          drawerLabel: 'UserList',
          drawerIcon: ({ focused, size }) => (
            <AntDesign
              name="user"
              size={size}
              color={Colors.black}
            />
          )
        }} /> */}
      <Drawer.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          headerShown: (false),
          drawerIcon: ({ focused, size }) => (
            <AntDesign
              name="user"
              size={size}
              color={Colors.black}
            />
          )
        }} />
      <Drawer.Screen
        name='TutorApplicationFlowStack'
        component={TutorApplicationFlowStack}
        options={{
          headerShown: (false),
          drawerLabel: 'Become A Tutor',
          drawerIcon: ({ focused, size }) => (
            <FontAwesome name="graduation-cap" size={size} color="black" />
          )
        }} />
      <Drawer.Screen
        name='ChatScreen'
        component={ChatScreen}
        options={{
          headerShown: (false),
          drawerLabel: 'Chat',
          drawerIcon: ({ focused, size }) => (
            <Ionicons name="chatbubble" size={size} color="black" />
          )
        }} />
      <Drawer.Screen
        name='ClassesMainScreen'
        component={ClassesMainScreen}
        options={{
          headerShown: (false),
          drawerLabel: 'Classes',
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="schedule" size={size} color="black" />
          )
        }} />
      <Drawer.Screen
        name='SessionConfirmationMain'
        component={SessionConfirmationMain}
        options={{
          headerShown: (false),
          drawerLabel: 'Session Confirmation',
          drawerIcon: ({ focused, size }) => (
            <AntDesign
              name="user"
              size={size}
              color={Colors.black}
            />
          )
        }} />
      <Drawer.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          headerShown: (false),
          drawerIcon: ({ focused, size }) => (
            <Fontisto
              name="player-settings"
              size={size}
              color={Colors.black}
            />
          )
        }} />
      <Drawer.Screen
        name='About'
        component={AboutScreen}
        options={{
          headerShown: (false),
          drawerIcon: ({ focused, size }) => (
            <AntDesign
              name="user"
              size={size}
              color={Colors.black}
            />
          )
        }} />
      <Drawer.Screen
        name='Support'
        component={SupportScreen}
        options={{
          headerShown: (false),
          drawerIcon: ({ focused, size }) => (
            <FontAwesome
              name="warning"
              size={size}
              color={Colors.black}
            />
          )
        }} />
    </Drawer.Navigator>
  )
}
const styles = StyleSheet.create({
  icon: {
    flexDirection: 'row',
    marginRight:hp(1)
  },
})

export default Root