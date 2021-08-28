/// Version 0.4 - hourly gif added

import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:intl/intl.dart';
import 'dart:async';
import 'dart:math';

class Clock extends StatefulWidget {
  @override
  _ClockState createState() => _ClockState();
}

class _ClockState extends State<Clock> {
  @override
  void initState() {
    startTimer();
    super.initState();
  }

  Color textColor = Colors.red.shade900;
  bool isShowingAnimation = false;
  bool isShowingClock = true;
  String imageName = '';

  void startTimer() {
    imageName = getRandomImage();
    const oneSec = const Duration(seconds: 1);
    Timer.periodic(
      oneSec,
      (Timer timer) => setState(
        () {
          DateTime now = DateTime.now();
          if (isShowingClock) {
            // if (now.second % 5 == 0) {
            if (now.minute == 0) {
              isShowingClock = !isShowingClock;
              imageName = getRandomImage();
            }
          }
          if (!isShowingClock) {
            if (now.second == 0) {
              isShowingClock = true;
            }
          }
        },
      ),
    );
  }

  String getRandomImage() {
    List<String> imageFiles = [
      'images/0.gif',
      'images/1.gif',
      'images/2.gif',
      'images/3.gif',
      'images/4.gif',
      'images/5.gif',
      'images/6.gif',
      'images/7.gif',
      'images/8.gif',
      'images/9.gif',
      'images/10.gif',
      'images/11.gif',
      'images/12.gif',
      'images/13.gif',
      'images/14.gif',
      'images/15.gif',
      'images/16.gif',
      'images/17.gif',
      'images/18.gif',
      'images/19.gif',
      'images/20.gif',
    ];
    int r = Random().nextInt(imageFiles.length - 1);
    return imageFiles[r];
  }

  @override
  Widget build(BuildContext context) {
    if (isShowingClock) {
      return clockStuff();
    } else
      return aimationStuff();
  }

  String getSystemTime() {
    var now = new DateTime.now();
    return new DateFormat("HH:mm").format(now);
  }

  String getSystemSeconds() {
    DateTime now = DateTime.now();
    return new DateFormat("ss").format(now);
  }

  Container aimationStuff() {
    return Container(
      color: Colors.black,
      padding: EdgeInsets.all(50),
      child: FittedBox(
        child: Image.asset(imageName),
        fit: BoxFit.cover,
      ),
    );
  }

  Container clockStuff() {
    return Container(
      color: Colors.black,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Flexible(
            flex: 6,
            child: Container(
              child: FittedBox(
                fit: BoxFit.fitHeight,
                child: Text(
                  "${getSystemTime()}",
                  style: TextStyle(
                    decoration: TextDecoration.none,
                    fontFamily: 'GamePlay',
                    color: textColor,
                    fontSize: 400,
                    fontWeight: FontWeight.normal,
                  ),
                ),
              ),
            ),
          ),
          // Spacer(flex: 1),
          Flexible(
            flex: 4,
            child: Row(
              // crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Flexible(
                  flex: 2,
                  child: Container(
                    alignment: Alignment.bottomCenter,
                    child: FittedBox(
                      fit: BoxFit.fitHeight,
                      alignment: AlignmentDirectional.center,
                      child: Padding(
                        padding: EdgeInsets.all(7),
                        child: Text(
                          "version 0.4",
                          textAlign: TextAlign.end,
                          style: TextStyle(
                              decoration: TextDecoration.none,
                              fontFamily: 'GamePlay',
                              color: textColor,
                              fontSize: 10,
                              fontWeight: FontWeight.normal),
                        ),
                      ),
                    ),
                  ),
                ),
                Flexible(
                  flex: 3,
                  child: Container(
                    // color: Colors.teal,
                    alignment: Alignment.center,
                    child: FittedBox(
                      fit: BoxFit.fitHeight,
                      child: Text(
                        "${getSystemSeconds()}",
                        textAlign: TextAlign.center,
                        style: TextStyle(
                            decoration: TextDecoration.none,
                            fontFamily: 'GamePlay',
                            color: textColor,
                            fontSize: 300,
                            fontWeight: FontWeight.normal),
                      ),
                    ),
                  ),
                ),
                Flexible(
                  flex: 2,
                  child: Container(),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
