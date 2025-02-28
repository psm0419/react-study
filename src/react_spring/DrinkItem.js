

function DrinkItem({drinkItem}) {
    return (
        <div style={{'border':'1px solid black'}}>
            <p>이름: {drinkItem.item}</p>
            <p>종류: {drinkItem.type}</p>
        </div>

    );
}

export default DrinkItem;