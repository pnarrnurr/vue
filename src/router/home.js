
import { EmptyView, HomeFirstView, HomeSecondView } from '../views';

export default [
	{
		path: '/home',
		name: 'home',
		redirect: {
			name: 'home1'
		},
		meta: {
			menu: true,
			title: "Home"
		},
		component: EmptyView,
		children: [
			{
				path: 'home1',
				name: 'home1',
				component: HomeFirstView,
				meta: {
					title: 'Home 1',
					parent: 'home'
				}
			},
			{
				path: 'home2',
				name: 'home2',
				component: HomeSecondView,
				meta: {
					title: 'Home 2',
					parent: 'home'
				}
			}
		]
	}
]