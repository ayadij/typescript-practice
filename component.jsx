import React from 'react';
import PropTypes from 'prop-types';
import GradientButton from './GradientButton';
import { ICONS } from '../../app/constants.js';
import Icon from '../../chrome/components/Icon';
import styles from '../styles/accordion.scss';

const Accordion = ({
  accordionState,
  title,
  gradient,
  onClick,
  removeGroup,
  children
}) => (
  <div className={styles.accordion}>
    <div className={styles.accordionHeader}>
      <div className={styles.accordionTitle}>{title}</div>
      <div className={styles.accordionActions}>
        <GradientButton
          title={accordionState ? 'Close' : 'View Group'}
          gradient={gradient}
          onClick={onClick}
        />
        <div className={styles.remove} onClick={removeGroup}>
          <Icon icon={ICONS.CLOSECIRCLE} size={12} />
          <span>remove</span>
        </div>
      </div>
    </div>
    {accordionState && <div className={styles.accordionBody}>{children}</div>}
  </div>
);

Accordion.propTypes = {
  accordionState: PropTypes.bool.isRequired,
  title: PropTypes.string,
  gradient: PropTypes.string,
  onClick: PropTypes.func,
  removeGroup: PropTypes.func
};

export default Accordion;
