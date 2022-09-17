import React, { useState } from "react";
import styled from "styled-components";
import { motion, useSpring } from "framer-motion";

const Container = styled(motion.div)`
  position: fixed;
  width: ${({ width }) => `${width}px`};
  height: 100vh;
  touch-action: none;
  z-index: 80;
`;

const SidebarContainer = styled(motion.div)`
  position: fixed;
  background-color: ${({ color }) => `${color}`};
  width: ${({ width }) => `${width}px`};
  height: 100%;
  box-sizing: border-box;
  padding: 64px;
`;

const HamburgerContainer = styled(motion.div)`
  border-radius: 32px;
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  margin: 24px;
  cursor: pointer;
  z-index: 2;
  /* -webkit-tap-highlight-color: transparent; */
`;
const Line = styled(motion.div)`
  background-color: #000;
  width: ${({ width }) => `${width}px`};
  height: 2px;
  margin: 2px 14px;
  border-radius: 8px;
`;

const HamburgerButton = ({ x, width, isOpen, setOpen }) => {
  return (
    <HamburgerContainer
      onTap={() => {
        setOpen(!isOpen);
        isOpen ? x.set(-width) : x.set(0);
      }}
    >
      <Line width={20} />
      <Line width={16} />
      <Line width={12} />
    </HamburgerContainer>
  );
};

export const Sidebar = ({ width = 250, color = "#fff", children }) => {
  const [isOpen, setOpen] = useState(false);
  const x = useSpring(0, { stiffness: 400, damping: 40 });

  return (
    <Container
      width={isOpen ? 250 : 30}
      onPan={(e, pointInfo) => {
        if (pointInfo.point.x < width) x.set(pointInfo.point.x - width);
      }}
      onPanEnd={(e, pointInfo) => {
        if (Math.abs(pointInfo.velocity.x) > 1000 && !isOpen) {
          if (pointInfo.velocity.x > 0) {
            x.set(0);
          } else x.set(-width);
        } else {
          if (Math.abs(x.current) < width / 2) {
            x.set(0);
            // setOpen(true)
          } else {
            x.set(-width);
            // setOpen(false)
          }
        }
      }}
    >
      <HamburgerButton x={x} width={width} isOpen={isOpen} setOpen={setOpen} />
      <SidebarContainer
        color={color}
        width={width}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 40,
        }}
        initial={{ x: -width }}
        style={{ x }}
      >
        {children}
      </SidebarContainer>
    </Container>
  );
};
