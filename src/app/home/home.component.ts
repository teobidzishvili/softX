import { Component, ElementRef, Renderer2, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { UserService, user } from '../user.service';
import { LoginComponent } from '../login/login.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  cardWidth: number = 0;
  cardHeight: number = 0;
  posts: any;
  isLoggedIn = false;
  isMenuOpened: boolean = false;
  currentRecord: any;
  menuPosition: any;
  selectedRowIndex: number | undefined;
  selectedUser: any = null;
  private clickListener: (() => void) | undefined; // Event listener reference


  constructor(
    private service:UserService, 
    private elementRef: ElementRef, 
    private renderer: Renderer2, 
    private http: HttpClient
  ) {
    this.selectedRowIndex = undefined;
  }
  
  ngOnInit() {
    this.isLoggedIn = true;
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
      });
      this.clickListener = this.renderer.listen('document', 'click', (event: MouseEvent) => {
        const isClickedInsideCard = this.elementRef.nativeElement.contains(event.target);
        if (!isClickedInsideCard) {
          this.selectedUser = null; // Hide the card
        }
      });
  }

  toggleMenu(event: MouseEvent, rowIndex: number): void {
    this.isMenuOpened = !this.isMenuOpened;
    event.preventDefault();

    const top = event.clientY + "px";
    const left = event.clientX + "px";

    this.menuPosition = {
      top,
      left
    };
    this.selectedRowIndex = rowIndex;

  }
  clickedOutside(): void {
    this.isMenuOpened = false;

  }
  deletePost(): void {
    this.isMenuOpened = false;
    if (this.selectedRowIndex !== undefined){
      this.posts.splice(this.selectedRowIndex, 1);
      this.selectedRowIndex = undefined;
    }
  } 
  showDetails(): void{
    this.isMenuOpened = false;

    if (this.selectedRowIndex !== undefined){
      const selectedUser = this.posts[this.selectedRowIndex];

      this.http
        .get<any>(`https://jsonplaceholder.typicode.com/users/${selectedUser.id}`)
        .subscribe({
          next: (response) => {
            this.selectedUser = {
              id: selectedUser.id,
              name: response.name,
              email: response.email
            };
          },
          error: (error) => {
            console.log('Error fetching user details:', error);
          }
        });
    }
  }
  ngOnDestroy() {
    // Remove the click event listener when component is destroyed
    if (this.clickListener) {
      this.clickListener(); // Remove the click event listener
    }
  }
}
