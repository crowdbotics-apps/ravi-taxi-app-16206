import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile32781Navigator from '../features/UserProfile32781/navigator';
import Maps32762Navigator from '../features/Maps32762/navigator';
import Settings32740Navigator from '../features/Settings32740/navigator';
import Settings32725Navigator from '../features/Settings32725/navigator';
import NotificationList32724Navigator from '../features/NotificationList32724/navigator';
import Maps32723Navigator from '../features/Maps32723/navigator';
import UserProfile32673Navigator from '../features/UserProfile32673/navigator';
import Maps32654Navigator from '../features/Maps32654/navigator';
import Settings32632Navigator from '../features/Settings32632/navigator';
import Settings32617Navigator from '../features/Settings32617/navigator';
import NotificationList32616Navigator from '../features/NotificationList32616/navigator';
import Maps32615Navigator from '../features/Maps32615/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile32781: { screen: UserProfile32781Navigator },
Maps32762: { screen: Maps32762Navigator },
Settings32740: { screen: Settings32740Navigator },
Settings32725: { screen: Settings32725Navigator },
NotificationList32724: { screen: NotificationList32724Navigator },
Maps32723: { screen: Maps32723Navigator },
UserProfile32673: { screen: UserProfile32673Navigator },
Maps32654: { screen: Maps32654Navigator },
Settings32632: { screen: Settings32632Navigator },
Settings32617: { screen: Settings32617Navigator },
NotificationList32616: { screen: NotificationList32616Navigator },
Maps32615: { screen: Maps32615Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
