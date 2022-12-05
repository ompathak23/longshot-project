import React from 'react'
import Header from './Header'
import Stats from './Stats'
import KeyTable from './KeyTable'

import data from './data.json'



const KeyWord = () => {
    return (
        <div>
            <Header topic={data.topic} country={data.country} />
            <Stats volume={480} intent={0} kd={46} results={313} cpc={0.12} com={0.24} />
            <KeyTable />
        </div>
    )
}

export default KeyWord