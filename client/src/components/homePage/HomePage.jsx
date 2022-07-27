import React from 'react'
import classes from './HomePage.module.css'
import { Menu } from '../menu/Menu'
import { Cap } from '../cap/Cap'
import { Data } from '../data/Data'
import { LinkedDomains } from '../linkedDomains/LinkedDomains'

export const HomePage = () => {
  return (
    <div className={classes.mainContainer}>
      <Menu></Menu>
      <div>
        <Cap></Cap>
        <Data></Data>
        <LinkedDomains></LinkedDomains>
      </div>
    </div>
  )
}

