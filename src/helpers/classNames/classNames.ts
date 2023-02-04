/* 
    Возвращает строку классов
    Принимает:
        cls - главный класс
        mods - {название-класса: булин-флаг}
        additional - массив дополнительных классов
    Пример использования:
        classNames('btn-remove', {hovered: true, selectable: true, red: false}, [pdg]) => 'btn-remove hovered selectable pdg'
*/

type Mods = Record<string, string | boolean>;

export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([_, value]) => value)
            .map(([className, _]) => className)
    ].join(' ')
};