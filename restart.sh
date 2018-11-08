#!/bin/bash
sudo killall -9 node
sudo git pull
nohup sudo npm start &