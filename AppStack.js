import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './screens/HomePage';
import Login from './screens/Login';
import Register from './screens/Register';


export default AppStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomePage}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
    </Stack.Navigator>

  )
}