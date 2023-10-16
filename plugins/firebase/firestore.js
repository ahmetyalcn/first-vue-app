// plugins/firebase/firestore.js

import { collection, addDoc } from 'firebase/firestore';

// Export the Firestore functions to use in your components/pages.

export default defineNuxtPlugin(() => {

    const db = useFirestore()
    const todos = useCollection(collection(db,'notes'))
    const addNote =async(data) => await addDoc(collection(db,'notes'),data)

    return {
        provide: {
            useTodos:todos,
            addNote: addNote
        }
    }

}
)