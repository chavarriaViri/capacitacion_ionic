import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApiJuegosPage } from './api-juegos.page';

describe('ApiJuegosPage', () => {
  let component: ApiJuegosPage;
  let fixture: ComponentFixture<ApiJuegosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiJuegosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApiJuegosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
