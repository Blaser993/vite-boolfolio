<template>
    <div>
    <ul >
        <li>

            <router-link :to="{ name:'home' }" >Home</router-link> 
        </li>
        <li>
            <router-link :to="{ name:'portfolio' }" >Portfolio</router-link> 
        </li>
        <li>
            <router-link :to="{ name:'about' }" >Chi sono</router-link> 
        </li>
        
    </ul>
    </div>
</template>

<script>

export default {
    data(){
  
    },

    }
    


</script>