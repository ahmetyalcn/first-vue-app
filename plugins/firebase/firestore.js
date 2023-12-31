import { collection, addDoc,deleteDoc, doc } from 'firebase/firestore';

export default defineNuxtPlugin(() => {

    const db = useFirestore()
    const todos = useCollection(collection(db,'notes'))
    const addNote =async(data) => await addDoc(collection(db,'notes'),data)
    const deleteNote =async(data) => await deleteDoc(doc(db,'notes',data))

    return {
        provide: {
            useTodos:todos,
            addNote: addNote,
            deleteNote:deleteNote
        }
    }

}
)