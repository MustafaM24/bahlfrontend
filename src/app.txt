<script setup lang="js">
  // Import the Button component using the correct path alias
  import { Button } from '@/components/ui/button';

  // Log a message to the console to check if the component is imported
  console.log('Button component imported:', Button);
</script>


<template >
  <div class="h-screen w-full bg-slate-500 flex flex-col justify-center items-center">
    <div class="text-3xl italic text-cyan-400 underline">Hello World</div>
    <!-- <Button></Button> -->
    <Button class=" bg-red-600 text-black h-7 w-20">Click me</Button>
  </div>
</template>

<style scoped>

</style>