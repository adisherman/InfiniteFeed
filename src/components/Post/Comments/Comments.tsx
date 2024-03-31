import {
  Text12,
  Text14Bold,
} from 'common/Components/StyledComponents/StyledText';
import {Colors} from 'common/Theme/Colors';
import {MotiView} from 'moti';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface CommentsProps {
  comments: string[];
}

const Comments = React.memo((props: CommentsProps) => {
  const {comments} = props;

  if (comments.length === 0) return;
  return (
    <View>
      <Text14Bold>תגובות:</Text14Bold>
      {comments.map((comment: string, index: number) => {
        const lastComment = index === comments.length - 1;
        const commentStyle = lastComment ? styles.lastComment : styles.comment;

        return (
          <MotiView
            style={commentStyle}
            key={index}
            from={{top: -10, opacity: 0}}
            animate={{top: 0, opacity: 1}}
            transition={{
              type: 'spring',
              damping: 20,
              stiffness: 100,
            }}>
            <Text12>{comment}</Text12>
          </MotiView>
        );
      })}
    </View>
  );
});

export default Comments;

const styles = StyleSheet.create({
  comment: {
    marginRight: 10,
    paddingVertical: 10,
    borderBottomColor: Colors.inputBorder,
    borderBottomWidth: 0.5,
  },
  lastComment: {
    marginRight: 10,
    paddingTop: 10,
  },
});
