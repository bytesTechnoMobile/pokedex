import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../constants';
import {HomeLanding} from '../screens';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            cardOverlayEnabled: false,
            headerShown: false,
            gestureEnabled: true,
          }}>
          <Stack.Screen name={ROUTES.HOME_LANDING} component={HomeLanding} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
