<template>
    <div class="event-details text-container my-5">
      <h2 class="mb-0">{{ event.Title }}</h2>
      <div class="event-date">
        {{ event.Datum | formatDate }}
      </div>
      <p>{{ event.Description }}</p>
    </div>
</template>
<script>
import gql from "graphql-tag"
import moment from "moment"
export default {
  name: "EventDetails",
  data() {
      return {
        event: {},
        routeParam: this.$route.params.id,
      };
  },
  apollo: {
    event: {
      query: gql`
        query Events($id: ID!) {
            event(id: $id){
                id
                Title
                Description
                Datum
                Eventbild{
                  url
                  alternativeText
                }
            }
        }`,
    variables () {
      return {
        id: this.routeParam
        };
      }
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