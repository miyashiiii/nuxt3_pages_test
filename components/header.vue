<template>
  <v-app-bar color="primary">
    <v-container class="fill-height">
      <v-app-bar-title class="pl-5">
        <NuxtLink to="/"> miyashiiii portfolio </NuxtLink>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn nuxt to="/posts">posts</v-btn>
      <v-btn nuxt to="/works">works</v-btn>
    </v-container>
  </v-app-bar>
</template>
