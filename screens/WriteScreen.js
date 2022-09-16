import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteEditor from '../components/WriteEditor';
import WriteHeader from '../components/WriteHeader';
import LogContext from '../contexts/LogContext';

function WriteScreen({route}) {
  // 데이터 수정을 위해 route 매개변수를 log로 받아옴 => FeedListItem(modify)이하 확인
  const log = route.params?.log;

  const [title, setTitle] = useState(log?.title ?? '');
  const [body, setBody] = useState(log?.body ?? '');
  const navigation = useNavigation();

  const [date, setDate] = useState(log ? new Date(log.date) : new Date());

  //Context에서 crud데이터를 받아오겠다는 얘기
  const {onCreate, onModify, onRemove} = useContext(LogContext);

  //Save 버튼을 눌렸을 때, 생성인지 저장인지 확인 후 그에 맞게 끔 기능 수행을 하게 함.
  const onSave = () => {
    if (log) {
      onModify({
        id: log.id,
        date: date.toISOString(),
        title,
        body,
      });
    } else {
      onCreate({
        title,
        body,
        //toISOString으로 문자로 받아옴
        date: date.toISOString(),
      });
    }
    navigation.pop();
  };

  //Delete
  const onAskRemove = () => {
    Alert.alert(
      '삭제',
      '정말로 삭제 하시겠어요?',
      [
        {
          text: '삭제',
          onPress: () => {
            onRemove(log?.id);
            navigation.pop();
          },
          style: 'destructive',
        },
        {
          text: '취소',
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );
  };
  return (
    <SafeAreaView style={styles.block}>
      <WriteHeader
        onSave={onSave}
        onAskRemove={onAskRemove}
        //log값이 유효하면 true, null, undefined면 false
        isEditing={!!log}
        date={date}
        onChangeDate={setDate}
      />
      <WriteEditor
        title={title}
        body={body}
        onChangeTitle={setTitle}
        onChangeBody={setBody}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, backgroundColor: 'white'},
});

export default WriteScreen;
