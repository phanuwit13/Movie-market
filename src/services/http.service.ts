import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  public rootPath: string =
    "https://api.themoviedb.org/3/search/movie?api_key=179d983912bdcb395e93864692030745&query=";
  public imgBasePath: string = "https://image.tmdb.org/t/p/w500/";

  public totalCart = 0

  constructor(private http: HttpClient, private router: Router) {}

  public get = (path: string) => {
    return new Promise((resolve) => {
      this.http
        .get(this.rootPath + path)
        .toPromise()
        .then((value) => {
          resolve({ connect: true, response: value });
        })
        .catch((reason) => {
          resolve({ connect: false, response: reason });
        });
    });
  };
}