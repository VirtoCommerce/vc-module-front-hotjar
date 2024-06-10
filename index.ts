import Hotjar from "@hotjar/browser";

const DEBUG_PREFIX = "[Hotjar]";

type SettingsType = {
  id: string;
  version: string;
};

type DependenciesType = {
  canUseDOM: boolean;
  isDevelopment: boolean;
  userId: string;
  logger: {
    debug: (prefix: string, message: string) => void;
  };
};

type InitProps = {
  settings: SettingsType;
  dependencies: DependenciesType;
};

function initModule({ settings, dependencies }: InitProps) {
  const { id, version } = settings;
  const { canUseDOM, isDevelopment, userId, logger } = dependencies;

  if (!canUseDOM) {
    return;
  }

  if (id && version) {
    if (!isDevelopment) {
      Hotjar.init(Number(id), Number(version));
      Hotjar.identify(userId, {});
    } else {
      logger.debug(DEBUG_PREFIX, "Hotjar enabled but not initialized");
    }
  }
}

export function useHotjarModule() {
  return {
    initModule,
  };
}
