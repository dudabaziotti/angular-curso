import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/lista-de-tarefas.png',
      alt: 'Lista de Tarefas - logo',
      title: 'Lista de tarefas',
      with: '100px',
      height: '100px',
      description:
        '<p>Utilizando TypeScript, desenvolvi uma lista de tarefas personalizada que permite o usuário cadastrar suas tarefas, edita-las e exclui-las, além de adicionar categorias as mesmas, de modo a atender suas necessidades.</p>',
      links: [
        {
          name: 'Acesse a lista:',
          href: '#',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}