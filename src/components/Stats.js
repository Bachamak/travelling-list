/** @format */

function Stats({ items }) {
    if (!items.length)
        return (
            <p className='stats'>
                <em>No items added yet</em>
            </p>
        );

    const numItems = items.length;
    const numPackedItems = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPackedItems / numItems) * 100);

    return (
        <footer className='stats'>
            <em>
                {percentage === 100
                    ? 'You are ready to go!'
                    : `${numItems} items on your list, and you already packed
              ${numPackedItems}(${percentage}%)`}
            </em>
        </footer>
    );
}

export default Stats;
