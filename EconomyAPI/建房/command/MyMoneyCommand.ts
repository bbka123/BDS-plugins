import 
let system;
export function MymoneyReg(sys) {
    system = sys;
    server.log("mymoney块已加载");
    //注册查看money指令
    system.registerCommand("mymoney",{
        description:"查看我的money",
        permission:0,
        overloads:[{
            parameters:[{
                name:"name",
                type:"string"
            }],
        handler([$name]){
            const entity = this.entity;
            if (!entity) throw "无法在控制台使用";
            const
