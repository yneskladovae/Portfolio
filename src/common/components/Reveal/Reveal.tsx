import React, {ReactNode, useEffect, useRef} from 'react';
import {motion, useAnimation, useInView} from "framer-motion";

type RevealPropsType = {
  children: ReactNode
  width?: 'fit content' | '100%'
}

export const Reveal = ({children, width = 'fit content'}: RevealPropsType) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
      slideControls.start('visible')
    }
  }, [isInView])

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial={'hidden'}
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        // viewport={{amount: 0.2}}
        // whileInView='visible'
      >
        {children}
      </motion.div>
    {/*  <motion.div*/}
    {/*    variants={{*/}
    {/*      hidden: { left: 0 },*/}
    {/*      visible: { left: '100%' },*/}
    {/*    }}*/}
    {/*    initial={'hidden'}*/}
    {/*    animate={slideControls}*/}
    {/*    transition={{ duration: 0.5, ease: 'easeIn' }}*/}
    {/*    style={{*/}
    {/*      position: 'absolute',*/}
    {/*      top: 4,*/}
    {/*      bottom: 4,*/}
    {/*      left: 0,*/}
    {/*      right: 0,*/}
    {/*      zIndex: 50,*/}
    {/*      opacity: 1,*/}
    {/*      background:"#c6ff00"*/}
    {/*    }}*/}
    {/*  />*/}
    </div>
  );
};
