import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../global/auth/auth.service';

@Component({
  selector: 'cc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects = [
    { title : 'Tarefas Coletivo.Co', tasks:[
        { title: 'Otimizar syncronizador usando aprendizado do AllBoardsCalendar', tags: ['Planejamento', 'Design'] },
        { title: 'Otimizar syncronizador usando aprendizado do AllBoardsCalendar', tags: ['Planejamento', 'Design'], image: 'http://cdn3.pitchfork.com/news/70006/4e42edc5.jpg' } ]
    },
    { title : 'Tarefas Empresa Livre', tasks:[
        { title: 'Otimizar syncronizador usando aprendizado do AllBoardsCalendar', tags: ['Planejamento', 'Design'] },
        { title: 'Otimizar syncronizador usando aprendizado do AllBoardsCalendar', tags: ['Planejamento', 'Design'] } ]
    },
    { title : 'Tarefas Dots', tasks:[
        { title: 'Otimizar syncronizador usando aprendizado do AllBoardsCalendar', tags: ['Planejamento', 'Design'], image: 'http://www.geek.com/wp-content/uploads/2017/01/daft-punk-backs-650x366.png' },
        { title: 'Otimizar syncronizador usando aprendizado do AllBoardsCalendar', tags: ['Planejamento', 'Design'] } ]
    }
  ];

  constructor(private router: Router,
    private _authService: AuthService)
  {
  }

  ngOnInit() {
  }

  addProject() {
    localStorage.setItem('redirectTo', 'add');
    this.router.navigate(['add']);
  }

}
