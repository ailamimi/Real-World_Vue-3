<!-- 
    * Contains the navigation for each event -> Details | Register | Edit 
    * API  call for fetching the event
-->

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>

    <div class="nav">
      <!-- ex: /event/2 -->
      <router-link :to="{ name: 'EventDetails' }">
        Details
      </router-link>
      |
      <!-- ex: /event/2/Register -->
      <router-link :to="{ name: 'EventRegister' }">
        Register
      </router-link>
      |
      <!-- ex: /event/2/Edit -->
      <router-link :to="{ name: 'EventEdit' }">
        Edit
      </router-link>
    </div>
    <router-view :event="event" />
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'

export default {
  props: ['id'],

  data() {
    return {
      event: null
    }
  },

  created() {
    // fetch event (by id) and set local data
    EventService.getEvent(this.id)
      .then(response => {
        this.event = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style></style>
