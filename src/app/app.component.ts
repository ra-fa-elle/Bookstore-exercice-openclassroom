import { Component } from '@angular/core';
// import * as firebase from 'firebase'; <==== import du cours
// ci-dessous imports trouvés sur forum pour solutionner le problème d'import relatif à initializeApp()
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor()
  {
    var firebaseConfig = {
      apiKey: "AIzaSyDUYp4-0lgzT8c7q_Gd5c2rcHhfIYavBIk",
      authDomain: "bookstore-49f16.firebaseapp.com",
      projectId: "bookstore-49f16",
      storageBucket: "bookstore-49f16.appspot.com",
      messagingSenderId: "88796953008",
      appId: "1:88796953008:web:c8dec504f509c467767e75",
      measurementId: "G-2L3C2950VY"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   // firebase.analytics(); inutile?
  }
}
