
import { MainChannel } from '@/utils/main';
import { createRef, useEffect, useRef, useState } from 'react';
import { ACTION, CLASS_NAME, TAB } from '../contants';
import yayJpg from '../assets/yay.jpg';
import { useChannel } from '@/hooks/useChannel';

export default function HomePage() {
  console.log('HomePage渲染了啊');
  let channel = useChannel(CLASS_NAME.MAIN_CHANNEL, TAB.MAIN, handleMessage);
  function handleMessage(msg: BroadMessage) {
    console.log('mian receive msg', msg);
  }
  return (
    <div>
      {/* <h2>Yay! Welcome to umi!</h2> */}
      <p>
        <img onClick={() => {console.log(channel);channel.send({
          receiveTarget: TAB.SUB_ONE,
          action: ACTION.JUMP_PAGE,
          data: {
            path: '/other'
          }
        })}} src={yayJpg} width="388" />
      </p>
      {/* <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p> */}
    </div>
  );
}
