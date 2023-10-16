
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
                    console.log(this.notes)
                });
            },
            async addNote(note) {
                try {
                  const { $addNote } = useNuxtApp();
                  const obj = {
                    title: note.title,
                    content: note.content
                  };
                  const res = await $addNote(obj);
                  console.log(res);
                } catch (error) {
                  console.error('Error adding note:', error);
                }
              },
            async deleteNote(note) {
                try {
                    const { $deleteNote } = useNuxtApp();
                    const res = await $deleteNote(note.id);
                  } catch (error) {
                    console.error('Error deleting note:', error);
                  }
                
            }
        }
    })