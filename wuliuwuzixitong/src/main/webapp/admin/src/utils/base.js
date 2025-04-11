const base = {
    get() {
        return {
            url : "http://localhost:8080/wuliuwuzixitong/",
            name: "wuliuwuzixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wuliuwuzixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "物资物流系统"
        } 
    }
}
export default base
