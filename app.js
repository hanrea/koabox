import Koa  from 'koa';

//Middle Ware
import {static,vhost} from "./Models/index";



//主服务
const app = new Koa();

// Vhost api
const apiVhost = new Koa();

//Short URL Vhost
const uriVhost = new Koa();


//Proyx URL Vhost
const pxyVhost = new Koa();

//通用前置中间件
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${new Date()}  ${ctx.method} : ${ctx.url} - ${ms}ms`);
});

//api 虚拟机
server.use(vhost('api.example.com', apiVhost));

//短网址虚拟机
server.use(vhost('api.short.com', uriVhost));

//反代虚拟机
server.use(vhost(/\.pxy\.com$/, pxyVhost));

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});


//监听 IPv4
app.listen(3000,"0.0.0.0");