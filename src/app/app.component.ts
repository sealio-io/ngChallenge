import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})

export class AppComponent {
	journalEntries = []
	addEntry(){
		let titleInput = (<HTMLInputElement>document.getElementById('jeTitle')).value;
		let entryInput = (<HTMLInputElement>document.getElementById('jeEntry')).value;
		let newEntry = {title:titleInput, entry:entryInput }
		this.journalEntries.push(newEntry);
	}

	showSum = true

	addNum(){
		let num1:number;
		let num2:number;
		this.showSum = false
	}
}
