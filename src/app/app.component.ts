import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BitlyService } from './services/bitly.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'link-shortner-webapp';

  longUrl=''
  shortUrl=''
  errorMsg=''
  constructor(private bitlyService:BitlyService) {

  }
  shortenUrl() {
    if(!this.longUrl){
      alert("Enter a URL")
    }

    this.bitlyService.shortenUrl(this.longUrl).subscribe(
      (data: any) => {
        this.shortUrl = data.link; // Set the short URL
        this.errorMsg = ''; // Clear any previous error message
      },
      (error) => {
        this.shortUrl = ''; // Clear the short URL in case of an error
        this.errorMsg = `Failed to shorten the URL: ${error.error.message || 'Please try again'}`;
      }
    );
  }

  copyToClipboard() {
    if (this.shortUrl) {
      navigator.clipboard.writeText(this.shortUrl).then(() => {
        alert('Shortened URL copied to clipboard!');
      });
    }
  }


  ngOnInit(): void {

  }
}
