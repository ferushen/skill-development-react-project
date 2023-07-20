import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import type { Article } from '@/entities/article';
import { ArticleBlockType, ArticleType } from '@/entities/article';

import ArticleDetailsPage from './ArticleDetailsPage';


export default {
	title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
	component: ArticleDetailsPage,
	parameters: {
		router: {
			path: '/article/:id',
			route: '/article/1',
		}
	},
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

const articleMock: Article = {
	id: '1',
	title: 'Javascript news',
	subtitle: 'Что нового в JS за 2022 год?',
	img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
	views: 1022,
	createdAt: '26.02.2022',
	type: [ArticleType.IT],
	user: {
		id: '1',
		username: 'admin',
		avatar: 'https://dslv9ilpbe7p1.cloudfront.net/-OEv2bO51P2ZzpjfAYBH7A_store_banner_image.jpeg'
	},
	blocks: [
		{
			id: '1',
			type: ArticleBlockType.Text,
			title: 'Заголовок этого блока',
			paragraphs: [
				'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
				'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
				'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
			]
		},
		{
			id: '4',
			type: ArticleBlockType.Code,
			code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
		},
		{
			id: '5',
			type: ArticleBlockType.Text,
			title: 'Заголовок этого блока',
			paragraphs: [
				'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
				'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
			]
		},
		{
			id: '2',
			type: ArticleBlockType.Image,
			src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
			title: 'Рисунок 1 - скриншот сайта'
		},
		{
			id: '3',
			type: ArticleBlockType.Code,
			code: 'const path = require(\'path\');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, \'db.json\'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);'
		},
		{
			id: '7',
			type: ArticleBlockType.Text,
			title: 'Заголовок этого блока',
			paragraphs: [
				'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
				'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
			]
		},
		{
			id: '8',
			type: ArticleBlockType.Image,
			src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
			title: 'Рисунок 1 - скриншот сайта'
		},
		{
			id: '9',
			type: ArticleBlockType.Text,
			title: 'Заголовок этого блока',
			paragraphs: [
				'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.'
			]
		}
	]
};

export const Readonly = Template.bind({});
Readonly.decorators = [StoreDecorator({
	articleDetails: {
		data: articleMock
	}
})];

export const Editable = Template.bind({});
Editable.decorators = [StoreDecorator({
	articleDetails: {
		data: articleMock
	},
	user: {
		authData: {
			id: '1',
		},
	},
})];

export const Loading = Template.bind({});
Loading.decorators = [StoreDecorator({
	articleDetails: {
		isLoading: true,
	},
})];

export const Error = Template.bind({});
Error.parameters = {
	router: {
		path: '/article/',
		route: '/article/',
	}
};

export const DarkReadonly = Template.bind({});
DarkReadonly.decorators = [
	ThemeDecorator(Theme.DARK),
	StoreDecorator({
		articleDetails: {
			data: articleMock
		}
	})
];


export const DarkEditable = Template.bind({});
DarkEditable.decorators = [
	ThemeDecorator(Theme.DARK),
	StoreDecorator({
		articleDetails: {
			data: articleMock
		},
		user: {
			authData: {
				id: '1',
			},
		},
	})];

export const DarkLoading = Template.bind({});
DarkLoading.decorators = [
	ThemeDecorator(Theme.DARK),
	StoreDecorator({
		articleDetails: {
			isLoading: true,
		},
	})];

export const DarkError = Template.bind({});
DarkError.parameters = {
	router: {
		path: '/article/',
		route: '/article/',
	}
};
DarkError.decorators = [
	ThemeDecorator(Theme.DARK),
];