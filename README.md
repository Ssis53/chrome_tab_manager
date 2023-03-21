<!--
 * @Author: xiangfu.wu
 * @Date: 2023-03-21 14:27:33
 * @Description: 🚀
 * @FilePath: /umi-test/README.md
-->



# 项目简介

用**react hooks + typescrit + 面向对象思想**基于js的`BroadcastChannel`类实现的一个，通过浏览器主页签跨页签通信控制其他两个子页签的实践。



# 主要文件和逻辑简介

### src/index.d.ts

>因为用了es6的import语法，所以需要用`declare global {}`语法来定义window的全局类型，和发送信息的类型。



### src/contants.ts

>定义了tab页，action，classname(用于动态实例化)的枚举常量类型



### src/utils/base.ts

> 基类，继承自原生js的`BroadcastChannel`类，对原生的postMessage方法和onmessage发放进行了封装。



### src/utils/main.ts

> 主页签控制类，继承自基类，与子也签共享基类提供的发送信息、接受信息的方法，可扩展自己的特有方法，如不满足也可重写基类提供的方法。



### src/utils/sub.ts

> 子页签控制类，继承自基类，与子也签共享基类提供的发送信息、接受信息的方法，可扩展自己的特有方法，如不满足也可重写基类提供的方法。
>
> 子也签初始化完毕后应向主页签发送信息注册自己，所以在构造函数中加上了自己的逻辑。



### src/pages/index.tsx

> 主页签组件，通过自定义hooks `useChannel` 初始化夸页签通信。



### src/pages/docs.tsx

> 子页签1，通过自定义hooks `useChannel` 初始化夸页签通信。



### src/pages/detail.tsx

> 子页签2，通过自定义hooks `useChannel` 初始化夸页签通信。



### src/hooks/useChannel.ts

> 给组件提供初始化跨页签通信能力的hooks，接受**信道类型（主子信道）**、**页签名称**、**消息处理函数**三个参数。初始化信道并自动开启消息监听，避免同一个页签重复初始化信道；初始化完成后将信道实例返回给组件，使组件可以方便的调用信道实例的send方法以及其他方法。

