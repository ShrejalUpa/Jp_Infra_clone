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
import Northbarcelona from './componenst/PushingBound/Northbarcelona';
import Unitytowers from './componenst/PushingBound/Unitytowers';
import Solar from './componenst/PushingBound/Solar';
import Railwater from './componenst/PushingBound/Railwater';
import Wastemanagement from './componenst/PushingBound/Wastemanagement';

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
          element:<Northbarcelona />
        },
        {
          path: "unitytowers",
          element:<Unitytowers />
        },
        {
          path: "solar",
          element:<Solar />
        },
        {
          path: "railwater",
          element:<Railwater />
        },
        {
          path: "wastemanagement",
          element:<Wastemanagement />
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
