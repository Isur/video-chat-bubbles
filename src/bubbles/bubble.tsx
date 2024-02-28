import { FC } from "react";
import { Bubble } from "./reducer";

interface BubbleViewProps {
  bubble: Bubble;
}

export const BubbleView: FC<BubbleViewProps> = ({ bubble }) => {
  return (
    <div className="p-5 max-w-[400px] bg-white text-3xl rounded-md text-black break-words text-right">
        {bubble.text}
    </div>
  )
}
