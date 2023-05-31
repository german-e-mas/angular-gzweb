import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneManagerComponent } from './scene-manager.component';

describe('SceneManagerComponent', () => {
  let component: SceneManagerComponent;
  let fixture: ComponentFixture<SceneManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SceneManagerComponent]
    });
    fixture = TestBed.createComponent(SceneManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
