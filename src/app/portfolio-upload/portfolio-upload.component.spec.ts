import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';

import { PortfolioUploadComponent } from './portfolio-upload.component';

describe('PortfolioUploadComponent', () => {
  let component: PortfolioUploadComponent;
  let fixture: ComponentFixture<PortfolioUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioUploadComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
