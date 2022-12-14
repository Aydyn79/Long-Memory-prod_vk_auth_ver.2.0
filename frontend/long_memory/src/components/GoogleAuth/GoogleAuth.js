import { useEffect } from 'react'
import jwt_decode from "jwt-decode";
 
function Login() {

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    let decoded = jwt_decode(response.credential);
    console.log(decoded);
  }


  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: "140073813105-05evcieag1t9grl4o261n969t7oco9h3.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "filled_blue", size: "large", type:"icon" }
    );
  }, [])

  return (
    <div>
      <div id="signInDiv"></div>
    </div>
  );
}



export default Login;
