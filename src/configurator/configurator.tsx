import { FC, useContext } from "react";
import {
  RefreshCw,
  SkipForward,
  SkipBack,
  ArrowBigUp,
  ArrowBigDown,
  HelpCircleIcon,
} from "lucide-react";
import { ConfigContext } from "./configContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/modeToggle";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            config.updateSettings({
              rotation:
                config.config.rotation == "horizontal"
                  ? "vertical"
                  : "horizontal",
            })
          }
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => config.updateSettings({ right: !config.config.right })}
        >
          {config.config.right ? (
            <SkipForward className="h-4 w-4" />
          ) : (
            <SkipBack className="h-4 w-4" />
          )}
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={() => config.updateSettings({ top: !config.config.top })}
        >
          {config.config.top ? (
            <ArrowBigUp className="h-4 w-4" />
          ) : (
            <ArrowBigDown className="h-4 w-4" />
          )}
        </Button>
        <Button variant="outline" size="icon">
          <Dialog>
            <DialogTrigger>
              <Button variant="outline" size="icon">
                <HelpCircleIcon className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Info</DialogTitle>
                <DialogDescription>
                  <p>
                    This is a simple app to display bubble messages like in
                    communication apps. You can configure the settings to your
                    liking. You have also notepad to write down some notes
                    before you start typing. Might be useful for recording
                    videos.
                  </p>
                  <br />
                  <p>All settings are saved in local storage.</p>
                  <br />
                  <p>
                    Author:{" "}
                    <a
                      href="https://isur.dev"
                      target="_blank"
                      className="underline"
                    >
                      Artur Bednarczyk - Isur
                    </a>
                  </p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
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
            config.updateSettings({ fontSize: parseInt(e.target.value) })
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
          onChange={(e) =>
            config.updateSettings({ padding: parseInt(e.target.value) })
          }
        />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="time">Time [ms]</Label>
        <Input
          type="number"
          id="time"
          step="500"
          placeholder="Time in MS"
          value={config.config.time}
          onChange={(e) =>
            config.updateSettings({ time: parseInt(e.target.value) })
          }
        />
      </div>

      <Button variant="outline" onClick={config.reset}>
        Reset
      </Button>

      <Button
        variant="default"
        onClick={() => config.updateSettings({ on: !config.config.on })}
      >
        {onoffLabel}
      </Button>
    </div>
  );
};
