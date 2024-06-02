import { FC, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bubble } from "./reducer";
import { BubbleView } from "./bubble";
import { ConfigContext } from "@/configurator";

interface BubblesAnimatedListProps {
  bubbles: Bubble[];
}

export const BubblesAnimatedList: FC<BubblesAnimatedListProps> = ({
  bubbles,
}) => {
  const { config } = useContext(ConfigContext);
  const bubblesArray = config.top ? [...bubbles].reverse() : [...bubbles];
  return (
    <div
      style={{
        alignItems: config.right ? "end" : "start",
        justifyContent: config.top ? "start" : "end",
      }}
      className="max-w-full bg-blue-500 h-full flex flex-col items-start gap-5 p-4"
    >
      <AnimatePresence>
        {bubblesArray
          .filter((bubble) => bubble.text != "")
          .map((bubble) => (
            <motion.div
              layout
              key={bubble.id}
              initial={{ y: config.top ? -200 : 200 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.2, layout: { duration: 0.2 } }}
              exit={{ opacity: 0, transition: { duration: 1.5 } }}
            >
              <BubbleView bubble={bubble} />
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};
