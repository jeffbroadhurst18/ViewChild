import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
 
@Injectable()
export class MissionService {
 
  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();
 
  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();
 
  // Service message commands
  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }
 
  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }
}


//The mission component passes mission and causes it to be added to missionAnnouncedSource stream.  This also adds to missionAnnounced$ observable
//stream. Astronaut component subscibes to the missionAnnounced$ and when an entry is added to stream it does something with the value.
//Astronaut compnent passes astronaut to missionConfirmedSource stream. This also adds to missionConfirmed$ observable
//stream. Mission component subscribes to this observable and takes action when a value is passed into the stream.