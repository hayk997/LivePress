import React,{useEffect} from "react";
import {Text, View} from "react-native";


export default function Show(){
    useEffect(()=>{
        console.log(984545)
    },[])
    return <View>
        <Text>Show</Text>
        <Text>Show</Text>
    </View>
}
