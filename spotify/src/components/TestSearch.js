import React from 'react'
import TestSuggestedList from "./TestSuggestedList";
import TestSongForm from './TestSongForm';

const TestSearch = () => {
    return(
        <div className="dashboard">
            <TestSongForm />        
            <TestSuggestedList />
        </div>
    )
}

export default TestSearch;