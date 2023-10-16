import { addDoc } from "firebase/firestore"



export const useMainStore = defineStore('main',
    {
        state: () => ({
            notes: []
        }),
        getters: {
            getNotes: computed((state) => state.notes),
        },
        actions: {
            async getAllNotes() {
                const { $useTodos } = useNuxtApp()
                watch(() => $useTodos.value, (newNotes) => {
                    this.notes = newNotes
                });

                
            },
            async addNote(note) {
                try {
                  const { $addNote } = useNuxtApp();
                  const obj = {
                    id: this.notes.length,
                    title: note.title,
                    content: note.content
                  };
                  
                  const res = await $addNote(obj);
    
                  console.log(res);
                } catch (error) {
                  console.error('Error adding note:', error);
                  // Handle the error (e.g., show a message to the user)
                }
              },
            async deleteNote(id) {
                await $fetch("/api/" + id, {
                    method: "DELETE"
                })
                this.notes = this.notes.filter(n => n.id != id)
            }
        }
    }

)