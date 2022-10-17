import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileManagerComponentComponent } from './file-manager-component.component';

describe('FileManagerComponentComponent', () => {
  let component: FileManagerComponentComponent;
  let fixture: ComponentFixture<FileManagerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileManagerComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileManagerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
