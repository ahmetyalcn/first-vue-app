
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
                this.notes.push(note);
            },
            deleteNote(note){
                console.log(note)
                this.state.notes = this.notes.filter(n=>n.id !== note.id)
            }
        }
    }
)