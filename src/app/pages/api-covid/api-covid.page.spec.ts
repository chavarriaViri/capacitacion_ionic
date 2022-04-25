import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApiCovidPage } from './api-covid.page';

describe('ApiCovidPage', () => {
  let component: ApiCovidPage;
  let fixture: ComponentFixture<ApiCovidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiCovidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApiCovidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
