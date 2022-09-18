import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import feedsScreen from './FeedsScreen';
import CalendarScreen from './CalendarScreen';
import SearchScreen from './SearchScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchHeader from '../components/SearchHeader';

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        activeTintColor: '#009688',
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="김보현 육아 일지🥰"
        component={feedsScreen}
        options={{
          headerTitleStyle: {
            // backgroundColor: '#000000',
            fontSize: 20,
            fontWeight: 'bold',
          },
          tabBarIcon: ({color, size}) => (
            <Icon name="view-stream" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="달력"
        component={CalendarScreen}
        options={{
          headerTitleStyle: {
            // backgroundColor: '#000000',
            fontSize: 20,
            fontWeight: 'bold',
          },
          tabBarIcon: ({color, size}) => (
            <Icon name="event" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '검색',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" size={size} color={color} />
          ),
          headerTitle: () => <SearchHeader />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
