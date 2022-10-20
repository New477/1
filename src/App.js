import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Main from './components/layout/Main';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';


function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children:[
      {path: '/home', element: <div><Home></Home> </div> },
    {path: 'about', element: <div><About></About></div> },
    {path: 'products', element: <div><Products></Products></div> },
      {path: 'friends', 
      loader: async () => {
        return fetch('https://jsonplaceholder.typicode.com/users')
      },
      element: <div><Friends></Friends></div>},{
        path: '/friend/:friendId',
        loader: async({params}) =>{
            return fetch(`
            https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        },
        element: <FriendDetails></FriendDetails>
      },
      {
        path: '/posts' , 
        loader: async() => {
          return fetch('https://jsonplaceholder.typicode.com/posts')
        },
        element: <Posts></Posts>
      },
      {
        path:'/post/:postId',
       loader: async({params}) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
       },
        element: <PostDetails></PostDetails>
      }

    
    ] },
    {path: '*', element: <div>Unvalued</div>}
    
  ])
  return (
    <div className="App">
    
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
