import 'package:flutter/material.dart';
import 'package:flutter_clock/clock.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Clock',
      theme: ThemeData(
        // WHy doesnt this work for everything?
        fontFamily: 'GamePlay',
      ),
      home: Clock(),
    );
  }
}
