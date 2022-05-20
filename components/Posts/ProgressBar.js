import { motion, useTransform, useViewportScroll } from "framer-motion";
import styled from "styled-components";

const ProgressBarDiv = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  background: linear-gradient(135deg, #6699ff 0%, #ff3366 100%);
  height: 5px;
  transition: 0.2s ease;
  z-index: 3;
`;

export const ProgressBar = () => {
  const { scrollYProgress } = useViewportScroll();
  const progressValue = useTransform(
    scrollYProgress,
    (value) => `${value * 100}%`
  );

  return <ProgressBarDiv style={{ width: progressValue }} />;
};
