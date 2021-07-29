import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:intl/intl.dart';
import 'package:timer_builder/timer_builder.dart';
import 'dart:async';

class Clock extends StatefulWidget {
  @override
  _ClockState createState() => _ClockState();
}

class _ClockState extends State<Clock> {
  @override
  void initState() {
    super.initState();
  }

  final String currentTime = getSystemTime();

  @override
  Widget build(BuildContext context) {
    return TimerBuilder.periodic(Duration(seconds: 1), builder: (context) {
      return Container(
        alignment: Alignment.center,
        color: Colors.black,
        // width: 800,
        // height: 400,
        child: Column(
          children: [
            Flexible(
              flex: 1,
              child: Container(
                  // color: Colors.blue,
                  // height: 50,
                  ),
            ),
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
                      color: Colors.red.shade900,
                      fontSize: 400,
                      fontWeight: FontWeight.normal,
                    ),
                  ),
                ),
              ),
            ),
            Flexible(
              flex: 1,
              child: Container(
                // color: Colors.blue,
                height: 10,
              ),
            ),
            Flexible(
              flex: 4,
              child: Row(
                // crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  Flexible(
                    flex: 2,
                    child: Container(
                      // color: Colors.white,
                      // width: 400,
                      // height: 50,
                      alignment: Alignment.bottomCenter,
                      child: FittedBox(
                        fit: BoxFit.fitHeight,
                        alignment: AlignmentDirectional.center,
                        child: Text(
                          "version 0.1",
                          textAlign: TextAlign.end,
                          style: TextStyle(
                              decoration: TextDecoration.none,
                              fontFamily: 'GamePlay',
                              color: Colors.red.shade900,
                              fontSize: 30,
                              fontWeight: FontWeight.normal),
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
                              color: Colors.red.shade900,
                              fontSize: 300,
                              fontWeight: FontWeight.normal),
                        ),
                      ),
                    ),
                  ),
                  Flexible(flex: 2, child: Container())
                ],
              ),
            ),
            Flexible(
              flex: 1,
              child: Container(
                  // color: Colors.blue,
                  // height: 50,
                  ),
            ),
          ],
        ),
      );
    });
  }
}

String getSystemTime() {
  var now = new DateTime.now();
  return new DateFormat("HH:mm").format(now);
}

String getSystemSeconds() {
  var now = new DateTime.now();
  return new DateFormat("ss").format(now);
}
