<template>
<v-card
    flat
    class="news-card">
  <img class="news_poster" :src="poster_path" alt="" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png'">
  <div class="title">{{title}}</div>
  <div class="date">{{release_date}}</div>
</v-card>
</template>

<script>
export default {
  name: "NewsItem",
  props: {
    title: {
      type: String,
      default: ""
    },
    id:{
      type: Number,
      default: 0
    },
    poster_path: {
      type: String,
      default: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png"
    },
    release_date: {
      type: String,
      default: ""
    },
  },
}
</script>

<style scoped>
.news-card {
  height: 360px;
  width: 200px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
  align-items: center;
}

.title{
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  text-align: center;
  max-width: 180px;
  font-weight: bold;
  margin-top: 10px;
}
.date{
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  text-align: center;
  max-width: 180px;
}

.news_poster{
  width: 200px;
}
</style>