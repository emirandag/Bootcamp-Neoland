import { useState, useCallback } from "react"
import DeleteUser from "../DeleteUser/Deleteuser"


const CodeUseCallback = () => {

    const [user, setUser] = useState({
        name: "Eduardo",
        lastName: "Miranda"
    })

    const deleteUserCallback = useCallback(
      () => {
        setUser({ name: "", lastName: "" })
      },
      [],
    )

    return (
        <>
            <h3>
                {user.name} | {user.lastName}
            </h3>
            <input value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value})} />
            <input value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value})} />

            <DeleteUser deleteUser={deleteUserCallback}>Reset name</DeleteUser>
        </>
    )
}

export default CodeUseCallback