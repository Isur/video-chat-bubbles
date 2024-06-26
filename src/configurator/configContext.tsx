import { FC, PropsWithChildren, createContext } from "react";
import { useLocalStorage } from "@/hooks";

export interface Config {
  fontSize: number;
  padding: number;
  on: boolean;
  right: boolean;
  top: boolean;
  time: number;
  rotation: "horizontal" | "vertical";
}

export interface ConfigContextInterface {
  config: Config;
  updateSettings: (settings: Partial<Config>) => void;
  reset: () => void;
}

const defaultConfig: Config = {
  fontSize: 16,
  padding: 12,
  on: false,
  right: false,
  top: false,
  time: 7000,
  rotation: "horizontal",
};

export const ConfigContext = createContext<ConfigContextInterface>({
  config: defaultConfig,
  reset: () => {},
  updateSettings: () => {},
});

export const ConfigProvider: FC<PropsWithChildren> = ({ children }) => {
  const [config, setConfig] = useLocalStorage<Config>("config", defaultConfig);

  const reset = () => {
    setConfig(defaultConfig);
  };

  const updateSettings = (settings: Partial<Config>) => {
    setConfig((prev) => ({ ...prev, ...settings }));
  };

  return (
    <ConfigContext.Provider
      value={{
        config,
        reset,
        updateSettings,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
