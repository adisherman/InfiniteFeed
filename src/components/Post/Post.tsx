import LikeButton from 'common/Components/StyledComponents/Buttons/LikeButton/LikeButton';
import {TextButton} from 'common/Components/StyledComponents/Buttons/StyledButtons';
import {
  FlexRow,
  SpacerVertical,
} from 'common/Components/StyledComponents/Containers';
import {
  Text14,
  Text14Bold,
} from 'common/Components/StyledComponents/StyledText';
import Avatar from 'components/Avatar/Avatar';
import {observer} from 'mobx-react';
import React, {useCallback, useState} from 'react';
import {
  LayoutAnimation,
  Platform,
  TextInput,
  UIManager,
  View,
} from 'react-native';
import PostModel from 'store/PostsStore/PostModel';
import Comments from './Comments/Comments';
import {PostStyles as styles} from './Post.style';
import userStore from 'store/userStore/userStore';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true); // Enable LayoutAnimation for Android
}

interface PostProps {
  post: PostModel;
}

const Post = React.memo(
  observer((props: PostProps) => {
    const {post} = props;
    const [comment, setComment] = useState('');

    const handleLike = useCallback(() => {
      post.addRemoveLike(userStore.id);
    }, [post]);

    const handleComment = () => {
      // Only add comment if it's not empty
      if (comment.trim()) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); // Animate view height grows when adding a comment
        post.addComment(comment.trim());
        setComment(''); // Clear comment input after submission
      }
    };

    return (
      <View style={styles.postContainer}>
        <FlexRow style={styles.userInfo}>
          <Text14>{post.userName}</Text14>
          <Avatar image={post.avatar} />
        </FlexRow>
        <SpacerVertical size={10} />
        <Text14Bold eng>{post.title}</Text14Bold>
        <Text14 eng>{post.content}</Text14>
        <View style={styles.postElementsContainer}>
          <FlexRow style={styles.likeButtonContainer}>
            <LikeButton
              onPress={handleLike}
              isLiked={post.likes.has(userStore.id)}
            />
            <Text14Bold>{post.likes.size}</Text14Bold>
          </FlexRow>
          <FlexRow>
            <TextInput
              style={styles.commentInput}
              value={comment}
              onChangeText={setComment}
              placeholder="הוסף את תגובתך..."
            />
            <TextButton onPress={handleComment} text="הגב" />
          </FlexRow>
          <Comments comments={post.comments} />
        </View>
      </View>
    );
  }),
);

export default Post;
