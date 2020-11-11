import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
 
export const PickerSelect = ({ setOrderBy }) => {
    return (
        <RNPickerSelect
            onValueChange={(value) => setOrderBy(value)}
            items={[
              { label: 'Latest repository', value: 'latest' },
              { label: 'Highest rated repository', value: 'highest' },
              { label: 'Lowest rated repository', value: 'lowest' },
            ]}
        />
    );
};

export default PickerSelect;