'use client'

import { useEffect } from 'react';

export default function Comp() {
  console.log("Hey YouTube NextJS App")

  useEffect(() => {
    fetch('http://localhost:8080').then((res) => {
    //   console.log(res);
    });
  }, []);

  return <h1>I am a component</h1>;
}
