import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApiImagenesPage } from './api-imagenes.page';

describe('ApiImagenesPage', () => {
  let component: ApiImagenesPage;
  let fixture: ComponentFixture<ApiImagenesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiImagenesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApiImagenesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
