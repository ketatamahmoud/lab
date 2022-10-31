import { Component, OnInit } from '@angular/core';
import {Member} from "../../Modals/Member";
import {MemberService} from "../../Services/member.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleService} from "../../Services/article.service";

@Component({
  selector: 'app-affect',
  templateUrl: './affect.component.html',
  styleUrls: ['./affect.component.css']
})
export class AffectComponent implements OnInit {

  tab:Member[]=[];
  currentId :string="";
  constructor(private memberService: MemberService,private activatedRoute:ActivatedRoute,private articleservice:ArticleService,private router:Router) {
    this.tab=this.memberService.tab;
  }
  selected = 'option2';

  ngOnInit(): void {
  }
  add(val: string):void{
    //1.récupérer l'id à partir de url
    this.currentId= this.activatedRoute.snapshot.params['id']

    //2.si id existe
    if (!!this.currentId){
      this.articleservice.Affect(val,this.currentId).then(()=>{this.router.navigate(['/articles'])})
    }
    //3.appeler la fonction affect du service w naamlo feha getArticleById(id)
  }

}
