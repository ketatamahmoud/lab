import {Injectable} from '@angular/core';
import {GLOBAL} from "../app/app_config";
import {Article} from "../Modals/Article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  tab: Article[] = GLOBAL._DB.articles;


  constructor() {
  }

  getAllArticles(): Promise<Article[]> {
    // si j'ai la partie back
    //return this.httpClient.get<Member[]>('linktorestAPI').toPromise();
    return new Promise(resolve => resolve(this.tab));
  }

  deleteArticle(id: string): Promise<void> {
    // si j'ai la partie back
    //return this.httpClient.delete<void>('linktorestAPI').toPromise();

    this.tab = [...this.tab.filter(item => item.id != id)];
    return new Promise(resolve => resolve());
  }

  Affect(val:string,currentId:string):Promise<void>
  {
    this.getArticleByID(currentId).then
    ((item)=>{item.auteur=val});
    return new Promise (resolve => resolve ());
  }
  getArticleByID(id:string):Promise<Article>
  {
    return new Promise (resolve => resolve (
      this.tab.filter
      (item => item.id === id) [0]??null
    ));
  }

}
