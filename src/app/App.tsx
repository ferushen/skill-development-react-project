import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { useTheme } from './providers/ThemeProvider';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { MainPageAsync as MainPage } from 'pages/MainPage/ui/MainPage.async';
import { AboutPageAsync as AboutPage } from 'pages/AboutPage/ui/AboutPage.async';

import './styles/index.scss';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={cn('app', {}, [theme])}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>O нас</Link>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/about'} element={<AboutPage />} />
                </Routes>
            </Suspense>

        </div>
    )
};

export default App;