import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetViewerComponent } from './asset-viewer.component';

describe('AssetViewerComponent', () => {
  let component: AssetViewerComponent;
  let fixture: ComponentFixture<AssetViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetViewerComponent]
    });
    fixture = TestBed.createComponent(AssetViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
