import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectModel } from '../interfaces/project.model';
import { IconPipe } from '../pipes/icon.pipe';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, IconPipe],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() project!: ProjectModel;
}
