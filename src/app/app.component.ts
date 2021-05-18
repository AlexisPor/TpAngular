import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TpAngular';

  posts=[{
    title:"titre 1",
    content:"contenu blablabla",
    likeIts:0,
    created_at:new Date()
  },
  {
    title:"titre 2",
    content:"contenu pgvrhbbgzgegze",
    likeIts:0,
    created_at:new Date()
  },
  {
    title:"titre 3",
    content:"contenu jeux vidéos",
    likeIts:0,
    created_at:new Date()
  }]

}
