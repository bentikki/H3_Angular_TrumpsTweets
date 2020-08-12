import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';
import { TweetsService } from '../tweets.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {


  private tweetService;
  twat: Tweet[];

  constructor(tService: TweetsService) {
      this.tweetService = tService;
      this.twat = tService.tweets;
   }

  ngOnInit() {
  }

  searchValue(searchVal : string){
    this.resetSearch();
    
    if(searchVal.length > 3){
      this.twat = this.twat.filter(function (tweet) {
        if(tweet.text.toUpperCase().includes(searchVal.toUpperCase())){
          return tweet;
        }
      });
    }    
  }

  searchMonth(searchVal : number){
    this.resetSearch();

    this.twat = this.twat.filter(function (tweet) {
      if(tweet.date.getMonth() == searchVal){
        return tweet;
      }
    });
  }

  resetSearch(){
    this.twat = this.tweetService.tweets;
  }
}
