import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import OrphanagesMap from './pages/OrphanagesMap'

const { Navigator, Screen } = createStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
      </Navigator>
    </NavigationContainer>
  )
}