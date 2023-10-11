
export const useMainStore = defineStore('main',
    {
        state: ()=>({
            notes: []
        }),
        getters: {
            getNotes: state => state.notes,
        },
        actions: {
            addNote(note){
                const obj = {
                    title: note,
                    id: this.getNotes.length
                }
                this.notes.unshift(obj);
            },
            deleteNote(id){
                this.notes = this.notes.filter(n=>n.id !== id)
            }
        }
    }
)