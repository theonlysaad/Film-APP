import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FilmDetail from '../Containers/FilmDetail';
import FilmItem from '../Containers/FimItem';



const Stack = createNativeStackNavigator();

const MyStack = () => {
    return(
        <NavigationContainer>   
            <Stack.Navigator>
                <Stack.Screen name = "Home" component={FilmItem}/>
                <Stack.Screen name = "Search" component={FilmDetail}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack;