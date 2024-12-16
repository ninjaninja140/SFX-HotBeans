export interface Vacancy {
	Title: string;
	Salary: number;
	About: React.ReactNode;
	Tags:
		| Array<
				| 'Design'
				| 'Development'
				| 'Advisory'
				| 'Finance'
				| 'Provisional Relations'
				| 'Informational Relations'
				| 'Customer Relations'
		  >
		| undefined;
	Type: 'Full-Time' | 'Part-Time' | 'Apprenticeship';
	Arrangement: 'In-Office' | 'Remote' | 'Hybrid' | 'Flexible';
}

type VacancyArray = Array<Vacancy>;

export default VacancyArray;
