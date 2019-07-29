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
            parameters: [],
            handler(){
                const entity = this.entity;
                if (!entity) throw "仅玩家可用";
                const datas = Array.from(db.query(SELECT_MYMONEY,{}));
                let show:string = "";
                for(let data of datas){
                    show += `${mymone}\n`;
                }
                let name = getName(entity);
                system.executeCommand(`tellraw @a[name="${name}"] {"rawtext":[{"text":"我拥有 ${mymone} 元"}]}`,data=>{});
                //system.sendText(entity,"我拥有 ${mymone} 元");  
            }
        }as CommandOverload<[]>
    ]
    });
}
