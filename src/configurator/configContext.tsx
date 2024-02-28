import { FC, PropsWithChildren, createContext, useState } from "react";

export interface Config {
  fontSize: number;
  padding: number;
  on: boolean;
  right: boolean;
  rotation: "horizontal" | "vertical";
}

export interface ConfigContextInterface {
  config: Config;
  handleFontSizeChange: (size: number) => void;
  handleOnOffChange: (on: boolean) => void;
  handlePaddingChange: (padding: number) => void;
  toggleRotation: () => void;
  toggleRight: () => void;
  reset: () => void;
}

const defaultConfig: Config = {
  fontSize: 16,
  padding: 12,
  on: false,
  right: false,
  rotation: "horizontal",
};

export const ConfigContext = createContext<ConfigContextInterface>({
  config: defaultConfig,
  handleFontSizeChange: () => {},
  handleOnOffChange: () => {},
  handlePaddingChange: () => {},
  toggleRotation: () => {},
  reset: () => {},
  toggleRight: () => {},
});

export const ConfigProvider: FC<PropsWithChildren> = ({ children }) => {
  const [config, setConfig] = useState<Config>(defaultConfig);

  const handleFontSizeChange = (size: number) => {
    setConfig((prev) => ({ ...prev, fontSize: size }));
  };

  const handleOnOffChange = (on: boolean) => {
    setConfig((prev) => ({ ...prev, on }));
  };

  const handlePaddingChange = (padding: number) => {
    setConfig((prev) => ({ ...prev, padding }));
  };

  const reset = () => {
    setConfig(defaultConfig);
  };

  const toggleRotation = () => {
    setConfig((prev) => ({
      ...prev,
      rotation: prev.rotation === "horizontal" ? "vertical" : "horizontal",
    }));
  };

  const toggleRight = () => {
    setConfig((prev) => ({
      ...prev,
      right: !prev.right,
    }));
  };

  return (
    <ConfigContext.Provider
      value={{
        config,
        reset,
        handleOnOffChange,
        handleFontSizeChange,
        handlePaddingChange,
        toggleRotation,
        toggleRight,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
