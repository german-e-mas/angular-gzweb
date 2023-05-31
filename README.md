# Angular Gzweb

This is a sample Angular application that uses [Gzweb](https://github.com/gazebo-web/gzweb/tree/gzweb2).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

Then, `gzweb` was installed by doing `npm install gzweb`.

## Development server

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`.

## Asset Viewer

This is used to view a single Model or World. Note that this requires you to input all the related URLs you will need. You can get these files from the [Gazebo App](https://app.gazebosim.org/) (which uses Gzweb as well!).

## Scene Manager

This is used to connect to a live simulation. Make sure you are running one and launching a Websocket server before connecting.

```
gz sim -v 4 path/to/world.sdf
```

```
gz launch -v 4 path/to/gz-launch/examples/websocket.gzlaunch -v 4
```