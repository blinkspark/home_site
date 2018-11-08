#!/bin/bash
sudo killall -9 node
sudo git fetch
sudo git pull
nohup sudo npm start &