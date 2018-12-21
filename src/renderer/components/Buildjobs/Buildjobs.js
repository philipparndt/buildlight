import React from 'react';
import Buildjob from './Buildjob/Buildjob';

export default (props) => props.jobs.map(job => (
    <Buildjob key={job.id} name={job.name} detail={job.detail} result={job.result}/>
));