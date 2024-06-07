import Hotjar from "@hotjar/browser";

const DEBUG_PREFIX = "[Hotjar]";

type InitProps = {
  id: string;
  canUseDom: boolean;
  isEnabled: boolean;
  isDevelopment: boolean;
  version: number;
  userId: string;
  logger: {
    debug: (prefix: string, message: string) => void;
  };
};

function init({ id, canUseDOM, isEnabled, isDevelopment, version, userId, logger }) {
  if (!canUseDOM) {
    return;
  }

  if (isEnabled && id && version) {
    if (!isDevelopment) {
      Hotjar.init(id, version);
      Hotjar.identify(userId, {});
    } else {
      logger.debug(DEBUG_PREFIX, "Hotjar enabled but not initialized");
    }
  }
}

export function useHotjar() {
  return {
    init,
  };
}
