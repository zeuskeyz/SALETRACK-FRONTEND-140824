import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
const logo = require('../assets/register.jpg')
export default Register = () => {
  return (
    <View style ={styles.homeView}>
      <Image source={logo} style={styles.imagePic}/>
      <TextInput placeholder='First Name' style={styles.inputSpace}/>
      <TextInput placeholder='Last Name' style={styles.inputSpace}/>
      <TextInput placeholder='Phone Number' style={styles.inputSpace}/>
      <TextInput placeholder='Gender' style={styles.inputSpace}/>
      <Button title='SUBMIT' />

    </View>
  )
}

const styles = StyleSheet.create({
  homeView: {
    flex:1,
    paddingHorizontal: 10,
    backgroundColor:'white'
  },

  inputSpace:{
    borderWidth: 1,
    borderColor: '#2196F3',
    marginVertical: 10,
    padding:10,
  },
  imagePic:{
    width:350,
    height:300
  }
})