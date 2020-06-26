<template>
    <div class="random-text-wrapper col-12 text-center mb-5">
        <h1 class="font-weight-light">{{ message }}</h1>
    </div>
</template>
<script>  
export default {  
  name: "RandomText",
  data() {
      return{
        message: undefined
      }
  },
  mounted(){
      const messages = [
          'Noch son Spruch, Rohrbruch',
          'Komisch, dieser Text ändert sich dauernd',
          'Deine Freunde sind Gangster, ticken Drogen im Park, ich kenn nur Leute mit festen Job und Bausparvertrag',
          'Die Hundeleine unter den Sexspielzeugen',
          'Gruepochenbildunv',
          'drei Ecken, ein Elfer',
          'Objektiv betrachtet ist Kräuterhofweg 50 nicht das Ende der Welt',
          'Kein Mensch, kein Tier, die Nummer Vier!',
          'Uh lala, wir haben hier einen Gast auf "Fronkreich"'
      ]
      let randomMsg = messages[Math.floor(Math.random() * messages.length)];
      this.message = randomMsg
  }
}
</script>