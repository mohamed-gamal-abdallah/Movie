
import { Outlet, RouterProvider, createBrowserRouter,createHashRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Details from './components/detailes/Details';
import Movies from './components/Movies/Movies';
import Tvshow from './components/TvShow/Tvshow';
import Persons from './components/Persons/Persons';
import Layout from './Layout/Layout';
import NotFound from './components/NotFound/NotFound';

let routers=createHashRouter([
  {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'details/:kind/:id',element:<Details/>},
      {path:'movies',element:<Movies/>},
      {path:'tvshow',element:<Tvshow/>},
      {path:'persons',element:<Persons/>},
      {path:'*',element:<NotFound/>}
  ]}

])

function App() {
  return (
   <>
   <RouterProvider router={routers}>
 
   </RouterProvider>
   
   </>
  );
}

export default App;
