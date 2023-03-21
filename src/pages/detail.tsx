import { SubChannel } from "@/utils/sub";
import { useEffect, useRef } from "react";
import { TAB } from "../contants";

const Detail = () => {
  const channel: { current: SubChannel } = useRef(new SubChannel(TAB.SUB_TWO));
  useEffect(() => {
    channel.current.on((msg) => {
      console.log(msg);
    })

    return () => {
      channel.current.close();
    }
  }, [])
  return (
    <div>
      <p>This is umi detail.</p>
    </div>
  );
};

export default Detail;
