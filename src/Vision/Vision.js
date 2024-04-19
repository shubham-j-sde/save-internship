import React,{Component} from 'react';
import {
	Box,
	Typography,
} from '@material-ui/core';
import "./Vision.css"

export default class Vision extends Component {

	render(){
	return(
<Box id="vision">		

<Typography gutterBottom variant="h5" display="block" class="section">
			VISION
			</Typography><br/>
<Box class="vision-text">
To systematically propagate ancient Indian wisdom and to educate all people about principles of a holistic life in order to check the imbalance of values in society and to achieve real unity and peace in the world.
 </Box>

 <Typography gutterBottom variant="h5" display="block" class="section">
			MISSION
			</Typography><br/>
<Box class="vision-text">
To develop a team of genuine intellectuals and 
transformational leaders who can assertively guide
 the generations to come.
 </Box>
</Box>
	)
}
}