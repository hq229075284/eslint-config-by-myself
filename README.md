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
