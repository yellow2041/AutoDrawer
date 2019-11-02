import React from 'react';
import PropTypes from 'prop-types';
import {View, Text,} from 'react-native';

import {
    ProgressBarComponent,
    progressProps,
} from './ProgressBarComponent.android';
import styles from './styles';

const ProgressLabel = ({show, progress}) =>
new Map({
    [true, (
        <Text style={styles.progressText}>
            {Math.round(progress)}
        </Text>
    )]
})