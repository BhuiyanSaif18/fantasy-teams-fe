import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TeamDto } from '../dtos/TeamDto';
import { MyTeamService } from './my-team.service';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss']
})
export class MyTeamComponent {
  myTeam$ = this.myTeamService.getMyTeam();
  constructor(private myTeamService : MyTeamService) {
  }
}
