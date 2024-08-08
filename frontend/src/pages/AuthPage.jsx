import { useRecoilValue } from 'recoil'
import LoginCard from '../components/LoginCard'
import authScreenAtom from '../assets/authAtom'
import SignupCard from '../components/SignupCard';

function AuthPage() {
    const authScreenState = useRecoilValue(authScreenAtom);
    console.log(authScreenState);
  return (
    <>
    {authScreenState === "login" ? <LoginCard/> : <SignupCard/>}
    </>
  )
}

export default AuthPage