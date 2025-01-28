import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgStyle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  headerImageUrl!: string;

  constructor(private headerService: HeaderService) {}
  ngOnInit() {
    this.headerImageUrl = this.headerService.getHeaderImageUrl();
  }
}
