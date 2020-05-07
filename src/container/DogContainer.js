import React from 'react'
import { useQuery } from '@apollo/client'
import Dogs from '../components/Dog'
import GET_DOGS from '../graphql/get-dogs'

function DogContainer() {
    const {data: {dogs = [] } = {}} = useQuery(GET_DOGS)
    return(
        <div className='container'>
            {dogs && dogs.map(dog => <Dogs key={dog.key} dogs={dog} />)}
        </div>
    )
}

export default DogContainer