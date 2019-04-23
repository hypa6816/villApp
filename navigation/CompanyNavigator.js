// import CompanyPage from '../screens/CompanyPage';
import CompanyFeed from '../screens/CompanyFeed';
import CompanySinglePost from '../screens/CompanySinglePost';

import { createStackNavigator, createAppContainer } from 'react-navigation';

export default createAppContainer(createStackNavigator({
  Company_Feed: { screen: CompanyFeed },
  Company_Single_Post: { screen:  CompanySinglePost},

  }));