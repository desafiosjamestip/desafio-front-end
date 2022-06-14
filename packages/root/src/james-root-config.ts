import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@james/navbar",
  app: () => System.import("@james/navbar"),
  activeWhen: () => true,
});

registerApplication({
  name: "@james/home",
  app: () => System.import("@james/home"),
  activeWhen: ["/home"],
});

registerApplication({
  name: "@james/products",
  app: () => System.import("@james/products"),
  activeWhen: ["/products"],
});

start({
  urlRerouteOnly: true,
});
