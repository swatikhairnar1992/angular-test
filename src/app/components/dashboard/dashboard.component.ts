import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../_service/http-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['id', 'first_name', 'last_name'];
  dataSource = [];
  selectedPageNumber = 1;
  totalPages = 0;

  constructor(
    private router: Router,
    private http: HttpService
  ) { }

  ngOnInit() {
    this.getUserList();
  }
  logOut() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
  getUserList() {
    this.http.get('users?page=' + this.selectedPageNumber).subscribe((res: any) => {
      if (res && res.data && res.data.length) {
        this.dataSource = res.data;
        this.totalPages = Math.ceil(res.total / 6);
      }
    }, (error) => {
      console.log('Error in login');
    });
  }
  setPage(pageNumber) {
    this.selectedPageNumber = pageNumber;
    this.getUserList();
  }
}
