import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

// refs & signup outside of exported function
// they don't need to be re-created every time we invoke useSignup
const error = ref(null);

const loginUser = async (email, password) => {
  error.value = null

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    if (!res) {
      throw new Error('Unable to log user in at this time.')
    }
    
    error.value = null
    return res
  }
  catch(err) {
    console.log(err.message)
    error.value = err.value;
  }
}

const useLogin = () => {
  return { error, loginUser }
}

export default useLogin