import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service'
@Component({
  // moduleId: module.id,
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user:any;
  repos: any;
  username:string='erikmr';
  constructor(private _githubServices: GithubService) {
    this._githubServices.getUser().subscribe(user=>{
      this.user = user
    });
    this._githubServices.getRepos().subscribe(repos=>{
      this.repos = repos
    });

   }
   search(){
     console.log(this.username)
     this._githubServices.setUsername(this.username);
      this._githubServices.getUser().subscribe(user=>{
        this.user = user
      });
      this._githubServices.getRepos().subscribe(repos=>{
        this.repos = repos
      });     
   }
  ngOnInit() {
  }

}
