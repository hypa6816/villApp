import CompanyPage from '../screens/CompanyPage';
import CompanyFeed from '../screens/CompanyFeed';

import { createStackNavigator, createAppContainer } from 'react-navigation';

export default createAppContainer(createStackNavigator({
  Company_Feed: { screen: CompanyFeed },
  Company_Page: { screen : CompanyPage },

  }));