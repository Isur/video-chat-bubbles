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
  return (
    <div
      style={{ alignItems: config.right ? "end" : "start" }}
      className="max-w-full bg-screen h-full flex flex-col items-start justify-end gap-5 p-4"
    >
      <AnimatePresence>
        {[...bubbles]
          .filter((bubble) => bubble.text != "")
          .map((bubble) => (
            <motion.div
              layout
              key={bubble.id}
              initial={{ y: 200 }}
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
