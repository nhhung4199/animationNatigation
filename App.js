import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Navigation} from 'react-native-navigation';


const App = props => {
  const clickkk = () => {
    Navigation.push(props.componentId, {
      component: {
        name: 'Test1',
        options: {
          animations: {
            push: {
              content: {
                alpha: {
                  from: 0,
                  to: 1,
                  duration: 300,
                },
              },
              sharedElementTransitions: [
                {
                  fromId: 'image1',
                  toId: 'image1Dest',
                  duration: 300,
                  interpolation: {type: 'spring'},
                },
              ],
            },
            pop: {
              sharedElementTransitions: [
                {
                  fromId: 'image1Dest',
                  toId: 'image1',
                  interpolation: {type: 'spring'},
                },
              ],
            },
          },
        },
      },
    });
  };

  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <TouchableOpacity onPress={clickkk}>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          nativeID={'image1'}
          resizeMode={'contain'}
          style={{width: 50, height: 50}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;
