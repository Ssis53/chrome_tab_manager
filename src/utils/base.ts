/*
 * @Author: xiangfu.wu
 * @Date: 2023-03-17 19:32:18
 * @Description: 🚀
 * @FilePath: /umi-test/src/utils/base.ts
 */

import { TAB } from "@/contants";

export class Base extends BroadcastChannel {
  tabName: TAB = TAB.NULL;

  constructor(tabName: TAB) {
    // TODO: 如何避免重复执行super？ 避免重复执行不在这里做？在一个统一的Hooks中实例化子类，然后在那里做？
    // 已解决，详情见useChannel hooks
    console.log('Base的构造函数执行了')
    super('umi-channel');
    this.tabName = tabName;
    window['channel'] = this;
    console.log(`${this.tabName} tab channel has been init`, this);
  }

  on(func: (msg: BroadMessage) => void) {
    this.onmessage = ({ data }: { data: BroadMessage }) => {
      if(data.receiveTarget !== this.tabName) {
        // 如果当前tab不是接收者，则过滤掉此次信息
        return;
      }
      func(data)
    }
  }

  send(msg: BroadMessage) {
    let message: BroadMessage = {
      ...msg,
      sendOrigin: this.tabName
    }
    this.postMessage(message);
  }
}