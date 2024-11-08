import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environment/environment';
import { TeamDto } from '../dtos/TeamDto';

@Injectable()
export class MyTeamService {

  constructor(private httpClient : HttpClient) { }

  getMyTeam() : Observable<TeamDto>{
    return this.httpClient.get(environment.apiUrl + 'Team/MyTeam').pipe(
      map((responses : any) => responses.results)
    ) as Observable<TeamDto>;
  }
}
