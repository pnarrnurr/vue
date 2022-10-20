
import { EmptyView, AboutFirstView, AboutSecondView } from '../views';

export default [
	{
		path: '/about',
		name: 'about',
		redirect: {
			name: 'about1'
		},
		meta: {
			menu: true,
			title: "About"
		},
		component: EmptyView,
		children: [
			{
				path: 'about1',
				name: 'about1',
				component: AboutFirstView,
				meta: {
					title: "About 1"
				}
			},
			{
				path: 'about2',
				name: 'about2',
				component: AboutSecondView,
				meta: {
					title: "About 2"
				}
			}
		]
	}
]