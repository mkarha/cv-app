import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HobbiesPage } from './hobbies.page';

describe('HobbiesPage', () => {
  let component: HobbiesPage;
  let fixture: ComponentFixture<HobbiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HobbiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
