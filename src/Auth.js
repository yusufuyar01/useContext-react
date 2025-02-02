import { useContext } from "react";
import AuthContext from './context/auth-context';



function Auth() {
    const {status, login} = useContext(AuthContext);
    // const auth = useContext(AuthContext);
    console.log(status);
    // console.log(auth.status,auth.login);
    return  <div className="Auth">
        <h1>Giriş Yaptın mı?</h1>
        {status ? <p>Evet, giriş yaptım.</p> : <p>Hayır, giriş yapmadım.</p>}
        <button onClick={login} >Giriş Yap</button>
    </div>
}

export default Auth;