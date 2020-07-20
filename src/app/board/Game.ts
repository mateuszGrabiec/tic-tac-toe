export class Game{
    constructor(private _squares?:any,private _winner?:string, private _xIsNext?:boolean) { }

    get squares(){
        return this._squares;
    }

    get winner(){
        return this._winner;
    }

    get xIsNext(){
        return this._xIsNext;
    }

    set squares(squares:any){
        this._squares=squares;
    }

    set winner(winner:string){
        this._winner = winner;
    }

    set xIsNext(xIsNext:boolean){
        this._xIsNext=xIsNext;
    }

    get player(){
        return this._xIsNext ? 'X' : 'O'
    }

    makeMove(idx: number){
        if(!this.squares[idx] && this.winner==null){
          this.squares.splice(idx,1,this.player)
          this.winner=this.calculateWinner()
          this.xIsNext= !this.xIsNext
        }
    }

    calculateWinner(){
        const lines=[
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
        ]
        for(let i=0; i< lines.length;i++){
          const[a,b,c]=lines[i]
          if(
            this.squares[a] &&
            this.squares[a] === this.squares[b] &&
            this.squares[a] === this.squares[c]
          ){
            return 'Player '+this.squares[a]+' won the game!'
          }
        }
        if(this.squares.filter(x=>x!=null).length>8)return `It's draw You can try again`
        return null
      }
}