const { createApp } = Vue;

const app = createApp ({
    data() {
        return {
            taskList: [
                {
                    text: "comprare quello",
                    done: false,
                },
                {
                    text: "comprare anche altro",
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