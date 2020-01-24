import { Component, OnInit, Input } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {

  @Input() student: Student;

  constructor() { }

  ngOnInit() {
  }

  clicked() {
    window.alert('Estudante clickado foi: ' + this.student.name);
  }
}
