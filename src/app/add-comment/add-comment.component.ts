import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @Output() addCommentClicked: EventEmitter<any> = new EventEmitter();
  date: Date;
  text: string;

  constructor() { }

  ngOnInit() {
  }

  addCommentDetails() {
    this.addCommentClicked.emit({date: this.date, text: this.text});
  }
}
