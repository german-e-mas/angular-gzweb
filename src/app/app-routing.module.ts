import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetViewerComponent } from './asset-viewer/asset-viewer.component';
import { SceneManagerComponent } from './scene-manager/scene-manager.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'asset-viewer', component: AssetViewerComponent },
  { path: 'scene-manager', component: SceneManagerComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
