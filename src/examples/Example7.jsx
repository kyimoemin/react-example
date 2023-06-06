import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";


const Paragraph = forwardRef(function Paragraph(props, ref) {


  const pRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      style: pRef.current.style,
      onClick: pRef.current.onclick
    };
  }, []);

  return <p ref={pRef}>{props.children}</p>;
});

export function Example7() {
  const ref = useRef();

  useEffect(() => {
    const p = ref.current;
    console.log("p", p);
    if (p)
      p.style.color = "#0f0";
  }, []);

  return <Paragraph ref={ref} >ref example</Paragraph>;
}

