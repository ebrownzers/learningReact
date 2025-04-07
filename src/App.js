import { useState, useEffect } from "react";

function Epoch() {
  const [epoch, setEpoch] = useState(~~(Date.now() / 1000));
  useEffect(() => {
    const id = setInterval(() => {
      setEpoch(~~(Date.now() / 1000));
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <>
      <h1>epoch: {epoch}</h1>
    </>
  );
}

export default function App() {
  return <Epoch />;
}
