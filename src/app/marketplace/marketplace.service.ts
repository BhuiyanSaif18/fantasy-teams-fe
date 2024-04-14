import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarketplacePlayerDto } from '../dtos/MarketplacePlayerDto';
import { Observable, map } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable()
export class MarketplaceService {

  constructor(private httpClient : HttpClient) { }
  getMarketplacePlayers() : Observable<MarketplacePlayerDto[]>{
    return this.httpClient.get(environment.apiUrl + 'MarketPlace/Players').pipe(
      map((responses : any) => responses.results)
    ) as Observable<MarketplacePlayerDto[]>
  }
}
