import React from 'react';
import ProjectBlock from "./ProjectBlocks";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Projects() {
    return (
        <Box margin={'3em'}>
            <Grid container display={'flex'} justifyContent={'center'} spacing={'2em'}>
                {info.projects.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <ProjectBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};