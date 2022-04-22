import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThumbnailPage } from './thumbnail.page';

describe('ThumbnailPage', () => {
  let component: ThumbnailPage;
  let fixture: ComponentFixture<ThumbnailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbnailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThumbnailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
