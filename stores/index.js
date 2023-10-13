
export const useMainStore = defineStore('main',
    {
        state: ()=>({
            notes: []
        }),
        getters: {
            getNotes: state => state.notes,
        },
        actions: {
            async getAllNotes() {
                this.notes = await $fetch("/api/hello")
            },
            async addNote(note){
                const obj = {
                    id: this.getNotes.length,
                    title: note.title,
                    content: note.content
                }
                
                const res = await $fetch("/api/hello", {
                    method:"POST",
                    body: obj                
                })
                this.notes.push(obj)
                console.log(res)
                //this.notes.unshift(obj);
            },
            async deleteNote(id){
                await $fetch("/api/"+id,{
                    method:"DELETE"
                })
                this.notes = this.notes.filter(n=>n.id != id)
            }
        }
    }
   
)