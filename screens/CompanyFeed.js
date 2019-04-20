import React from 'react';
import { 
  Activity,  
  NewActivitiesNotification } from 'react-native-activity-feed';
import { FlatFeed } from 'react-native-activity-feed-core';

export default class CompanyFeed extends FlatFeed {
    constructor(props){
        super(props);
    }
    render() {
        this.props.feedGroup = 'company'

    }
    // static defaultProps = {
    //     styles: {},
    //     feedGroup: 'company',
    //     notify: false,
    //     Activity,
    //     Notifier: NewActivitiesNotification,
    //   };
}
