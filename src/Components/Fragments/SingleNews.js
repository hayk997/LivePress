import React from "react";
import {Card, Image} from "react-native-elements";
import {ActivityIndicator, StyleSheet, Text, View} from "react-native";
import configs from "../../configs";

export function SingleNews({item}){
    return <Card key={item.id}>
        <View style={{justifyContent: 'center',
            alignItems: 'center',}}>
            <Image
                PlaceholderContent={<ActivityIndicator />}
                style={{ width: 200, height: 200 }}
                source={{uri: configs.links.images+item.image}}
            />
        </View>


        <Card.Divider/>
        <Card.Title>{item.title}</Card.Title>
    </Card>
}
const styles = StyleSheet.create({
    user: {
        flex: 1,
        justifyContent: "center"
    },
    name: {
        flex: 1,
        justifyContent: "center"
    }
});
