const { createApp } = Vue;

const app = createApp ({
    data() {
        return {
            taskList: [
                {
                    text: "comprare l'erba",
                    done: false,
                },
                {
                    text: "comprare l'alcol",
                    done: false,
                }
            ],
            newTask: {
                text: '',
            }
        };
    },
    methods: {
        onFormSubmit(){
            this.taskList.push({
                text: this.newTask.text,
                done: false,
            });
        },
        onClickDelete(indexDelete){
            this.taskList.splice(indexDelete, 1);
        }        
    },
    mounted() {
        
    },
}).mount('#app');