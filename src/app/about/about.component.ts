import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  aboutMeTxt: String =
    "J'avais 15 ans lorsque j'ai eu ma première expérience de développeur, c'était avec le logiciel 'Scratch', " +
    "j'avais créée un mini jeu 2D ou il fallait sortir d'un labyrinthe sans toucher ses parois. Après cela, j'ai décidé de poursuivre dans l'informatique à l'école, " +
    "c'est là que j'ai écrit mes premières vraies lignes de code en C. " +
    "C'est un langage difficile à apprendre, surtout quand c'est notre premier, mais une fois pris en main, " +
    "j'ai pu me diriger sur d'autres langages sans problèmes étant donné que C a posé les bases pour de nombreux autres langages. " +
    "Lorsque j'ai eu fini mes études secondaires, j'ai alors choisi de poursuivre cette voie en commençant un Bachelier en Technologies de l'Informatique " +
    "où j'ai pu découvrir et pratiquer d'autres aspects de l'informatique tel que le réseau, l'électronique ou la télécommunication.";

  constructor() {}

  ngOnInit(): void {}
}
