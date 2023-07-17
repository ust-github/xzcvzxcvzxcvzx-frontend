import { Component, OnInit, OnDestroy } from "@angular/core";
import { ConfigService } from "./service/config.service";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "clean-ng-cli813";

  subscription = Subscription.EMPTY;

  greeting: string;

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.subscription = this.configService.getGreeting().subscribe(
      (data: string) => (this.greeting = data),
      (error) => (this.greeting = `backend hasn't been deployed yet`)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
