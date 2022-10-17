import { useGoogleLogin } from '@react-oauth/google';


const Login = () => {useGoogleLogin({
  onSuccess: codeResponse => console.log(codeResponse),
  flow: 'auth-code',
});}


export default Login