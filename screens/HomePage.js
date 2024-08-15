import { SafeAreaView, Image, StyleSheet, Text, Platform, TouchableOpacity, View } from "react-native";
import React from "react";
const logo = require('../assets/sales.jpg')

const HomePage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeBox}>
        <View style={styles.homeView}>

            <View>
                <Image style={styles.imagePic} source = {logo} />
            </View>

            <View style={styles.welcomeView}>
                <Text style={styles.welcomeText}>Hello! Welcome to </Text>
                <Text style={styles.welcomeText}>Saletrack!</Text>
            </View>
            
            <View style={styles.descriptionView}>
                <Text style={styles.descriptionText}>We connect the shop to the field, the Customer Experience Executive to the Field BA... We bring Product closer to the Customer! Remote selling has never this been Simple and Secure! </Text>
            </View>

            <View style={styles.signView}>
            <TouchableOpacity style={styles.touchables} onPress={()=> navigation.navigate('Login')}>
                    <Text style={styles.signText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchables} onPress={()=> navigation.navigate('Register')}>
                    <Text style={styles.signText}>SIGN-UP</Text>
            </TouchableOpacity>
                
            </View>

        </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
    safeBox: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 60 : 0,
        backgroundColor:'white'
    },
    homeView: {
        flex:1,
        alignItems:'center',
        marginHorizontal: 10,
        backgroundColor:'white'
    },
    imageView:{
        paddingVertical: 1,
    },
    welcomeView:{
        marginTop:1,
    },
    welcomeText:{
        fontSize: 38,
        color:'#2196F3',
    },
    descriptionView:{
        marginBottom:10
    },
    descriptionText:{
        color:'black',
        fontSize:15
    },
    signView:{
        flexDirection:'row',
        marginTop:15
    },
    touchables:{
        borderWidth: 1,
        borderColor: 'skyblue',
        paddingVertical:10,
        paddingHorizontal: 59,
        backgroundColor: '#2196F3'
    },
    signText:{
        fontSize: 16,
        color: 'white'
    },
    imageView:{
        marginVertical:10,
    },
    imagePic:{
        width:500,
        height: 430
    }
});

