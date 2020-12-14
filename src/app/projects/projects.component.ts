import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projects } from './projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  title = 'Projects';
  projects;
  readonly apiURL : string;

  constructor(private http : HttpClient) { 
    this.apiURL == 'https://api.github.com/';
  } 

  listarTodosProjetos() {
    this.http.get(`https://api.github.com/users/KaiqueJuvencio/repos`)
      .subscribe(resultado => {
          this.projects = resultado;
          console.log(typeof(resultado));
        },
        erro => {
          if(erro.status == 404){
            alert('Algo de errado aconteceu!');
          }
        }
      );
  }

  adicionarProduto() {
    var produto = { nome : "" };

    this.http.post(`https://api.github.com/users/KaiqueJuvencio/repos`, produto)
      .subscribe(
        resultado => {
          console.log(resultado);
        },
        erro => {
          if(erro.status == 400) {
            console.log(erro);
          }
        }
      );
  }

  ngOnInit() {
  }

}
