import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

/* <T> esto lo que quiere decir que la funcion va a recibir un tipo puede ser 
  un string, un number un array lo que pueda ser permitido en un type
*/
  private ejecutarQuery<T>(query: string){

    query = apiUrl + query;
    console.log("prue",query);
    
    return this.http.get<T>( query, {headers}); 

  }

  getTopHeadLines(){
    /* return this.http.get<RespuestaTopHeadlines>('http://newsapi.org/v2/top-headlines?country=us&apiKey=b588823530b14d3b96da7ea1b2e06a34'); */
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us`);
  }

  getTopHeadLinesCategoria( categoria: string){
    /* return this.http.get('https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=b588823530b14d3b96da7ea1b2e06a34'); */
    /*el category=business se cambia por ${categoria}  */
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&category=${ categoria }`);
  }
}
