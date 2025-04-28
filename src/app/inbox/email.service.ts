import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

interface EmailSummary{
  id: string,
  subject: string,
  from: string
}

export class EmailService {

  rootUrl = 'https://api.angular-email.com'

  constructor(private http:HttpClient) { }

getEmails(){
  return this.http.get<EmailSummary[]>(`${this.rootUrl}/emails`, {
    withCredentials: true
  })
}

}
