import { ref } from "vue";
import {projectAuth, projectFirestore, timestamp} from '../firebase/config'

const signup = () => {
    const displayName = ref("");
    const password = ref("");
    const email = ref("")
    const errorMessage = ref(null)
    const regex = /@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$"/
    const user = ref('')

    

    const handleSignup = async (displayName, password, email) => {
        try {
            if (!email.match(regex)) {
                throw new Error('Please enter a valid email')
            }
            const res = await projectAuth.createUserWithEmailAndPassword(email, password);
            if (!res) {
                throw new Error('Could not complete the signup')
            }
        } catch (error) {
            errorMessage.value = error.message
        }
    }

    return { displayName, password, email, handleSignup, errorMessage }
}

export default signup
