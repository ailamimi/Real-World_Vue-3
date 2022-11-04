<template>
  <div class="event">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <h1>Events for good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <router-link
      :to="{ name: 'EventList', query: { page: page - 1 } }"
      rel="prev"
      v-if="page != 1"
    >
      Prev Page
    </router-link>

    <router-link
      :to="{ name: 'EventList', query: { page: page + 1 } }"
      rel="next"
    >
      Next Page
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'EventList',
  props: ['page'], // receive para as prop, the current page
  components: {
    EventCard
  },

  data() {
    return {
      events: null
    }
  },

  created() {
    EventService.getEvents(2, this.page) // 2 per page, and current page
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.event {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
