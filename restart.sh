#!/bin/bash
sudo killall -9 node
git pull
nohup sudo npm start &