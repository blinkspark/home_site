#!/bin/bash
cur_date="`date +%Y-%m-%d`"
sudo killall -9 node
mv nohup.out nohup${cur_date}.out
git pull
nohup sudo npm start &