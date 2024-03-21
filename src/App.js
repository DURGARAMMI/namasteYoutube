// import { Children } from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Body from './components/Body';
import Head from './components/Head';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import store from './utils/store';

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Body />,
  children: [
    {
      path: '/',
      element: <MainContainer />
    },
    {
      path: '/watch',
      element: <WatchPage />
    }]
}])
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        {/* <Body /> */}
        <RouterProvider router={appRouter} />

        {/* {
        Head
        Body
          -Sidebar
            --Menu Items
          -Main Container
            --Buttons List
            --Video Container
              ---Video Card
      } */}
      </div>
    </Provider>
  );
}
export default App;
