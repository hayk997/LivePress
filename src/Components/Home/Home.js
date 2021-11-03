import React, {useEffect, useState} from "react";
import {ActivityIndicator, Text, View, StyleSheet, ScrollView} from "react-native";
import {Button, Card} from "react-native-elements";
import {fetchNews} from "../../functions";
import Image from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedImage";
import {SingleNews} from "../Fragments/SingleNews";

const Home = ({navigation}) =>{
    const [loading,setLoading] = useState(false)
    const [news,setNews] = useState([]);
    useEffect(()=>{
        setLoading(true)
        fetchNews().then(response=>{
            if(response){
                console.log(response)
                setNews(response.data)
            }

            setLoading(false)
        }).finally(()=>{
            setLoading(false)
        })
    },[])
    return <View style={[styles.container, styles.horizontal]}>
        {loading?
        <ActivityIndicator size="small" color="#0000ff" />:
            <ScrollView >
                <View style={styles.container}>


                {news.map((singleNews,i) => <SingleNews item={singleNews} key={i}/>)
                }
                </View>
            </ScrollView>}

    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

export default Home;
