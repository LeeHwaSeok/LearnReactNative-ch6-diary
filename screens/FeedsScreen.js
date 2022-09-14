import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../contexts/LogContext';
import FeedList from '../components/FeedList';

function FeedsScreen() {
  const {logs} = useContext(LogContext);
  const [hidden, setHidden] = useState(false);
  const onScrolledToBottom = isBottom => {
    //현재 스크롤 상태와 hidden 상태의 변화를 감지해서 업데이트
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };
  console.log(JSON.stringify(logs, null, 2));
  return (
    <View style={styles.block}>
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedsScreen;
