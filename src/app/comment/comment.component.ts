import {Component, Input, OnInit} from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../../models/customerModel';
import { Comment } from '../../models/commentModel';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment = new Comment();
  constructor( private commentService: CommentService, private customerService: CustomerService ) { }

  ngOnInit() {

  }

}
