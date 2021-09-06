import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

// refs & signup outside of exported function
// they don't need to be re-created every time we invoke useSignup
const errorMessage = ref(null);

const signup = async (email, password, displayName) => {
  errorMessage.value = null

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password)
    if (!res) {
      throw new Error('Could not complete signup')
    }
    await res.user.updateProfile({ displayName })
    errorMessage.value = null;
    return res
  }
  catch(err) {
    console.log(err.message)
    errorMessage.value = 'Unable to sign you up at this time';
  }
}

const useSignup = () => {
  return { errorMessage, signup }
}

export default useSignup