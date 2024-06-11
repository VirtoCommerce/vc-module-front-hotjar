# Hotjar Module For VirtoCommerce Frontend

This module is designed for use with the VirtoCommerce frontend app. It provides a simple interface to initialize and use Hotjar, a behavior analytics tool that helps you understand your users by providing insights through heatmaps, session recordings, and surveys.

## Installation

install the latest version

```bash
yarn add vc-module-front-hotjar@git@github.com:VirtoCommerce/vc-module-front-hotjar.git
```

or install a specific version

```bash
yarn add vc-module-front-hotjar@git@github.com:VirtoCommerce/vc-module-front-hotjar.git#v1.0.0
```

## Usage

### Import the Module

Import the `useHotjarModule` composable in your Vue component:

```ts
import { useHotjarModule } from "vc-module-front-hotjar";
```

but preferably use async import

```ts
const { useHotjarModule } = await import("vc-module-front-hotjar");
```

### Initialize Hotjar

To initialize Hotjar, call the `initModule` method with the appropriate properties:

```ts
const { initModule } = useHotjarModule();

initModule({
  settings: {
    id: "hotjar_site_id",
    version: "6",
  },
  dependencies: {
    canUseDOM,
    isDevelopment: IS_DEVELOPMENT,
    logger: Logger,
    userId: user.value.id,
  },
});
```

## Links

- [Hotjar](https://www.hotjar.com/)
- [Hotjar Module](https://github.com/VirtoCommerce/vc-module-hotjar)

## License

Copyright (c) Virto Solutions LTD. All rights reserved.

This software is licensed under the Virto Commerce Open Software License (the "License"); you
may not use this file except in compliance with the License. You may
obtain a copy of the License at http://virtocommerce.com/opensourcelicense.
