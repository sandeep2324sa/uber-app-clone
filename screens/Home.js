import { Image, StyleSheet, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';


const Home = () => {
  return (
    
        <View style={tw`p-5 pt-10`}>
            <Image 
            style={styles.image}
            source={require('../assets/logo/uber_logo.png')}/>
            <NavOptions/>
        </View> 
  )
}

export default Home;

const styles = StyleSheet.create({
    image:{
        width:100,
        height:100,
        resizeMode:'contain'
    }
})