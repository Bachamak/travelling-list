/** @format */

import React, { useState } from 'react';
import Item from './Item';

function PackingList({ items, onDeleteItem, onToggleItem, onClearItems }) {
    const [sortBy, setSortBy] = useState('input');

    let sortedItems;

    if (sortBy === 'input') {
        sortedItems = items;
    }

    if (sortBy === 'description') {
        sortedItems = items.slice().sort((a, b) => {
            return a.description.localeCompare(b.description);
        });
    }

    if (sortBy === 'packed') {
        sortedItems = items.slice().sort((a, b) => {
            return a.packed - b.packed;
        });
    }

    return (
        <div className='list'>
            <ul>
                {sortedItems.map((item) => (
                    <Item
                        item={item}
                        onDeleteItem={onDeleteItem}
                        onToggleItem={onToggleItem}
                        onClearItems={onClearItems}
                        key={item.id}
                    />
                ))}
            </ul>

            <div className='action'>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value='input'>Sort by input order</option>
                    <option value='description'>Sort by description</option>
                    <option value='packed'>Sort by packed status</option>
                </select>
                <button onClick={onClearItems}>Clear list</button>
            </div>
        </div>
    );
}

export default PackingList;
