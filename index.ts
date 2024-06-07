import Hotjar from "@hotjar/browser";

const DEBUG_PREFIX = "[Hotjar]";

function init({ id, canUseDOM, isEnabled, isDevelopment, version, userId, Logger }) {
  if (!canUseDOM) {
    return;
  }

  if (isEnabled && id && version) {
    if (!isDevelopment) {
      Hotjar.init(id, version);
      Hotjar.identify(userId, {});
    } else {
      Logger.debug(DEBUG_PREFIX, "Hotjar enabled but not initialized");
    }
  }
}

export function useHotjar() {
  return {
    init,
  };
}
