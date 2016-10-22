import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs';


@Injectable()
export class GithubService {
  private username ='erikmr';
  private client_id = '3687b2164b60c68fab51'
  private client_secret = 'cb279cb9a8bf8c12682fa8ed6dad551bb9cfea94'
  private auth =''
  constructor(private _http: Http) { 

    console.log("Github service Started..")
    this.auth = '?client_id=' + this.client_id
    this.auth += '&client_secret=' + this.client_secret 

  }
  getUser(){
    return this._http.get('https://api.github.com/users/' + this.username + this.auth)
      .map(res => res.json())
  }
  getRepos(){
    return this._http.get('https://api.github.com/users/' + this.username +'/repos' + this.auth)
      .map(res => res.json())
  }
  setUsername(username){
    this.username = username
    // this.getUser()
    // this.getRepos()
  }
}
