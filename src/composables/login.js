import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

// refs & signup outside of exported function
// they don't need to be re-created every time we invoke useSignup
const errorMessage = ref(null);

const loginUser = async (email, password) => {
  errorMessage.value = null

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    if (!res) {
      throw new Error('Could not complete login')
    }
    errorMessage.value = null
    return res
  }
  catch(err) {
    console.log(err.message)
    errorMessage.value = 'Incorrect login credentials';
  }
}

const useLogin = () => {
  return { errorMessage, loginUser }
}

export default useLogin