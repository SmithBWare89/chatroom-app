import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

// refs & signup outside of exported function
// they don't need to be re-created every time we invoke useSignup
const error = ref(null);

// Take in email and password
const loginUser = async (email, password) => {
  error.value = null

  try {
    // Sign in using Firebase function
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    // If no response
    if (!res) {
      throw new Error('Unable to log user in at this time.')
    }

    // Else set error to null and return response
    error.value = null
    return res
  }
  catch(err) {
    error.value = err.message;
  }
}

const useLogin = () => {
  return { error, loginUser }
}

export default useLogin