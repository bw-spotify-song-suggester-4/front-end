import React from 'react'
import SuggestedList from "./SuggestedList";
import TestPostForm from './TestPostForm';

const TestSearch = () => {
    return(
        <div className="dashboard">
            <TestPostForm />        
            <TestSuggestedList />
        </div>
    )
}

export default TestSearch;