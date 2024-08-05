function PetList ({myPets}) {
    const liElements = myPets.map(pet => {
        return (
            <li key={pet.id} className='pet'>
            <img src={pet.image} alt={pet.name}/>
            <h4>{pet.name}</h4>
            </li>
        )
    })
    return (
        <ul className="pet-list">{liElements}</ul>
    )
}
export default PetList