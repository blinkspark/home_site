#!/bin/bash
sudo killall -9 node
mv nohup.out nohup${date}.out
git pull
nohup sudo npm start &