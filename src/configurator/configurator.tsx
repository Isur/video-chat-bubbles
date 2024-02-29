import { FC, useContext } from "react";
import { RefreshCw, SkipForward, SkipBack } from "lucide-react";
import { ConfigContext } from "./configContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/modeToggle";

interface ConfiguratorProps {}

export const Configurator: FC<ConfiguratorProps> = () => {
  const config = useContext(ConfigContext);

  const onoffLabel = config.config.on ? "STOP" : "START";

  return (
    <div className="flex flex-col flex-wrap gap-5 bg-background h-full w-full max-w-[300px] p-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Configurator
      </h1>
      <div className="flex flex-row items-center gap-5">
        <ModeToggle />
        <Button variant="outline" size="icon" onClick={config.toggleRotation}>
          <RefreshCw className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={config.toggleRight}>
          {config.config.right ? (
            <SkipForward className="h-4 w-4" />
          ) : (
            <SkipBack className="h-4 w-4" />
          )}
        </Button>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="fontSize">Font Size</Label>
        <Input
          type="number"
          id="fontSize"
          placeholder="Font Size"
          value={config.config.fontSize}
          onChange={(e) =>
            config.handleFontSizeChange(parseInt(e.target.value))
          }
        />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="padding">Padding</Label>
        <Input
          type="number"
          id="padding"
          placeholder="Padding"
          value={config.config.padding}
          onChange={(e) => config.handlePaddingChange(parseInt(e.target.value))}
        />
      </div>

      <Button variant="outline" onClick={config.reset}>
        Reset
      </Button>

      <Button
        variant="default"
        onClick={() => config.handleOnOffChange(!config.config.on)}
      >
        {onoffLabel}
      </Button>
    </div>
  );
};
