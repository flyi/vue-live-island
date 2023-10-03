import type { App } from 'vue';
import { LiveIsland } from "@/components";

export default {
  install: (app: App) => {
    // app.component('HelloWorld', HelloWorld);
    app.component('LiveIsland', LiveIsland);
  }
};

export { LiveIsland };
