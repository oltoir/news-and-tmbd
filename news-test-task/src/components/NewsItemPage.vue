<template>
<div>
  <v-btn @click="$router.go(-1)" style="margin-bottom: 20px">Назад</v-btn>
  <v-row>
    <img class="news_poster" :src="this.image_url + this.news.poster_path" alt="" @error="$event.target.src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png'">
    <div class="main_content">
      <h1>{{this.news.title}}</h1>
      <h2>Оценки пользователей: {{this.news.vote_average}}/10</h2>
      <div>
      <h2>Обзор</h2>
      <h3>{{this.news.overview}}</h3>
      </div>
    </div>

  </v-row>
  <div class="add_info">
  <h1>Подробная информация</h1>
  <v-row class="add_content">
    <div>
      <div class="info_title">
        Статус:
        <div class="info_content">
        {{this.news.status}}
        </div>
      </div>
      <div class="info_title">
        Оригинальное название:
        <div class="info_content">
        {{this.news.original_title}}
        </div>
      </div>
      <div class="info_title">
        Популярность:
        <div class="info_content" >
        {{this.news.popularity}}
        </div>
      </div>
    </div>
    <div>
      <div class="info_title">
        Дата выхода:
      <div class="info_content">
        {{this.news.release_date.split('-')[2] + '.' + this.news.release_date.split('-')[1] + '.' + this.news.release_date.split('-')[0]}}
      </div>
      </div>
      <div class="info_title">
        Продожительность:
        <div class="info_content">
        {{Math.floor(this.news.runtime/60)}}ч
        {{this.news.runtime%60}}мин
        </div>
      </div>
      <div class="info_title">
        Цитата:
        <div class="info_content">
        {{this.news.tagline}}
        </div>
        <div class="info_content" v-if="!this.news.tagline">
        Нет цитаты
      </div>
      </div>
    </div>
    <div>
      <div class="info_title">
        Исходный язык:
        <div class="info_content" v-for="lang in this.news.spoken_languages" :key="lang.id">{{lang.name}}</div>
      </div>
      <div class="info_title ">
        Создатель:
        <div class="info_content companies" v-for="comp in this.news.production_companies" :key="comp.id">
          <img class="comp_logo" :src="image_url + comp.logo_path" alt="">
          {{comp.name}}</div>
      </div>
      <div class="info_title">
        Сборы:
        <div class="info_content">
          {{this.news.revenue}}$
        </div>
      </div>
    </div>
  </v-row>
  </div>
</div>
</template>

<script>
import {getNewsById} from "../../api/news";
export default {
  name: "NewsItemPage",
  data(){
    return{
      news:{},
      id: 0,
      image_url: "https://image.tmdb.org/t/p/w500",
    }
  },
  created() {
    this.id = this.$route.path.split('/')[2]
    console.log(this.id);
    this.init()
  },
  methods: {
    init(){
      this.getNews()
    },
    async getNews(){
      await getNewsById(this.id).then(response => {
        this.news = response.data;
      });
      console.log(this.news)
    }
  }
}
</script>

<style scoped>
.news_poster{
  width: 300px;
}
h1{
  font-family: "Roboto", sans-serif;
}
h2{
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  margin: 20px 0;
}
h3{
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  max-width: 600px;
}
.main_content{
  margin: 20px;
  display: flex;
  flex-direction: column;
}
.add_info{
  margin: 30px 0;
}
.add_content{
  font-family: "Roboto", sans-serif;
  justify-content: space-between;
  font-size: 20px;
  margin: 20px 0;
}
.info_title{
  font-size: 25px;
  font-weight: bold;
  margin: 10px 0;
}
.info_content{
  font-weight: normal;
  font-size: 20px;
}

.comp_logo{
  width: 50px;
  margin-right: 15px;
}

.companies{
  display: flex;
  align-items: center;
  margin: 10px 0 ;
}

</style>