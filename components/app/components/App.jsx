import { LocaleProvider } from 'antd';
import React from 'react';
import German from 'antd/lib/locale-provider/de_DE';

const App = () => {
	const header = {};

	return (
		<LocaleProvider locale={German}>
			{'Hello World'}
		</LocaleProvider>
	)
}
export default App;
