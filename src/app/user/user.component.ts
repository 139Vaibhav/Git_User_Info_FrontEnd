import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { GithubServiceService } from '../github-service.service';
import { RepositoryComponent } from '../repository/repository.component';
import { RepoArray } from '../user';
import { UserArray } from '../userInfo';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = 'Github Search';
  values = '';
  isLoading: boolean = false;
  noInput: boolean = true;
  getFetchSuccess: boolean = false;
  NoUser: boolean = true;
  userArrays: UserArray[];
  repoArrays: RepoArray[];
  pageNum: number = 1;
  userName: string = '';

  constructor(private _githubServiceService: GithubServiceService) { }

  ngOnInit() {
  }

  changePageNum(value: number) {
    this.pageNum = value;
    console.log("pagenum in parent component is ", this.pageNum);
    this.fetchUser(this.userName);
  }

  onKey(event: any) {
    this.values = event.target.value;
    this.getFetchSuccess = false;
    this.NoUser = true;
    if (this.values == '') {
      this.noInput = true;
    } else {
      this.noInput = false;
    }
  }

  search(userName: string): void {
    this.getFetchSuccess = false;
    this.NoUser = true;
    this.pageNum = 1;
    this.userName = this.values.trim();
    if (!this.userName) { return; }
    // this._githubServiceService.getRepos(this.userName, this.pageNum)
    // this._githubServiceService.getUser(this.userName)
    this.isLoading = true;
    this.fetchUser(this.userName);
    this.fetchUserInfo(this.userName);
  }

  fetchUser(UserName): void {
    this._githubServiceService.getRepos(UserName, this.pageNum).subscribe(data => {
      this.repoArrays = data;
      console.log("repoArray is ", this.repoArrays);
      if (this.repoArrays == undefined || this.repoArrays && this.repoArrays.length == 0) {
        console.log("Could not find reporray")
        this.NoUser = true;
      } else {
        this.NoUser = false;
      };
    });

    setTimeout(function () {
      this.isLoading = false;
      this.getFetchSuccess = true;
    }.bind(this), 1000);
  }

  fetchUserInfo(UserName): void {
    this._githubServiceService.getUser(UserName).subscribe(data => {
      this.userArrays = data;
      console.log("userArray is ", this.userArrays);
      if (this.userArrays == undefined || this.userArrays && this.userArrays.length == 0) {
        console.log("Could not find userInfo");
        this.NoUser = true;
      } else {
        this.NoUser = false;
      }
    });

    setTimeout(function () {
      this.isLoading = false;
      this.getFetchSuccess = true;
    }.bind(this), 1000);
  }


}
