import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function TestSuggestedCard (props){
    return(
        
        
            <Card>
                {props.title} 
                    <CardContent> 
                        {props.artist}
                        </CardContent>
                        <CardContent>
                         {props.song_id}
                    </CardContent> 
                                
            </Card>
        
        
    );
};

export default TestSuggestedCard;