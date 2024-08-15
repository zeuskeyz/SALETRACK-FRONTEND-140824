import { Button, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import React from "react";
const logo = require('../assets/sales.jpg')

const HomePage = () => {
  return (
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
           <TouchableOpacity style={styles.touchables}>
                <Text style={styles.signText}>LOGIN</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.touchables}>
                <Text style={styles.signText}>SIGN-UP</Text>
           </TouchableOpacity>
            
        </View>

    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
    homeView: {
        flex:1,
        alignItems:'center',
        marginHorizontal: 10,
    },
    imageView:{
        paddingVertical: 10
    },
    welcomeView:{
        marginTop:1,
    },
    welcomeText:{
        fontWeight:'semi-bold',
        fontSize: 39,
        color:'FCAE1E',
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
        paddingHorizontal: 60,
        backgroundColor: '#0492c2'
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

