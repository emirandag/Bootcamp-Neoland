import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { deleteUser } from "../services/API_user/user.service";

export const useDeleteUserError = (setUser) => {
    Swal.fire({
        title: "Are you sure you want to delete your profile?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgb(73, 193, 162)",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm",
    }).then(async (result) => {
        if (result.isConfirmed) {
            const res = await deleteUser()
            switch (res.status) {
                case 200:
                    Swal.fire({
                        icon: "success",
                        title: "Delete User",
                        text: "See you soon",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    setUser(() => null)
                    localStorage.removeItem("user")
                    break;
            
                default:
                    Swal.fire({
                        icon: "error",
                        title: "No delete User ❎",
                        text: "Please, try again",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    break;
            }
        }
    })
}
