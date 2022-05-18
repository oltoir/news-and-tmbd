<template>
  <v-row class="news_items_row">
    <div v-for="news_item in news.results" :key="news_item.id">
      <NewsItem
        :title="news_item.original_title"
        :id="news_item.id"
        :poster_path="image_url + news_item.poster_path"
        :release_date="news_item.release_date.split('-')[2] + '.' + news_item.release_date.split('-')[1] + '.' + news_item.release_date.split('-')[0]"
      />
    </div>

    <v-skeleton-loader
        class="card_loader"
        type="card"
        v-if="isLoading"
    ></v-skeleton-loader>

    <v-skeleton-loader
        class="card_loader"
        type="card"
        v-if="isLoading"
    ></v-skeleton-loader>

    <v-skeleton-loader
        class="card_loader"
        type="card"
        v-if="isLoading"
    ></v-skeleton-loader>

    <v-skeleton-loader
        class="card_loader"
        type="card"
        v-if="isLoading"
    ></v-skeleton-loader>

    <v-skeleton-loader
        class="card_loader"
        type="card"
        v-if="isLoading"
    ></v-skeleton-loader>
  </v-row>
</template>

<script>
import NewsItem from "@/components/NewsItem";
import { getNews } from "../../api/news";

export default {
  name: "News",
  components: {
    NewsItem
  },
  data() {
    return {
      news: [],
      image_url: "https://image.tmdb.org/t/p/w500",
      page_size: 10,
      page: 2,
      isLoading: false,
    };
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.getNews();
    },
    async getNews() {
      await getNews(this.page_size,this.page).then(response => {
        this.news = response.data;
      });
      console.log(this.news);
    },
    async loadMore() {
      this.isLoading = true;
      this.page++;
      console.log(this.page);
      await getNews(this.page_size,this.page).then(response => {
        this.news.results = [
            ...this.news.results,
            ...response.data.results];
      });
      console.log(this.news);
      this.isLoading = false;
    },
    getNextPage() {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.loadMore();
        }
      };
    },
  },
  mounted() {
    this.getNextPage();
  }
}
</script>

<style>
.news_items_row{
  justify-content: center;
}
.card_loader{
  height: 360px;
  width: 200px;
  margin: 10px;
}
.v-skeleton-loader__image {
  height: 300px !important;
}
.v-skeleton-loader__heading{
  width: 80% !important;
}
</style>