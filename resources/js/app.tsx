import "../css/app.css";

import { createInertiaApp } from "@inertiajs/react";
import { configureEcho } from "@laravel/echo-react";
import { createRoot } from "react-dom/client";

import { resolvePage } from "./global";

configureEcho({
  broadcaster: "reverb",
});

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),
  resolve: async (name) => await resolvePage(name),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(<App {...props} />);
  },
  progress: {
    color: "#4B5563",
  },
});
