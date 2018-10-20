import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss']
})
export class HomeIndexComponent implements OnInit {

  
  constructor(private sidebarService : SidebarService) {

   

   }

  ngOnInit() {
  }

}
