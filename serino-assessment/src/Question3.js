import React from 'react'

function Question3() {

    const sampleData = [
        {
            "id": 1,
            "name": "John Doe",
            "status": 1
        },
        {
            "id": 2,
            "name": "Jane Doe",
            "status": 2
        },
        {
            "id": 3,
            "name": "Adam Rocket",
            "status": 2
        },
        {
            "id": 4,
            "name": "Luis Rocket",
            "status": 1
        }
    ]

    const groupByStats = (array, key) => {
        return array.reduce((result, currentValue) => {
            (result[`${key}-${currentValue[key]}`] = result[`${key}-${currentValue[key]}`] || []).push(
                currentValue
            );
            return result;
        }, {});
    };



    React.useEffect(() => {
        const groupByStatus = groupByStats(sampleData, 'status');
        console.log(groupByStatus)
    }, [])


    return (
        <div>Go to Console to test</div>
    )
}

export default Question3