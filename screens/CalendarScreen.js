import React, {useEffect, useRef, useState} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';

function SlideLeftAndRight() {
  //value값으로 숨길지 말지 정하는 것임
  const animation = useRef(new Animated.Value(0)).current;
  const [enabled, setEnabled] = useState(false);

  //useNativeDriver : true => layout에 영향이 없음 / false => layout에 영향을 줌
  useEffect(() => {
    Animated.timing(animation, {
      toValue: enabled ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [enabled, animation]);

  return (
    <View>
      <Animated.View
        style={[
          styles.rectangle,
          {
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 150],
                }),
              },
            ],
            opacity: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}
      />
      <Button
        title="Toggle"
        onPress={() => {
          setEnabled(!enabled);
        }}
      />
    </View>
  );
}

function CalendarScreen() {
  return (
    <View style={styles.block}>
      <SlideLeftAndRight />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {},
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
});

export default CalendarScreen;
