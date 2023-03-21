import { ACTION, CLASS_NAME, TAB } from "@/contants";
import { useChannel } from "@/hooks/useChannel";
import { SubChannel } from "@/utils/sub";
import { useEffect, useRef } from "react";
import { useNavigate } from "umi";

const DocsPage = () => {
  console.log('DocsPage渲染了')
  // TODO: 逻辑复用
  // 已解决，详情见useChannelhooks
  const channel = useChannel(CLASS_NAME.SUB_CHANNEL, TAB.SUB_ONE, handleMessage);
  const navigate = useNavigate();

  function handleMessage(msg: BroadMessage) {
    console.log('sub one receive msg', msg);
    const { action, data: { path } } = msg;
    if(action === ACTION.JUMP_PAGE) {
      navigate(path);
    }
  }

  return (
    <div>
      <p>This is umi docs.</p>
    </div>
  );
};

export default DocsPage;
