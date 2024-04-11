import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MoovieDetail from './views/MoovieDetails/MoovieDetail'
import useLogic from './useLogic'
import Home from './views/Home/Home'

function App() {
  const {
    error: movieError,
    loading: movieLoading,
    imageSource,
    imageTvSource
  } = useLogic()

  if (movieLoading) return <div>Loading...</div>
  if (movieError) return <div>Error:PAGE EMPTY</div>

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Home imageSource={imageSource} imageTvSource={imageTvSource} />
          }
        ></Route>
        <Route path='/:type/:id' element={<MoovieDetail />}></Route>
      </Routes>
    </Router>
  )
}

export default App
