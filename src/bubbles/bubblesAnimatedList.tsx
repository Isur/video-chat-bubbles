import { FC } from "react";
import { Bubble } from "./reducer";
import { BubbleView } from "./bubble";
import { motion, AnimatePresence } from "framer-motion";

interface BubblesAnimatedListProps {
  bubbles: Bubble[];
}

export const BubblesAnimatedList: FC<BubblesAnimatedListProps> = ({ bubbles }) => {
return (
    <div className="max-w-[500px] h-full flex flex-col items-end justify-end gap-5 p-4">
      <AnimatePresence mode='popLayout'>
        {[...bubbles].filter(bubble => bubble.text != "").map((bubble) => (
          <motion.div 
            layout
            key={bubble.id}
            style={{ originX: 1 }}
            initial={{opacity: 0, scale: 0.8 }} 
            animate={{opacity: 1, scale: 1.0 }} 
            transition={{ duration: 0, layout: { duration: 0.1 }}}
            exit={{opacity: 0, transition: { duration: 1 } }} >
              <BubbleView bubble={bubble} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
