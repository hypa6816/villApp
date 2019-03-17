import CompanyPage from '../screens/CompanyPage';
import CompanyList from '../components/CompanyList';

import { createStackNavigator, createAppContainer } from 'react-navigation';

export default createAppContainer(createStackNavigator({
    Company_List: { screen: CompanyList },
    Company_Page: { screen : CompanyPage },
  }));