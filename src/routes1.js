import About from './BaiKT/About';
import Home from './BaiKT/Home';
import Contact from './BaiKT/Contact';
import Admin from './BaiKT/Admin';

import React from 'react';
const routes = [{
    path : '/',
	exact : true,
	main : ()=> <Home />
},
{
    path : '/About',
	exact : true,
	main : ({history})=> <About history={history} />
},
{
    path : '/Contact',
	exact : true,
	main : ({history})=> <Contact history={history} />
},
{
    path : '/Admin',
	exact : true,
	main : ({history})=> <Admin history={history} />
}
];
export default routes;