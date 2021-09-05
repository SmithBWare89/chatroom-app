import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

// refs & signup outside of exported function
// they don't need to be re-created every time we invoke useSignup
const errorMessage = ref(null);

const login = async (email, password) => {
  errorMessage.value = null

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    errorMessage.value = null
    return res
  }
  catch(err) {
    console.log(err.value)
    errorMessage.value = 'Incorrect login credentials';
  }
}

const useLogin = () => {
  return { errorMessage, login }
}

export default useLogin