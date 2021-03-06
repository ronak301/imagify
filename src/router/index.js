import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Actions, Scene, Router as RouterWithRedux } from 'react-native-router-flux';
import InputPage from '../pages/InputPage';
import PreviewPage from '../pages/PreviewPage';

function getSceneDimension( props, computedProps ) {
  if ( computedProps.isActive ) {
    const navBarHeight = Platform.OS !== 'ios' ? 76 : 64;
    const dimension = {
      marginTop   : computedProps.hideNavBar ? 0 : navBarHeight,
      marginBottom: computedProps.hideTabBar ? 0 : 49
    };
    return dimension;
  }
  return null;
}

function getSceneStyle( props, computedProps ) {
  const dimension = getSceneDimension( props, computedProps );
  return {
    flex: 1,
    ...dimension
  };
}

export default function Router() {
  return (
    <RouterWithRedux
      sceneStyle={styles.sceneStyle}
      navigationBarStyle={styles.navigationBar}
      getSceneStyle={getSceneStyle}
      titleStyle={styles.title}>
      <Scene key="root">
        <Scene key="inputPage" component={InputPage} hideTabBar hideNavBar/>
        <Scene key="previewPage" component={PreviewPage} title="Preview" hideTabBar hideNavBar={false}/>
      </Scene>
    </RouterWithRedux>
  );
}

const styles = StyleSheet.create( {
  sceneStyle   : {
    backgroundColor: 'white'
  },
  navigationBar: {
    backgroundColor: 'transparent',
    flex           : 1,
    flexDirection  : 'row'
  },
  transparent  : {
    backgroundColor: 'rgba(0,0,0,0.15)'
  },
  title        : {
    color: '#3A3A44',
  }
} );

