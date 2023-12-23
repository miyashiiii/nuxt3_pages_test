<template>
  <v-app>
    <Header />
    <v-container max-width="75%">
      <v-main>
        <slot />
      </v-main>
    </v-container>
    <Footer />
  </v-app>
</template>
