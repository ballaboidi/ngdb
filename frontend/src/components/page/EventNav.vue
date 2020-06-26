<template>
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
    >
        <swiper-slide
          class="card shadow px-0"
          v-for="event in events"
          v-bind:key="event.id"
        >
            <router-link 
                :to="{ path: '/events/' + event.id }"
                :key="event.id"
            >
              <img
                class="card-img-top image-fluid"
                :src="api_url + event.Eventbild.url"
              />
              <div class="card-body ">
                <h3 class="card-title mt-1 mb-1">
                  {{ event.Title }}
                </h3>
                <div
                  class="card-date"
                  v-if="event.Datum"
                >
                  <app-icon
                    name="Date" 
                    size="15"
                  />
                  {{ event.Datum | formatDate }}
                </div>
                <div class="card-date-dec" v-else>
                  <span>Datum wird noch entschieden</span>
                </div>
              </div>
            </router-link>
        </swiper-slide>
    </swiper>
</template>
<script>  
import gql from "graphql-tag"
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import moment from "moment"

export default {  
  name: "EventNav",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      events: [],
      swiperOptions: {
        slidesPerView: 3.1,
        spaceBetween: 30
      }
    };
  },
  apollo: {
    events: gql`
    query Events{
        events{
            id
            Title
            Description
            Datum
            Eventbild{
              url
              alternativeText
            }
        }
    }
    `
  },
  computed: {
    swiper() {
        return this.$refs.mySwiper.$swiper
    }
  },
  filters: {
    formatDate: (value) => {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY')
      }
    }
  }
};
</script>
<style lang="scss">
@import "~swiper/css/swiper.min.css";
.swiper-container {
  width: 100%;
  height: 350px;
  .swiper-wrapper{
    height: 325px;
    .card{
      .card-img-top{
        max-height: 150px;
        object-fit: cover;
      }
    }
  }
}
</style>