// import React, { useState } from 'react';

function Categories({ value, onChangeCategory }) {
    // const [activeIndex, setActiveIndex] = useState(0);

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    // const onClickCategory = (index) => {
    //     setActiveIndex(index);
    // }

    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, i) => (
                    <li
                        key={i}
                        // onClick={() => onClickCategory(i)}
                        onClick={() => onChangeCategory(i)}
                        className={value === i ? 'active' : ''}>
                        {categoryName}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
