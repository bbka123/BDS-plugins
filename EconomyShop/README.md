# EconomyAPI

## Introduction
This is a basic economic plugin.It can provide basic economic functions for your server.If you want to use it, you must use MCPE 1.12 and above.

## Basic Information
version: 1.0.0</br>
api: 1.0.0

## Usage API
You must first import this package
```
import com.bbka1012.economyapi.EconomyAPI
```

You must call this method to get an instance that can be manipulated.
```
EconomyAPI.getInstance()
```

Finally, you can call other methods.

## Methods List
```
boolean EconomyAPI.exists(String name, int money)
boolean EconomyAPI.exists(Player player, int money)
//金币系统API
boolean EconomyAPI.setPlayerMoney(String name, int money)
boolean EconomyAPI.setPlayerMoney(Player player, int money)
boolean EconomyAPI.addPlayerMoney(String name, int money)
boolean EconomyAPI.addPlayerMoney(Player player, int money)
boolean EconomyAPI.reducePlayerMoney(String name, int money)
boolean EconomyAPI.reducePlayerMoney(Player player, int money)
int EconomyAPI.myMoney(String name)
int EconomyAPI.myMoney(Player player)
//点券系统API
boolean EconomyAPI.setPlayerPoint(String name, int money)
boolean EconomyAPI.setPlayerPoint(Player player, int money)
boolean EconomyAPI.addPlayerPoint(String name, int money)
boolean EconomyAPI.addPlayerPoint(Player player, int money)
boolean EconomyAPI.reducePlayerPoint(String name, int money)
boolean EconomyAPI.reducePlayerPoint(Player player, int money)
int EconomyAPI.myPoint(String name)
int EconomyAPI.myPoint(Player player)
```

## Bug feedback and communication
* E-mail: bbka1012@163.com
* Link ID: bbka1012

