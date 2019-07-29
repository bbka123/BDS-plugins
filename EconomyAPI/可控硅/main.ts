//支持库
import null;

//注册系统
const system = server.registerSystem(0, 0);
system.initialize = function() {
    server.log("EconomyAPI loaded");
//启动监听
    system.listenForEvent("minecraft:entity_created",onPlayerCreated);
    
}

system.shutdown = function() {
  //在此处进行结束工作
  closeDB();
  server.log("EconomyAPI unloaded");
}
