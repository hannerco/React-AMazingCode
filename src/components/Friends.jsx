import React from 'react'

const Friends = (props) => {
    const {id, name, age, nickName} = props.profile;
    return (
        <>
            <div key={id}>

                <h1>Name: {name}</h1>
                <p>age: {age} </p> 
                <p>nickname: {nickName}</p>

            </div>
        </>
    )
}

export default Friends