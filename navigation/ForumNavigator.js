import ForumPage from '../screens/ForumPage';
import ForumFeed from '../screens/ForumFeed';

import { createStackNavigator, createAppContainer } from 'react-navigation';

export default createAppContainer(createStackNavigator({
    Forum_Feed: { screen: ForumFeed },
    Forum_Page: { screen : ForumPage },
  }));