/*
 * @Author: xiangfu.wu
 * @Date: 2023-03-17 20:12:34
 * @Description: 🚀
 * @FilePath: /umi-test/src/contants.ts
 */

import { MainChannel } from "./utils/main";
import { SubChannel } from "./utils/sub";

export enum TAB {
  MAIN = 'MAIN',
  SUB_ONE = 'SUB_ONE',
  SUB_TWO = 'SUB_TWO',
  ALL = 'ALL',
  NULL = 'NULL'
}

export enum ACTION {
  INIT_DONE = 'INIT_DONE',
  RENDER_DONE = 'RENDER_DONE',
  JUMP_PAGE = 'JUMP_PAGE'
}

export enum CLASS_NAME {
  MAIN_CHANNEL = 'MainChannel',
  SUB_CHANNEL = 'SubChannel'
}

export const DynamicClass = {
  [CLASS_NAME.MAIN_CHANNEL]: MainChannel,
  [CLASS_NAME.SUB_CHANNEL]: SubChannel
}
