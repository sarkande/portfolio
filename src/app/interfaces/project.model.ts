export interface ProjectModel {
	id: string;
	title: string;
	description: string;
	startDate: string; // Format ISO: 'YYYY-MM-DD'
	endDate?: string | null;
	technologies: string[];
	tags: string[];
	category: 'Personnel' | 'Formation' | 'Professionnel' | 'Hackathon' | string;
	thumbnailUrl: string;
	gallery: string[];
	githubUrl?: string | null;
	liveUrl?: string | null;
	role: string;
	isFeatured: boolean;
}
