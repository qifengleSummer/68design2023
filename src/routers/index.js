import { createHashRouter } from 'react-router-dom'
import HomePage from '@/pages/hompPage/HomePage'
import Login from '@/pages/login/Login'
import Register from '@/pages/register/Register'
import ForgetPwd from '@/pages/forgetPwd/ForgetPwd'
import HomePageDesignPartDetail from '@/pages/homePageDesignPartDetail/HomePageDesignPartDetail'
import DesignerWorksList from '@/pages/designerWorksList/DesignerWorksList'
import DesignerDetailInfo from '@/pages/designerDetailInfo/DesignerDetailInfo'
import App from '@/App.js'

const router = createHashRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/forget-pwd',
    element: <ForgetPwd />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />, // The default component to load at '/HomePage'
      },
      {
        path: '/design-part-detail',
        element: <HomePageDesignPartDetail />,
      },
      {
        path: '/designer-works-list',
        element: <DesignerWorksList />,
      },
      {
        path: '/designer-detail-info',
        element: <DesignerDetailInfo />,
      },
    ],
  },
])

export default router
