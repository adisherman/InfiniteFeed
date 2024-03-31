import Loader from 'common/Components/Loader/Loader';
import useInfiniteScroll from 'common/Hooks/UseInfiniteScroll';
import Post from 'components/Post/Post';
import MainContainer from 'containers/MainContainer';
import {observer} from 'mobx-react';
import React from 'react';
import {FlatList} from 'react-native';

const Home = observer(() => {
  const {posts, fetchPosts, handleScroll} = useInfiniteScroll();

  return (
    <MainContainer>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Post post={item} />}
        onEndReached={() => fetchPosts()} // Load more posts
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={15}
        onScroll={handleScroll} // Pull to refresh
      />
      <Loader />
    </MainContainer>
  );
});

export default Home;
