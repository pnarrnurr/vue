
import { Home } from '../views';

export default [
	{
		path: '/',
		name: 'Home',
		component: Home,
		children: [
			{
				path: 'home1',
				name: 'Home 1',
			},
			{
				path: 'home2',
				name: 'Home 2',
			},
			{
				path: 'home3',
				name: 'Home 3',
			},
			{
				path: 'home4',
				name: 'Home 4',
			}
		]
	}
]