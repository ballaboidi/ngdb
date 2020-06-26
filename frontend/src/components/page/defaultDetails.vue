<template>
    <div class="event-details my-5">
        <h2>Hallo {{ this.username }}</h2>
        <p>hier werden Dir Details für unsere Events angezeigt.<br>
            Wähle einfach oben eine Veranstaltung aus und schon ändert sich der Text.<br>
            Fast magisch
        </p>
    </div>
</template>
<script>
export default {
  name: "defaultDetails",
  data(){
    return {
        username: undefined
    }
  },
  created(){
    const user = JSON.parse(window.localStorage.getItem('user'))
    this.username = user.username
  }
};
</script>
