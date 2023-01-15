import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { GithubServiceService } from '../github-service.service';
import { UserComponent } from '../user/user.component';
import { RepoArray } from '../user';
import { UserArray } from '../userInfo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  @Input() passData;
  @Input() repoCount;
  @Output() pagenum = new EventEmitter<number>();

  arrayData;
  pagination = []
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    let cnt = Math.ceil(this.repoCount / 10);
    for (let i = 1; i <= cnt; i++) {
      this.pagination.push(i);
    }
    console.log("pagination value is ", this.pagination);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['passData']) {
      this.arrayData = this.passData;
    }
  }

  changePage(value: number) {
    this.pagenum.emit(value);
    console.log("pagenum in child component is ", this.pagenum);
  }

}
