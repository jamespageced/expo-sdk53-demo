import React from 'react';
import { Platform, Pressable, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigationProp, TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { Home, ModalScreen } from '@app/screens';
import { navScreens } from '@app/utils';
import type { StackParamsList } from '@app/types';

const Stack = createStackNavigator<StackParamsList>();

function getStackHeaderOptions(navigation: StackNavigationProp<StackParamsList, string, string | undefined>): any {
  return {
    headerTitleAlign: 'center',
    headerStyle: { backgroundColor: '#003069' },
    headerTitle: () => (
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={{
            fontSize: 24,
            fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
            color: 'hsla(0,0%,100%,.8)',
            fontWeight: 'normal',
            textAlignVertical: 'center',
            textAlign: 'center',
            flex: 1
          }}
        >
          Demo
        </Text>
      </View>
    ),
    ...TransitionPresets.ModalFadeTransition,
    headerLeft: () => (
      <View
        style={{
          flex: 0,
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: 60,
          marginLeft: 20
        }}
      >
        <Pressable
          style={{ alignItems: 'center', padding: 5, borderRadius: 8, backgroundColor: '#ffffff' }}
          onPress={() => navigation.navigate(navScreens.modal.route)}
        >
          <Text style={{ fontSize: 12, fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial' }}>
            Open&nbsp;Modal
          </Text>
        </Pressable>
      </View>
    )
  };
}

export default function NavigationConductor() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={navScreens.home.route}
        screenOptions={({ route, navigation }) => getStackHeaderOptions(navigation)}
      >
        <Stack.Group>
          <Stack.Screen name={navScreens.home.route} component={Home} />
          <Stack.Screen
            name={navScreens.modal.route}
            component={ModalScreen}
            options={{ headerShown: false, presentation: 'transparentModal' }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
