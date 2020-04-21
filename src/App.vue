<template>
    <div id="app">
        {{userInfo.erp}}
        {{userInfo.department}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userInfo: {
                    erp: "test@jd.com",
                    department: "测试部"
                }
            }
        },
        created() {
            this.getTest();
        },
        methods: {
            async getTest() {
                const {
                    data: res
                } = await this.$http.get('http://localhost:8080/api/hello');
                if (res.resultCode === 200) {
                    this.userInfo = res.data;
                    console.log("mock成功")
                } else {
                    console.log("mock失败")
                }
            }
        }
    }
</script>
