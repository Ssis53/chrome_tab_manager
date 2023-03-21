/*
 * @Author: xiangfu.wu
 * @Date: 2023-03-17 19:01:20
 * @Description: 🚀
 * @FilePath: /umi-test/src/utils/main.ts
 */

import { TAB } from "@/contants";
import { Base } from "./base";

export class MainChannel extends Base {
  constructor(tabName ?: TAB) {
    console.log('MainChannel的构造函数执行了');
    super(tabName || TAB.MAIN);
  }
}


