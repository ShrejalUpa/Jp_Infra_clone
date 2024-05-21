import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import PushingBound from './pages/PushingBound';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Investor from './pages/Investor';
import Media from './pages/Media';
import North from './pages/North';
import Nricorner from './pages/Nricorner';
import Overview from './pages/Overview';
import RedEState from './pages/RedEState';
import Workus from './pages/Workus';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home />,
    },
    {
      path:'/projects',
      element:<Projects />,
    },
    {
      path:'/pushingbound',
      element:<PushingBound />,
      children: [
        {
          path: "",
          
        },
      ]
    },
    {
      path:'/contact',
      element:<Contact />,
    },
    {
      path:'/blogs',
      element:<Blogs />,
    },
    {
      path:'/investor',
      element:<Investor />,
    },
    {
      path:'/media',
      element:<Media/>,
    },
    {
      path:'/north',
      element:<North />,
    },
    {
      path:'/nricorner',
      element:<Nricorner />,
    },
    {
      path:'/overview',
      element:<Overview />,
    },
    {
      path:'/redestate',
      element:<RedEState />,
    },
    {
      path:'/workus',
      element:<Workus />,
    },


  ])
  return (
    <div className='w-full overflow-hidden'>
      <RouterProvider router={router} />
   </div>
  );
}

export default App;
