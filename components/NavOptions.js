import { useNavigation } from '@react-navigation/native';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const data = [
  {
    id: '1',
    screen: 'MapScreen',
    title: 'Get a ride',
    image: require('../assets/UberX.png'),
  },
  {
    id: '2',
    screen: 'EatsScreen',
    title: 'Order Food',
    image: require('../assets/EatUber.png'),
  },
];

const NavOptions = (props) => {
    const navigation = useNavigation();
  return (
    <View style={tw``}>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=> navigation.navigate(item.screen)} style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
            <View>
                <Image
                  style={styles.image}
                  source={item.image}
                />
                <Text style={[tw`mt-2 ml-3 text-lg font-semibold`]}>{item.title}</Text>
                <Icon
                style={tw`p-2 bg-black w-10 mt-4 rounded-full`}
                name='arrowright'
                type='antdesign'
                color="white"
                />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavOptions;

const styles = StyleSheet.create({
    image:{
        width:120,
        height:120,
        resizeMode:'contain'
    }
})
