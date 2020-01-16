import React, { Component } from 'react';
import styles from './Styles.module.scss';
import accomodationData from '../../data/accommodation';
import { getAccomodationData } from './services/accomodation';
import { getAccomodationTypeByName } from './services/accomodationType';
import PageLoader from '../loader/PageLoader';
import { AccomodationContext } from '../../context/AccomodationContext';
import AccomodationTypes from './AccomodationTypes/AccomodationTypes';

const Accomodation = () => {
  return (
    <AccomodationContext.Consumer>
      {({ accomodationTypes, isLoading }) => (
        <PageLoader isLoading={isLoading}>
          <div className={styles.fullContainer}>
            <div className='container'>
              <div className='row'>
                <div className='col-xs-12'>
                  <h1 className='h1'>Browse by property type</h1>
                </div>
              </div>
              <AccomodationTypes accomodationTypes={accomodationTypes} />
            </div>
          </div>
        </PageLoader>
      )}
    </AccomodationContext.Consumer>
  );
};

export default Accomodation;
