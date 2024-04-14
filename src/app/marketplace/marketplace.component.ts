import { Component, OnDestroy, OnInit } from '@angular/core';
import { MarketplaceService } from './marketplace.service';
import { MarketplacePlayerDto } from '../dtos/MarketplacePlayerDto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit, OnDestroy {
  marketplacePlayers : MarketplacePlayerDto[] = [];
  subscription = new Subscription();
  constructor(private marketplaceService : MarketplaceService) {
    
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription.add(this.marketplaceService.getMarketplacePlayers().subscribe(x => {
      this.marketplacePlayers = x;
    }))
  }

}
