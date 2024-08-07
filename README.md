# Hotjar Module For VirtoCommerce Frontend

This module is designed for use with the VirtoCommerce frontend app. It provides a simple interface to initialize and use Hotjar, a behavior analytics tool that helps you understand your users by providing insights through heatmaps, session recordings, and surveys.

## Installation

install the latest version

```bash
yarn add @virto-commerce/front-modules-hotjar
```

or install a specific version

```bash
yarn add @virto-commerce/front-modules-hotjar@1.0.0
```

## Usage

### Import the Module

Import the `useHotjarModule` composable in your Vue component:

```ts
import { useHotjarModule } from "@virto-commerce/front-modules-hotjar";
```

but preferably use async import

```ts
const { useHotjarModule } = await import("@virto-commerce/front-modules-hotjar");
```

### Initialize Hotjar

To initialize Hotjar, call the `initModule` method with the appropriate properties:

```ts
const { initModule } = useHotjarModule();

initModule({
  getModuleSettings,
  isDevelopment: IS_DEVELOPMENT,
  logger: Logger,
  userId: user.value.id,
});
```

## Publishing the Package

To publish the package, draft a new release. Ensure that that the version in `package.json` was changed accordingly in advance. After release package will be published automatically. On any concerns please see workflows in the **Actions** tab.

## Links

- [Hotjar](https://www.hotjar.com/)
- [Hotjar Module](https://github.com/VirtoCommerce/vc-module-hotjar)
- [Npm module](https://www.npmjs.com/package/@virto-commerce/front-modules-hotjar)

## License

Copyright (c) Virto Solutions LTD. All rights reserved.

This software is licensed under the Virto Commerce Open Software License (the "License"); you
may not use this file except in compliance with the License. You may
obtain a copy of the License at http://virtocommerce.com/opensourcelicense.
