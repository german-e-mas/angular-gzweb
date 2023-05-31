import { Component, OnDestroy, OnInit } from '@angular/core';

import { AssetViewer, AssetViewerConfig } from 'gzweb';

@Component({
  selector: 'app-asset-viewer',
  templateUrl: './asset-viewer.component.html',
  styleUrls: ['./asset-viewer.component.scss']
})
export class AssetViewerComponent implements OnInit, OnDestroy {

  /**
   * Asset Viewer Reference
   */
  private assetViewer: AssetViewer;

  /**
   * Parsed from curl -X GET https://fuel.gazebosim.org/1.0/OpenRobotics/models/X1%20Config%201/tip/files
   *
   * You need the URL of all the resources you use.
   */
  private fileUrls: string[] = [
    'https://fuel.gazebosim.org/1.0/OpenRobotics/models/X1%20Config%201/tip/files/materials/textures/headlight.jpg',
    'https://fuel.gazebosim.org/1.0/OpenRobotics/models/X1%20Config%201/tip/files/materials/textures/led.jpg',
    'https://fuel.gazebosim.org/1.0/OpenRobotics/models/X1%20Config%201/tip/files/meshes/chassis.dae',
    'https://fuel.gazebosim.org/1.0/OpenRobotics/models/X1%20Config%201/tip/files/meshes/headlight.dae',
    'https://fuel.gazebosim.org/1.0/OpenRobotics/models/X1%20Config%201/tip/files/meshes/headlight_lamp.dae',
    'https://fuel.gazebosim.org/1.0/OpenRobotics/models/X1%20Config%201/tip/files/meshes/led_lamp.dae',
    'https://fuel.gazebosim.org/1.0/OpenRobotics/models/X1%20Config%201/tip/files/meshes/top_plate.dae',
    'https://fuel.gazebosim.org/1.0/OpenRobotics/models/X1%20Config%201/tip/files/meshes/wheel.dae',
    'https://fuel.gazebosim.org/1.0/OpenRobotics/models/X1%20Config%201/tip/files/model.config',
    'https://fuel.gazebosim.org/1.0/OpenRobotics/models/X1%20Config%201/tip/files/model.sdf',
  ];

  ngOnInit(): void {
    // Configuration passed to the Asset Viewer.
    const config: AssetViewerConfig = {
      elementId: 'container',
      scaleModel: true,
      enablePBR: true,
      addModelLighting: true,
    }

    this.assetViewer = new AssetViewer(config);

    // We need to provide all related files to the asset viewer. These come from the Fuel Server.
    this.assetViewer.renderFromFiles(this.fileUrls);
  }

  /**
   * Always remember to destroy the asset viewer to free its resources.
   */
  ngOnDestroy(): void {
    if (this.assetViewer) {
      this.assetViewer.destroy();
    }
  }

  /**
   * Required to resize the canvas.
   */
  resize() {
    if (this.assetViewer) {
      this.assetViewer.resize();
    }
  }
}
