import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {
  events!: any[];

  constructor() {}

  ngOnInit(): void {
    this.events = [
      {
        title: "IPES - Premiers pas dans l'IT",
        date: '2016-2018',
        icon: PrimeIcons.BUILDING,
        description: '',
      },
      {
        title: "EPHEC - Bachelier en Technologie de l'Informatique",
        date: '2018-2021',
        icon: PrimeIcons.BUILDING,
        description:
          "Une fois mon CESS en main, j'ai décidé de poursuivre mes études en effectuant un Bachelier en Technologie de l'Informatique à l'EPHEC. " +
          "Durant ce cursus de 3 ans, j'ai pu apprendre de nouvelles technologies autant dans le développement d'application, qu'en électronique, en télécommunication et en réseau.",
      },
      /*{
        title: 'Étudiant jobiste chez Glaxo Smith Kline',
        date: 'Aout 2020',
        icon: PrimeIcons.BRIEFCASE,
        description: '',
      },*/
      {
        title: 'CSTC - Développeur stagiaire',
        date: 'Février 2021 - Mai 2021',
        icon: PrimeIcons.BRIEFCASE,
        description:
          "Pour valider ma dernière année de bachelier, j'ai du effectuer un stage d'insertion professionnelle." +
          "Ce stage a donc eu lieu au Centre Scientifique et Technique de la construction, ou j'ai développé un application mobile en React Native." +
          "Cette application devait permettre une analyse superficielle du béton afin d'en indiquer les défauts présents",
      },
      {
        title:
          "Gembloux Agro-Bio Tech - Informaticien de l'unité de gestion des ressources forestières de Wallonie",
        date: 'Décembre 2021 - ...',
        icon: PrimeIcons.BRIEFCASE,
        description:
          "Je participe à la migration de la base de données de l'inventaire forestier de Wallonie.",
      },
    ];
  }
}
