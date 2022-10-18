import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';
import Dettaglio from './src/pages/dettaglio';
import Elenco from './src/pages/elenco';
import Home from './src/pages/home';
import Form from './src/pages/form';
import { IPokemon } from './src/types/pokemon';
import ElencoTab from './src/components/elencoTab';

export type TabParamList = {
  Home: undefined;
  ElencoTab: undefined;
  Form: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

<ElencoTab />

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          unmountOnBlur: true,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <Text>🏠</Text>,
          }}
        />
        <Tab.Screen
          name="Form"
          component={Form}
          options={{
            tabBarIcon: () => <Text>🔨</Text>,
          }}
        />
        <Tab.Screen
          name="ElencoTab"
          component={ElencoTab}
          options={{
            tabBarIcon: () => <Text>🧰</Text>,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
