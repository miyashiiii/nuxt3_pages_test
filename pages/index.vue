<template>
  <!-- Profile section -->
  <v-row class="align-center justify-center">
    <v-col cols="4">
      <v-img src="/miyashiiii.png" height="350" weight="350"></v-img>
    </v-col>
    <v-col cols="4">
      <p class="font-weight-bold mb-3 prof-text">miyashiiii</p>
      <p class="mb-3 prof-text">Software Engineer</p>
      <p class="prof-text">Saitama, Japan</p>
    </v-col>
  </v-row>

  <v-divider></v-divider>

  <!-- AboutMe section -->
  <p class="text-h2 text-center mt-5">About Me</p>
  <v-row class="justify-center">
    <v-col cols="3">
      <v-divider color="primary" thickness="3" class="mb-5"></v-divider>
    </v-col>
  </v-row>
  <v-col class="mx-auto" cols="6" xl="3">
    <p>
      <span v-for="(line, index) in aboutMe" :key="index">
        {{ line }}<br />
      </span>
    </p>
  </v-col>

  <!-- Links section -->
  <v-row class="mt-5 justify-center">
    <div
      v-for="(link, index) in links"
      :key="index"
      class="mx-3"
      :href="link.url"
    >
      <a :href="link.url">
        <v-img :src="link.icon" height="32" width="32"></v-img>
      </a>
    </div>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      aboutMe: [
        "1993年生まれ。埼玉県在住。",
        "都内の受託開発企業でサーバーサイドエンジニアをしています。",
        "Pythonが好きです。",
      ],
      links: [
        { url: "https://twitter.com/mysh_iiii", icon: "/sns/twitter.png" },
        {
          url: "https://miyashiiii.hatenablog.jp/",
          icon: "/sns/hatenablog.png",
        },
        { url: "https://qiita.com/miyashiiii", icon: "/sns/qiita.png" },
        { url: "https://github.com/miyashiiii", icon: "/sns/github.png" },
      ],
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
      } else {
        // ドメインが一致しない場合のデフォルトのアイコン
        return "/sns/hatenablog.png";
      }
    },
  },
};
</script>
