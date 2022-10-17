
import { About } from '../views';

export default [
	{
		path: '/about',
		name: 'About',
		component: About,
		children: [
			{
				path: 'about1',
				name: 'About 1',
			},
			{
				path: 'about2',
				name: 'About 2',
			},
			{
				path: 'about3',
				name: 'About 3',
			}
		]
	}
]