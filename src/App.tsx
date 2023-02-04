import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useTheme } from './theme/useTheme';
import { classNames as cn } from './helpers/classNames/classNames';

import { MainPageAsync as MainPage } from './pages/MainPage/MainPage.async';
import { AboutPageAsync as AboutPage } from './pages/AboutPage/AboutPage.async';

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