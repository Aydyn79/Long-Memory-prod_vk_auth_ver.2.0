import { GoogleLogin } from 'react-google-login';

const CLIENTID = '140073813105-vlnmg68m0h9g2uoriu4q32d7e84sn3hc.apps.googleusercontent.com';

function Login(){
    const onSuccess = (res) => {
        console.log("Login success! Current user: ", res.profileObj);
    }
     const onFailure = (res) => {
        console.log("Login failed! responce: ", res);
    }

    return(
    <div id="signInButton">
        <GoogleLogin
            clientId=CLIENTID
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />,
    <div/>
    )
}

export default Login;