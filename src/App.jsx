import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './components/Body'
import Head from './components/Head'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'
const App = () => {

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Body/>,
  children:[
    {
      path:'/',
      element:<MainContainer/>
    },
    {
      path:'watch',
      element:<WatchPage/>
    },
  ]

}])  
  return (
    <div className="">
      <Head/>   
      <RouterProvider  router={appRouter}/>
    </div>
  )
}

export default App
