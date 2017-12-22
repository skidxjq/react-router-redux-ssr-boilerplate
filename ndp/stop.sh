echo "kill all"
pm2 kill
ps -ef |grep 'node' | xargs kill -9