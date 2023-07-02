import Swal from "sweetalert2/dist/sweetalert2.all.js"

export const useCheckCodeError = (res, setDeleteUser, setCheckOk, setUser, setReloadPageError, setRes) => {
    // 200 : Todo OK - testCheckOk: true
    if (res?.data?.testCheckOk?.toString() == "true") {
        // Comprobamos que venga del login con el localStorage
        if (localStorage.getItem("user")) {
            const currentUser = localStorage.getItem("user")
            const parseCurrentUser = JSON.parse(currentUser)
            const customUser = {
                ...parseCurrentUser,
                check: true
            }
            // Lo volvemos a meter en el localStorage
            const customUserString = JSON.stringify(customUser)
            setUser(() => customUser)
            localStorage.setItem("user", customUserString)
        }
        setCheckOk(() => true)

        Swal.fire({
            icon: "success",
            title: "Ok correct code ✅",
            showConfirmButton: false,
            timer: 1500,
          });
    }
}