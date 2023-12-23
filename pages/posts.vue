<template>
  <p class="text-h2 text-center mt-5">Posts</p>
  <v-row class="justify-center mb-5">
    <v-col cols="3">
      <v-divider color="primary" thickness="3" class="mb-2"></v-divider>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" xl="4" class="mx-auto">
      <v-list lines="one">
        <v-divider></v-divider>
        <div v-for="(item, index) in blogPosts" :key="item.title">
          <v-list-item
            :title="item.title"
            :subtitle="item.date + ' ' + getSiteName(item.url)"
            :prepend-avatar="getIconPath(item.url)"
            :href="item.url"
            class="py-5"
          ></v-list-item>
          <v-divider></v-divider>
        </div>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import posts from '~/assets/posts.json'
export default {
  data() {
    return {
      blogPosts: posts,
    };
  },
  methods: {
    getDomain(url) {
      // URLからドメイン名を抽出
      return new URL(url).hostname;
    },
    getIconPath(url) {
      // ドメイン名に基づいてアイコンのパスを返す
      const domain = this.getDomain(url);
      if (domain.includes("hatenablog")) {
        return "/sns/hatenablog.png";
      } else if (domain.includes("qiita")) {
        return "/sns/qiita.png";
      } else if (domain.includes("note")) {
        return "/sns/note.png";
      } else if (domain.includes("zenn")) {
        return "/sns/zenn.png";
      } else {
        // ドメインが一致しない場合のデフォルトのアイコン
        return "/sns/hatenablog.png";
      }
    },
    getSiteName(url) {
      // ドメイン名に基づいてアイコンのパスを返す
      const domain = this.getDomain(url);
      if (domain.includes("hatenablog")) {
        return "はてなブログ";
      } else if (domain.includes("qiita")) {
        return "Qiita";
      } else if (domain.includes("note")) {
        return "note";
      } else if (domain.includes("zenn")) {
        return "Zenn";
      } else {
        // ドメインが一致しない場合のデフォルトのアイコン
        return "/sns/hatenablog.png";
      }
    },
  },
};
</script>
