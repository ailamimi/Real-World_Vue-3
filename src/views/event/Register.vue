<template>
  <p>Register for the event here</p>

  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: ['event'],

  methods: {
    register() {
      // Call to API
      // If registered then redirect to event details

      //specify router name we want to redirect
      this.$router.push({
        name: 'EventDetails'
      })
    }
  }
}
</script>

<style></style>
