
import { Contact } from '../views';

export default [
	{
		path: '/contact',
		name: 'Contact',
		component: Contact,
		children: [
			{
				path: 'contact1',
				name: 'Contact 1',
			},
			{
				path: 'contact2',
				name: 'Contact 2',
			},
			{
				path: 'contact3',
				name: 'Contact 3',
			},
			{
				path: 'contact4',
				name: 'Contact 4',
			},
			{
				path: 'contact5',
				name: 'Contact 5',
			}
		]
	}
]