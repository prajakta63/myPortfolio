/* eslint-disable react/prop-types */
import React from 'react';
import styles from './ProjectCard.module.css';

//import projects from '../../data/projects.json';
import { getImageUrl } from '../../utils';

// eslint-disable-next-line react/prop-types
export const ProjectCard = ({project : {title, imageSrc, description, skills}}) => {
    return (
        <div className={styles.container}>
            <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} 
            className={styles.image}/>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {
                    skills.map((skill, id) => {
                        return <li key={id}
                        className={styles.skill}>
                            {skill}
                        </li>
                    })
                }
            </ul>
            {/* <div className={styles.links}>
                <a className={styles.link} href={demo}>Demo</a>
                <a className={styles.link} href={source}>Source</a>
            </div> */}
        </div>
    )
}
