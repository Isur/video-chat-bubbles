import { FC, useContext } from "react";
import { Bubble } from "./reducer";
import { ConfigContext } from "@/configurator";

interface BubbleViewProps {
  bubble: Bubble;
}

export const BubbleView: FC<BubbleViewProps> = ({ bubble }) => {
  const config = useContext(ConfigContext);

  return (
    <div
      style={{
        fontSize: config.config.fontSize,
        padding: config.config.padding,
        textAlign: config.config.right ? "right" : "left",
      }}
      className="min-w-0 max-w-full bg-white rounded-md text-black whitespace-pre text-pretty"
    >
      {bubble.text}
    </div>
  );
};
