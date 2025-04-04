import { motion } from "framer-motion";
import { ElementType } from "react";

const MotionWrap = (Component: ElementType, classNames: string) =>
  function HOC(props: any) {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${classNames} app__flex`}
      >
        <Component {...props} />
      </motion.div>
    );
  };

export default MotionWrap;
