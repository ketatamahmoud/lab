import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ArticleService} from "../../Services/article.service";
import {Article} from "../../Modals/Article";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'type', 'titre' ,'date','lien', 'auteur', 'sourcePDF','action'];
  dataSource:MatTableDataSource<Article>  ;
  memberName: string="";

  constructor(private articleService: ArticleService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.articleService.tab);
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  fetchDataSource(): void {
    this.articleService.getAllArticles().then((tableau) => {
      this.dataSource = new MatTableDataSource(tableau)
    });
  }

  deleteArticle(id: string): void {

    //1. ouvrir la boite de dialogue
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '170px',
      width: '300px',
    });
    //2. attendre le résultat
    dialogRef.afterClosed().subscribe(result => {
      //3. if result = confirm alors
      if (result) {
        this.articleService.deleteArticle(id).then(() => {
          this.fetchDataSource();
        });
      }
    });
  }

}
