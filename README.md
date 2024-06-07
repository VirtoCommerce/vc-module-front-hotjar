# Hotjar Module For VirtoCommerce Frontend

This module is designed for use with the VirtoCommerce frontend theme. It provides a simple interface to initialize and use Hotjar, a behavior analytics tool that helps you understand your users by providing insights through heatmaps, session recordings, and surveys.

## Installation

```bash
yarn vc-module-front-hotjar@git@github.com:VirtoCommerce/vc-module-front-hotjar.git
```

or install a specific version

```bash
yarn vc-module-front-hotjar@git@github.com:VirtoCommerce/vc-module-front-hotjar.git#v1.0.0
```

## Usage

### Import the Module

Import the `useHotjar` composable in your Vue component:

```ts
import { useHotjar } from "vc-module-front-hotjar";
```

but preferably use async import

```ts
const { useHotjar } = await import("vc-module-front-hotjar");
```

### Initialize Hotjar

To initialize Hotjar, call the `init` method with the appropriate properties:

```ts
const { init } = useHotjar();

init({
  id: "your-hotjar-site-id",
  canUseDOM: true, // Check if DOM is available
  isEnabled: true, // Enable or disable Hotjar
  isDevelopment: false, // Set to true for development mode
  version: "your-hotjar-version",
  userId: "unique-user-id",
  logger: {
    // Pass error handler with the following interface
    debug: (prefix, message) => {
      console.debug(prefix, message);
    },
  },
});
```

## License

Some information about license here.


If you find any issues or have questions, feel free to contribute or ask for help.
