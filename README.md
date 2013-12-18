jqgrid-jersey-poc
=================

A Jersery 2 RESTful proof of concept to create jqgrid data

* this version uses gradle
* it is a multi project
* it is not deployed on jetty. We want it to deploy to a JEE6 Server

TODO:
1) we need to remove the jetty dependencies
2) remove the extra configuration from Jersey (WELD & H2k)
3) remove the H2K wiring annotations
4) mavenize the project