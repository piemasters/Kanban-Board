import { Component, OnInit } from '@angular/core';
import { CardStore } from '../CardStore';
import { ListSchema } from '../ListSchema';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  displayAddCard = false;
  cardStore: CardStore;
  lists: ListSchema[];
  constructor() { }
  setMockData(): void {
    this.cardStore = new CardStore();
    const lists: ListSchema[] = [
      {
        name: 'New',
        cards: []
      },
      {
        name: 'In Progress',
        cards: []
      },
      {
        name: 'Ready For Test',
        cards: []
      },
      {
        name: 'Closed',
        cards: []
      },
      {
        name: 'Needs Info',
        cards: []
      }
    ]
    this.lists = lists;
  }

  ngOnInit() {
    this.setMockData();
  }

  toggleDisplayAddCard() {
    this.displayAddCard = ! this.displayAddCard;
  }

  onEnter(value: string) {
    const cardId =  this.cardStore.newCard(value);
    this.lists[0].cards.push(cardId);
  }

}
