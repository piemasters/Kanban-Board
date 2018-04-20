import {Component, OnInit, ViewChild} from '@angular/core';
import { CardStore } from '../../stores/cardstore';
import { ListSchema } from '../../schemas/listschema';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
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
    ];
    this.lists = lists;
  }

  ngOnInit() {
    this.setMockData();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const cardId =  this.cardStore.newCard(value.assignee, value.title);
    this.lists[0].cards.push(cardId);
    form.reset();
  }


}
