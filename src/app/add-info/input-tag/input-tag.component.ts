import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-tag',
  templateUrl: './input-tag.component.html',
  styleUrls: ['./input-tag.component.css', '../add-info.component.css']
})
export class InputTagComponent implements OnInit {

  tags = [];
  input: string;

  constructor() { }

  ngOnInit(): void {
  }

  onclose(t: string) {
    for (var i=0; i<this.tags.length; i++)
      if (this.tags[i] == t)
        this.tags.splice(i, 1); 
  }

  onaddTag(event: KeyboardEvent) {
    if (event.key === "Enter" && this.input) {
      this.tags.push(this.input);
      this.input = ""; 
    }
  }

  onkeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault();
      return false;
    }
  }
}
