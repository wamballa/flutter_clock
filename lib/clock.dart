import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:intl/intl.dart';
import 'package:timer_builder/timer_builder.dart';

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
            Container(
              height: 50,
            ),
            Expanded(
              child: Text(
                "${getSystemTime()}",
                style: TextStyle(
                  decoration: TextDecoration.none,
                  fontFamily: 'GamePlay',
                  color: Colors.red,
                  fontSize: 400,
                  fontWeight: FontWeight.normal,
                ),
              ),
            ),
            Container(
              height: 10,
            ),
            Expanded(
              child: Text(
                "${getSystemSeconds()}",
                style: TextStyle(
                    decoration: TextDecoration.none,
                    fontFamily: 'GamePlay',
                    color: Colors.red,
                    fontSize: 300,
                    fontWeight: FontWeight.normal),
              ),
            ),
            Container(
              height: 50,
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
