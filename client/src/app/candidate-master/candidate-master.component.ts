import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-master',
  templateUrl: './candidate-master.component.html',
  styleUrls: ['./candidate-master.component.scss']
})
export class CandidateMasterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoPage(pageName: string) {
    this.router.navigate([pageName])
  }

}
