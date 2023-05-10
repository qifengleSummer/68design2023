import './LoginModal.less'
import { useEffect, useState } from 'react'
import Login from '@/pages/login/Login.js'
import { Modal } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { SHOW_LOGIN_MODAL } from '@/store/loginStatusSlice/index.js'

const LoginModal = () => {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.loginStatusSlice)
  const [open, setOpen] = useState(isLoggedIn)
  useEffect(() => {
    setOpen(isLoggedIn)
  }, [isLoggedIn])

  const showModal = () => {
    dispatch({ type: SHOW_LOGIN_MODAL, payload: true })
  }
  const cancelModal = () => {
    dispatch({ type: SHOW_LOGIN_MODAL, payload: false })
  }

  return (
    <Modal
      centered
      wrapClassName="login-modal"
      maskClosable={false}
      open={open}
      onOk={showModal}
      onCancel={cancelModal}
      footer={null}
    >
      <Login />
    </Modal>
  )
}

export default LoginModal
