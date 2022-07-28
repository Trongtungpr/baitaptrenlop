

const Header = () => {
    return (
    <div className= 'containerHeader'>
    <div className= 'containerHeader__left'>
    <button>Create New Task</button>
    </div>
    <div className= 'containerHeader__right'>
    <input placeholder='type something to search'/>
    <button>Search</button>
    </div>
    </div>
    )
    }
    export default Header;