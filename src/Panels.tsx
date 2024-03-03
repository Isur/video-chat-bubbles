import { useContext } from "react";
import { BubblesContainer } from "./bubbles";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import { ConfigContext, Configurator } from "./configurator";
import { Notes } from "./notes";

export const Panels = () => {
  const { config } = useContext(ConfigContext);
  return (
    <div className="h-screen">
      <ResizablePanelGroup direction={config.rotation}>
        <ResizablePanel>
          <ResizablePanelGroup
            direction={
              config.rotation == "horizontal" ? "vertical" : "horizontal"
            }
          >
            <ResizablePanel>
              <BubblesContainer />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel>
              <Notes />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <Configurator />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
