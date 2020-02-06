import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function TestSuggestedCard (props){
    return(
        
        
            <Card>
                {props.cover_url}
                {props.track_name} 
                    <CardContent> 
                        {props.artist_name}
                        </CardContent>
                        <CardContent>
                         {props.track_id}
                    </CardContent> 
                                
            </Card>
        
        
    );
};

export default TestSuggestedCard;