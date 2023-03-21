/*
 * @Author: xiangfu.wu
 * @Date: 2023-03-17 19:01:28
 * @Description: 🚀
 * @FilePath: /umi-test/src/utils/sub.ts
 */

import { ACTION, TAB } from "../contants";
import { Base } from "./base";

export class SubChannel extends Base {
  constructor(tabName: TAB) {
    super(tabName);
    this.send({
      sendOrigin: this.tabName,
      receiveTarget: TAB.MAIN,
      action: ACTION.INIT_DONE,
      msg: ''
    })
  }
}