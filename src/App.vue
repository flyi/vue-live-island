<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import LiveIsland from "./components/LiveIsland.vue";
import TheWelcome from "./components/TheWelcome.vue";
import { ref } from "vue";

const isSmall = ref<boolean>(true);
</script>

<template>
  <header>
    <LiveIsland
      class-name="flex items-center justify-center uppercase"
      small-class-name="text-xs"
      large-class-name="text-7xl"
      trigger-type="click"
      initial-animation
      @change="
        (change: boolean) => {
          isSmall = !change;
        }
      "
    >
      {{ isSmall ? "Small" : "Large" }}
    </LiveIsland>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
    </div>
  </header>
  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
