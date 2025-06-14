import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectModel } from '../interfaces/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() project!: ProjectModel;
}
