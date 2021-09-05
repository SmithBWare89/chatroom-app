import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

// refs & signup outside of exported function
// they don't need to be re-created every time we invoke useSignup
const error = ref(null);

const login = async (email, password) => {
  error.value = null

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    if (!res) {
      throw new Error('Could not complete signup')
    }
    console.log(res)
    error.value = null;
    
    return res
  }
  catch(err) {
    console.log(err.message)
    error.value = err.message;
  }
}

const useLogin = () => {
  return { error, login }
}

export default useLogin