<template>
    <div>
        <p v-for="project in projects" :key="project.id">
            {{ project.title }}
        </p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            projects:[]
        }
    },
    methods: {
        fetchProjects() {
            axios.get('http://127.0.0.1:8000/api/projects')
            .then(res => {
                console.log(res)
                const {projects} = res.data
                console.log(projects)
                this.projects = projects
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    mounted() {
        console.log('ciao')
        this.fetchProjects()
    },
}

</script>