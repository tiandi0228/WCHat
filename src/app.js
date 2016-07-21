'use strict';
import React, {Component} from 'react';
import { AppRegistry,StyleSheet,View} from 'react-native';

import Login from './Login';

class WCHat extends Component {
    render() {
        return ( <View>
            <Login />
      </View >
        );
    }
}

AppRegistry.registerComponent('WCHat', () => WCHat);