import { useEffect, useState } from 'react'
import api from './api'
import type { Post } from './types/post'
import SearchInput from './search'
import PostList from './postlist'
import './App.css'

function App() {
  const [posts, setPosts] = useState<Post[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    api
      .get<Post[]>('/posts', {
        params: search ? { title_like: search } : {},
      })
      .then(response => {
        setPosts(response.data)
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [search])

  return (
    <div className="app">
      <div className="title">Список постов</div>

      <SearchInput value={search} onChange={setSearch} />

      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  )
}

export default App
