import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeamProjectPage } from './team-project.page';

describe('TeamProjectPage', () => {
  let component: TeamProjectPage;
  let fixture: ComponentFixture<TeamProjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamProjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamProjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
