const DEBUG_PREFIX = "[Hotjar]";
const HOTJAR_SETTINGS_MAPPING = {
  "Hotjar.SiteId": "id",
  "Hotjar.SnippetVersion": "version",
} as const;

type SettingValueType = string | number | boolean | null;
type DependenciesType = {
  isDevelopment: boolean;
  getModuleSettings: <T extends Record<string, string>>(settingsMapping: T) => { [K in T[keyof T]]?: SettingValueType };
  userId: string;
  logger: {
    debug: (prefix: string, message: string) => void;
  };
};

async function initModule({ getModuleSettings, isDevelopment, userId, logger }: DependenciesType) {
  const settings = getModuleSettings(HOTJAR_SETTINGS_MAPPING);
  const { id, version } = settings;
  const canUseDOM = !!(typeof window !== "undefined" && window.document?.createElement);

  if (!canUseDOM || !(id && version)) {
    return;
  }

  if (!isDevelopment) {
    const Hotjar = (await import("@hotjar/browser")).default;
    Hotjar.init(Number(id), Number(version));
    Hotjar.identify(userId, {});
  } else {
    logger.debug(DEBUG_PREFIX, "Hotjar enabled but not initialized");
  }
}

export function useHotjarModule() {
  return {
    initModule,
  };
}
