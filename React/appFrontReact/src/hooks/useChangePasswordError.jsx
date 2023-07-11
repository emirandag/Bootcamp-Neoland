import Swal from "sweetalert2/dist/sweetalert2.all.js";

export const useChangePasswordError = (res, setRes, setUser) => {

    console.log(res);
    // 200 : UpdateUser: true
    if (res?.data?.updateUser?.toString() == "true") {
        setUser(() => null)
        localStorage.removeItem("user")
        Swal.fire({
            icon: "success",
            title: "Change password ok ✅",
            showConfirmButton: false,
            timer: 1500,
          });
          setRes(() => {});
    }
}
