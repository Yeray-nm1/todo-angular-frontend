import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent {

  message = "Some Welcome Message";
  welcomeMessageFromService:string | undefined;
  name=''

  constructor(private route:ActivatedRoute, private service:WelcomeDataService){
    this.name = this.route.snapshot.params['name']
  }
  getWelcomeMessage(){
    this.service.executeHelloWorldBeanService().subscribe(
      {
        next: response => this.handleSuccessfulResponse(response),
        error: error => this.handleErrorResponse(error)
      }
    );
  }

  getWelcomeMessageWithParameter(){
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      {
        next: response => this.handleSuccessfulResponse(response),
        error: error => this.handleErrorResponse(error)
      }
    );
  }

  handleSuccessfulResponse(response: any){
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error: any){
    this.welcomeMessageFromService = error.error.message;
  }

}
