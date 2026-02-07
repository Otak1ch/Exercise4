import type { Post } from './types/post'

interface PostListProps {
  posts: Post[]
}

function PostList({ posts }: PostListProps) {
  return (
    <div className="postList">
      {posts.map(post => (
        <div key={post.id} className="postItem">
          <h2 className="postTitle">{post.title}</h2>
          <p className="postBody">{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default PostList
