import { Vacancy } from '@src/typings/Vacancy';
import matter from 'gray-matter';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

export const loadVacancies = async (): Promise<Vacancy[]> => {
	const files = import.meta.glob(`/src/configuration/Vacancies/*.md`, { query: '?raw', import: 'default' });
	const vacancies: Vacancy[] = [];
	let Index = 0;

	for (const path in files) {
		Index++;
		const content = (await files[path]()) as string;
		const { data, content: markdownContent } = matter(content);

		vacancies.push({
			VacancyId: Index,
			Title: data.Title,
			Salary: data.Salary,
			Tags: data.Tags,
			Type: data.Type,
			Arrangement: data.Arrangement,
			About: (
				<Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
					{markdownContent}
				</Markdown>
			),
		});
	}

	return vacancies;
};

export const Vacancies = await loadVacancies();
