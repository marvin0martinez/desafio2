
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import App from './Sol';
import React, {useEffect, useState} from "react";
import { FlatList, Text, View } from "react-native";




const App = () => {

    const [data,setData]= useState(undefined);
    const getAPIdata = async () => {
        const url ="https://mocki.io/v1/00ba4fdc-14f4-4a59-b342-71c6666ccfb2";
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }


    useEffect(() =>{
        getAPIdata()
    }, [])



    return(
    <View>
        <Text style={{fontSize:30 }} >Planet</Text>
        {
        data.length?
        <FlatList
        data={data}
        renderItem={({item}) =><View>
            <Text style={{fontSize:30 }}>{item.id}</Text>
            </View>}

            />
            :null
        }
    </View>
    )
    
};

export default App;