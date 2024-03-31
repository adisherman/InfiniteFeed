import {useCallback, useMemo, useRef} from 'react';
import PostsStore from 'store/PostsStore/PostsStore';
import useOnMount from './useOnMount';

const useInfiniteScroll = () => {
  // Store the current scroll position
  const scrollPosition = useRef(0);

  // Bind fetchPosts to PostsStore
  const boundFetchPosts = useMemo(() => {
    return PostsStore.fetchPosts.bind(PostsStore);
  }, []);

  // Fetch posts on component mount
  useOnMount(() => {
    if (PostsStore.posts.length === 0) {
      boundFetchPosts();
    }
  });

  // Fetch posts
  const fetchPosts = useCallback(
    (isRefresh?: boolean) => {
      if (PostsStore.isLoading) return;
      boundFetchPosts(isRefresh);
    },
    [boundFetchPosts],
  );

  // Handle scroll event to refresh posts when user scrolls to the top
  /* didnt use onRefresh because it requires the loading state which will 
  cause extra two re-renders(loading start and loading end)*/

  const handleScroll = useCallback(
    (event: any) => {
      const currentScrollPosition = event.nativeEvent.contentOffset.y;
      const isScrollingUp = scrollPosition.current > currentScrollPosition;

      if (isScrollingUp && currentScrollPosition <= 0) {
        fetchPosts(true);
      }

      scrollPosition.current = currentScrollPosition;
    },
    [fetchPosts],
  );

  return {
    posts: PostsStore.posts,
    fetchPosts,
    handleScroll,
  };
};

export default useInfiniteScroll;
