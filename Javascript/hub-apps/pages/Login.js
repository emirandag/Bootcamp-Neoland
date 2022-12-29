import { Dashboard } from "./Dashboard";

export const Login = () => {
  document.querySelector("#container").innerHTML = `
        <div>
            <h1>NEOLAND HUB-GAMES</h1>

            <form class="form">
                <label>Introduce tu nombre</label>
                <input id="input-name" type="text" required />
                <button id="btn-name">👍</button>
            </form>
        </div>
    `;

/*   //container.appendChild(loginPage)
  //document.body.appendChild(container) */

  actionLogin()
};


const actionLogin = () => {
    const btnName = document.querySelector('#btn-name')
    const inputName = document.querySelector('#input-name')
    btnName.addEventListener('click', () => {
        //console.log(inputName.value);
        if (inputName.value === "") {
            inputName.innerHTML = `<input id="input-name" type="text" /> X`
        } else {
            localStorage.setItem("user", inputName.value)
            Dashboard(inputName.value)
        }
        
    })


}