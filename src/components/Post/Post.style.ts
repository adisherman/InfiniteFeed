import {Colors} from 'common/Theme/Colors';
import {StyleSheet} from 'react-native';

export const PostStyles = StyleSheet.create({
  postContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.postBorder,
    backgroundColor: Colors.postBG,
    borderRadius: 5,
    flex: 1,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  userInfo: {
    justifyContent: 'flex-end',
    gap: 10,
  },
  postElementsContainer: {
    gap: 10,
    marginTop: 20,
  },
  likeButtonContainer: {
    justifyContent: 'flex-start',
    gap: 5,
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    borderRadius: 5,
    padding: 5,
    marginLeft: 10,
    textAlign: 'right',
  },
});
