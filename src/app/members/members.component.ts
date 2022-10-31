import {Component, OnInit} from '@angular/core';
import {Member} from 'src/Modals/Member';
import {MemberService} from "../../Services/member.service";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  dataSource: MatTableDataSource<Member>;
  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'cv', 'creationDate', 'icone'];

  constructor(private memberService: MemberService, private router: Router, private dialog: MatDialog) {
    //this.dataSource = this.memberService.tab;
    this.dataSource = new MatTableDataSource(this.memberService.tab);
  }

  ngOnInit(): void {
  }

  fetchDataSource(): void {
    this.memberService.getAllMembers().then((tableau) => {
      this.dataSource = new MatTableDataSource(tableau)
    });
  }

  deleteMember(id: string): void {
    /*this.memberService.deleteMember(id).then((newtab) => {
      this.dataSource=newtab});*/

    //1. ouvrir la boite de dialogue
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '170px',
      width: '300px',
    });
    //2. attendre le résultat
    dialogRef.afterClosed().subscribe(result => {
      //3. if result = confirm alors
      if (result) {
        this.memberService.deleteMember(id).then(() => {
          this.fetchDataSource();
        });
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
