import { heroFiltered } from '../heroesList/heroesSlice';
import {useCallback} from 'react'
import { useDispatch } from 'react-redux';
import {useHttp} from '../../hooks/http.hook';
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом


const HeroesFilters = () => {

    const dispatch = useDispatch();
    const {request} = useHttp();

    const onSetFilter = useCallback((filter) => {
        request("http://localhost:3001/heroes")
            .then(dispatch(heroFiltered(filter)))
            .catch(() => console.log('this shit'))
        // dispatch(heroFiltered(filter))
    }, [request]);



    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    <button className="btn btn-outline-dark active" onClick={() => onSetFilter('all')}>Все</button>
                    <button className="btn btn-danger" onClick={() => onSetFilter('fire')}>Огонь</button>
                    <button className="btn btn-primary" onClick={() => onSetFilter('water')}>Вода</button>
                    <button className="btn btn-success" onClick={() => onSetFilter('wind')}>Ветер</button>
                    <button className="btn btn-secondary"  onClick={() => onSetFilter('earth')}>Земля</button>
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;