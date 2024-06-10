import { Component, signal } from '@angular/core';

//interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Trainee',
        p: 'Asimov Jr. | Maio - Present',
      },
      text: '<p>Desde maio de 2024, estou tendo a oportunidade de atuar como trainee na Asimov Jr na área de desenvolvimento Desktop, tendo contato com ferramentas de programação como TypeScript, Angular, JavaScript, HTML e CSS, Git e Github.</p>',
    },
    {
      summary: {
        strong: 'Jovem Aprendiz - RH',
        p: 'Manserv | Jun 2021 - Set 2022',
      },
      text: '<p>Durante meu período como jovem aprendiz na empresa de logística Manserv, pude aprender sobre a área de recursos humanos e gestão de pessoas, além de me desenvolver muito e adquirir novas habilidades essenciais para o mercado de trabalho.</p>',
    },
  ]);
}
