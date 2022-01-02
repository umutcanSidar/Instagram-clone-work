import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Dimensions,
  Pressable,
} from 'react-native';
import {Tab, Text, TabView, Image} from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons';

const BASE_URI = 'https://source.unsplash.com/random?sig=';

const {width, height} = Dimensions.get('screen');

const TabContent = ({name, route}) => {
  const navigation = useNavigation();
  const [index, setIndex] = useState();

  return (
    <View style={{marginTop: 10, flex: 1}}>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'black',
          height: 1,
        }}
        variant="default">
        <Tab.Item
          titleStyle={{fontSize: 12}}
          style={{backgroundColor: '#f1f1f0'}}
          icon={() => (
            <Ionicons size={25} name="grid-outline" color={'black'} />
          )}
        />
        <Tab.Item
          titleStyle={{fontSize: 12}}
          style={{backgroundColor: '#f1f1f0'}}
          icon={() => (
            <Ionicons size={25} name="play-outline" color={'black'} />
          )}
        />
        <Tab.Item
          titleStyle={{fontSize: 12}}
          style={{backgroundColor: '#f1f1f0'}}
          icon={() => (
            <Ionicons size={25} name="pricetag-outline" color={'black'} />
          )}
        />
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{flex: 1}}>
          <FlatList
            data={[...new Array(50)].map((_, i) => i.toString())}
            numColumns={3}
            keyExtractor={e => e}
            renderItem={({item}) => (
              <View style={{flex: 1}}>
                <Pressable
                  onPress={() =>
                    navigation.push('PostStack', {
                      screen: 'PostDetail',
                      params: {name: name, uri: BASE_URI + item},
                    })
                  }>
                  <Image
                    source={{uri: BASE_URI + item}}
                    containerStyle={{
                      flex: 1,
                      width: '100%',
                      aspectRatio: 1,
                    }}
                    PlaceholderContent={<ActivityIndicator />}
                  />
                </Pressable>
              </View>
            )}
          />
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <FlatList
            data={[...new Array(20)].map((_, i) => i.toString())}
            style={{width: '100%'}}
            numColumns={3}
            keyExtractor={e => e}
            renderItem={({item}) => (
              <Image
                source={{uri: BASE_URI + item}}
                containerStyle={{
                  flex: 1,
                  width: '100%',
                  aspectRatio: 1,
                  marginHorizontal: 2,
                  marginVertical: 2,
                }}
                PlaceholderContent={<ActivityIndicator />}
              />
            )}
          />
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <FlatList
            data={[...new Array(20)].map((_, i) => i.toString())}
            style={{width: '100%'}}
            numColumns={3}
            keyExtractor={e => e}
            renderItem={({item}) => (
              <Image
                source={{uri: BASE_URI + item}}
                containerStyle={{
                  flex: 1,
                  width: '100%',
                  aspectRatio: 1,
                  marginHorizontal: 2,
                  marginVertical: 2,
                }}
                PlaceholderContent={<ActivityIndicator />}
              />
            )}
          />
        </TabView.Item>
      </TabView>
    </View>
  );
};

export default TabContent;
