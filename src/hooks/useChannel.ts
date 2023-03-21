/*
 * @Author: xiangfu.wu
 * @Date: 2023-03-21 13:51:07
 * @Description: 🚀
 * @FilePath: /umi-test/src/hooks/useChannel.ts
 */

import { CLASS_NAME, DynamicClass, TAB } from "@/contants";
import { MainChannel } from "@/utils/main";
import { SubChannel } from "@/utils/sub";
import { useEffect, useRef } from "react";


export const useChannel = (
  channelType: CLASS_NAME,
  tabName: TAB,
  onMessageCallback: (msg: BroadMessage) => void
): MainChannel | SubChannel => {
  let channel: MainChannel | SubChannel;
  if(window['channel']) {
    channel = window['channel'];
  } else {
    channel = new DynamicClass[channelType](tabName);
    window['channel'] = channel;
  }
  const channelRef = useRef(channel);
  useEffect(() => {
    channelRef.current.on(onMessageCallback);
  }, []);

  return channelRef.current;
}