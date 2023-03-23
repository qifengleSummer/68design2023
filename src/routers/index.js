import { createHashRouter } from 'react-router-dom'
import HomePage from '@/pages/hompPage/HomePage'
import Login from '@/pages/login/Login'
import Register from '@/pages/register/Register'
import ForgetPwd from '@/pages/forgetPwd/ForgetPwd'
import DepartmentDetailMarket from '@/pages/departmentDetailMarket/DepartmentDetailMarket'
import DesignerWorksList from '@/pages/designerWorksList/DesignerWorksList'
import DesignerDetailInfo from '@/pages/designerDetailInfo/DesignerDetailInfo'
import TalentList from '@/pages/talentList/TalentList'
import WorksList from '@/pages/worksList/WorksList'
import DesignerPersonalSpace from '@/pages/designerPersonalSpace/DesignerPersonalSpace'
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
        element: <DepartmentDetailMarket />,
      },
      {
        path: '/designer-works-list',
        element: <DesignerWorksList />,
      },
      {
        path: '/designer-detail-info',
        element: <DesignerDetailInfo />,
      },
      {
        path: '/talent-list',
        element: <TalentList />,
      },
      {
        path: '/works-list',
        element: <WorksList />,
      },
      {
        path: '/designer-personal-space',
        element: <DesignerPersonalSpace />,
      },
    ],
  },
])

export default router
