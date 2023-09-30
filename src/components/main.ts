import type { App } from 'vue';
import { HelloWorld, LiveIsland } from "@/components";

export default {
  install: (app: App) => {
    app.component('HelloWorld', HelloWorld);
    app.component('LiveIsland', LiveIsland);
  }
};

export { HelloWorld, LiveIsland };
