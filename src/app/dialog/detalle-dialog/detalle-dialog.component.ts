import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pokemon } from 'src/app/dto/pokemon';

@Component({
  selector: 'app-detalle-dialog',
  templateUrl: './detalle-dialog.component.html',
  styleUrls: ['./detalle-dialog.component.css']
})
export class DetalleDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DetalleDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Pokemon) { }

  ngOnInit(): void {
  }


  onClickCancel(){
    this.dialogRef.close();
  }
}
