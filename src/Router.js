import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Detail from './screens/Detail';
import Characters from './screens/Characters';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Characters"
          component={Characters}
          options={{
            title: 'Rick and Morty Characters',
            headerStyle: {backgroundColor: '#82CD47'},
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: 'Character Detail',
            headerStyle: {backgroundColor: '#82CD47'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
