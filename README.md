# eslint-config-dc

定川前端通用基础eslint规则

## 安装
1. 连接esay-connect
2. ref: http://192.168.2.130:9001/package/@dc/eslint-config-dc
    ```bash
    # 设置npm下载源为定川私有源
    npm config set registry http://192.168.2.130:9000
    # 安装eslint配置包
    npm install @dc/eslint-config-dc --save-dev 
    ```

## 配置
项目根目录下创建`.eslintignore`,内容为：
```
/*
!/src

# It is not possible to re-include a file if a parent directory of that file is excluded. 
# ref: https://git-scm.com/docs/gitignore#_pattern_format
```

项目根目录下创建`.eslintrc.json`,内容为：
```json
{
    "extends": "@dc/dc/vue"
}
```

vscode安装eslint插件，之后在vscode的配置中添加：
```json
// 文件保存时执行eslint的fix功能
"editor.codeActionsOnSave": {
    "source.fixAll": true,
}
```