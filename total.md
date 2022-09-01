### github新项目去掉密码验证  
在设置远端仓库时改用ssh
>  git remote set-url origin git@github.com:ZihaoGaoo/hao-s-front-end.git

### git指令
1. 回滚后恢复  
通过`git reflog`查看本地记录，继续回滚到对应记录即可

2. git rebase  
`git rebase -i 分支`合并多个分支commit, -s表示保留commit合并，-f不保留commit