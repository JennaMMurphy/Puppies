import { useQuery, useMutation } from "@apollo/client";
import Dogs from "../components/Dog";
import { GET_DOGS } from "../graphql/get-dogs";
import React from "react";

function DogContainer() {
  const { loading, error, data: { dogs = [] } = {} } = useQuery(GET_DOGS);
  if (loading) return <p className='loader'></p>
  else if (error) return `Error! ${error.message}`
  else
    return (
      <div className="container">
        {dogs && dogs.map((dog) => <Dogs key={dog.key} dogs={dog} />)}
      </div>
    );
}

export default DogContainer;
