import { Component } from '@angular/core';

import { SceneManager } from 'gzweb';

@Component({
  selector: 'app-scene-manager',
  templateUrl: './scene-manager.component.html',
  styleUrls: ['./scene-manager.component.scss']
})
export class SceneManagerComponent {

  /**
   * Websocket URL
   */
  public wsUrl = 'ws://localhost:9002';

  /**
   * Websocket Key
   */
  public authKey = '';

  /**
   * Scene Manager reference.
   */
  public sceneManager: SceneManager;

  /**
   * Connect to the Simulation.
   */
  public connect() {
    this.sceneManager = new SceneManager({
      websocketUrl: this.wsUrl,
      websocketKey: this.authKey,
      elementId: 'container',
    });
  }

  /**
   * Disconnect from the Simulation.
   */
  public disconnect() {
    if (this.sceneManager) {
      this.sceneManager.disconnect();
    }
  }

  /**
   * Required to resize the canvas.
   */
  public resize(): void {
    if (this.sceneManager) {
      this.sceneManager.resize();
    }
  }

  /**
   * Example of accessing the GzScene element of the Scene Manager.
   *
   * The SceneManager's Scene can be accessed this way, and special methods can be called.
   */
  public fog() {
    this.sceneManager.scene.addFog(0xffffff, 0.05, true);
  }

  /**
   * Example of a method exposed by the Scene Manager.
   *
   * Take a snapshot of the current canvas.
   */
  public snapshot() {
    this.sceneManager.snapshot();
  }

  /**
   * Example of a method exposed by the Scene Manager.
   *
   * Resets the view.
   */
  public resetView() {
    this.sceneManager.resetView();
  }
}
