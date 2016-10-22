import { Component, OnInit , ElementRef, Attribute} from '@angular/core';
import { GithubService } from '../../services/github.service'
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user : any;
  repos : any;
  _username : string='';
  @Attribute("usernameToFind") usernameToFind: string;
  constructor(
    private _githubServices: GithubService, 
    private elementRef: ElementRef
    ) {
    console.log(elementRef.nativeElement.getAttribute('usernameToFind') )
    // console.log(this.usernameToFind)
    this._username =  elementRef.nativeElement.getAttribute('username') || "erikmr"
    this.search(this._username)

   }
   public search(username){
     //console.log(username)
     this._username = username
     this._githubServices.setUsername(this._username);
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
