import { useState } from "react"
import { useAuth } from "../context/authContext"
import { useForm } from "react-hook-form"
import { checkCodeConfirmationUser } from "../services/API_user/user.service"


export const CheckCode = () => {
  const [res, setRes] = useState({})
  const [send, setSend] = useState(false)
  const [checkOk, setCheckOk] = useState(false)
  const [reloadPageError, setReloadPageError] = useState(false)
  const [deleteUser, setDeleteUser] = useState(false)
  const { allUser, userLogin, setUser, user } = useAuth()
  const { register, handleSubmit } = useForm()

  /**
   * Función que gestiona los submit de los formularios
   */
  const forSubmit = async (formData) => {
    const userLocal = localStorage.getItem("user")

    if (userLocal == null) {
      // Este usuario viene del registro por lo que no se ha logueado
      const customFormData = {
        email: allUser.data.user.email,
        confirmationCode: parseInt(formData.confirmationCode)
      }

      // Llamada al servicio
      setSend(true)
      setRes(await checkCodeConfirmationUser(customFormData))
      setSend(false)
    } else {
      // Este usuario viene del login, porque existe en el localStorage
      const customFormData = {
        email: user.email,
        confirmationCode: parseInt(formData.confirmationCode)
      }

      // Llamada al servicio
      setSend(true)
      setRes(await checkCodeConfirmationUser(customFormData))
      setSend(false)
    }
  }

  

  return (
    <div>CheckCode</div>
  )
}