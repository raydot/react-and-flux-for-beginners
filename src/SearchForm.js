import React, { Component } from 'react'

/**
 * This displays a SearchForm component and if the state contains any movies then also displays
 * a MovieResults component.  A searchForm component will contain an input field for the movie name
 * and a search button.
 */

class SearchForm extends Component {
    render() {
        return (
            <div className='search-form'>
                <h2 className='text-center'>Search for a Movie</h2>
                <form>
                    <div className='form-group'>
                        <input 
                            type='text' 
                            className='form-control' 
                            ref='title'
                            placeholder="Search..."
                        />
                    </div>
                    <button className="btn btn-primary">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchForm