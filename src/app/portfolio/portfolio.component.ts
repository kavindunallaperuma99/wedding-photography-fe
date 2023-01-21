import { PortfolioService } from './../admin/services/portfolio.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../admin/model/portfolio.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  portfolios$: Observable<Portfolio[]>;
  constructor(private service: PortfolioService) {
    this.portfolios$ = this.service.get();
  }

  ngOnInit(): void {}
}
