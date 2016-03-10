#!/usr/bin/env bash

#mysql -uroot -ppassword information_schema < SQL > tmp

for i in $(cat tmp | grep -v util)
do
    sed -r -i "s/ws_.*/$i;/" DROP_ALL_FROM_TABLE
    mysql -uroot -ppassword information_schema < DROP_ALL_FROM_TABLE
done