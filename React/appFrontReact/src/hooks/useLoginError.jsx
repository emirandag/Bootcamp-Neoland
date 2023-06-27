import Swal from "sweetalert2/dist/sweetalert2.all.js";
const useLoginError = (res, setLoginOk, userlogin) => {

  if (res?.response?.status == 500)
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Interval Server Error ❎!",
      showConfirmButton: false,
      timer: 1500,
    });

  
};

export default useLoginError;