import { Game } from './Game';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  // squares: any[]
  // xIsNext: boolean
  //winner: string

  game:Game

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(){
    this.game=new Game(Array(9).fill(null),null,true)
  }

  makeMove(i:number){
    this.game.makeMove(i);
  }

  player(){
    return this.game.player;
  }
  
}
