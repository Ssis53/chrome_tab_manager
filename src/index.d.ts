import { ACTION, TAB } from "./contants"

declare global {
  interface Window {
    [propsName: string]: any
  }

  interface BroadMessage {
    sendOrigin ?: TAB,
    receiveTarget: TAB,
    action: ACTION,
    data: any
  }
}




