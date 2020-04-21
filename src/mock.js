import Mock from 'mockjs'
// 返回体
export const createData = params => {
    return {"resultCode": 200, "message": "操作成功", data: params}
};
const helloData = {
    erp: "linhongcun@jd.com",
    department: "技术与数据中台"
};
Mock.mock('http://localhost:8080/api/hello', 'get', createData(helloData));

export default Mock;