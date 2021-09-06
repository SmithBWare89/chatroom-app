import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

// refs & signup outside of exported function
// they don't need to be re-created every time we invoke useSignup
const error = ref(null);

// Take in user email, password, and displayName from form
const signup = async (email, password, displayName) => {
  error.value = null

  try {
    // Send data to server
    const res = await projectAuth.createUserWithEmailAndPassword(email, password)
    // If no response
    if (!res) {
      throw new Error('Could not complete signup')
    }
    // Else update displayName prop on user and return response
    await res.user.updateProfile({ displayName })
    error.value = null;
    return res
  }
  catch(err) {
    error.value = 'Unable to sign you up at this time';
  }
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup