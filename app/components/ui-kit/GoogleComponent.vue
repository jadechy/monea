<script setup lang="ts">
 import logo from "../assets/google_logo.webp"
 const handleClick=()=>{
      window.location.href = "http://localhost:8000/connect/google"

 }
</script>

<template>
    
        <img @click="handleClick" :src="logo" class="h-16 shadow rounded-xl w-fit py-4 px-6 hover:bg-gray-100 transition" /> 
 
</template>