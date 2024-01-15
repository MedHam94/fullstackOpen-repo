const Form = ({onSubmit, search, handleSearchChange}) =>{
    return (
        <form onSubmit={onSubmit}>
            <div>
            Find Countries: <input value={search} onChange={handleSearchChange} required/>
            </div>
            <div>
                <button type="submit">Search</button>
            </div>
        </form>
    )
}


export default Form