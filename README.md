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

The following example assumes a [binary installation of Gazebo Garden on Ubuntu](https://gazebosim.org/docs/garden/install_ubuntu).

1. Run a Gazebo world, such as

```
gz sim -v 4 shapes.sdf
```

2. Run the websocket server
```
gz launch -v 4 /usr/local/share/gz/gz-launch6/configs/websocket.gzlaunch
```

3. Run this web server
```
ng serve
```

4. Navigate to http://localhost:4200 and click "Connect"
```
firefox http://localhost:4200
```
