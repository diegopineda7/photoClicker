import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./screens/Home";
import CameraScreen from "./screens/CameraScreen";

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Camera: {screen: CameraScreen}
},
{
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#B22F04'
    },
    headerTitleStyle: {
      color: '#fff'
    }
  }
});

const App = createAppContainer(MainNavigator);
export default App;
