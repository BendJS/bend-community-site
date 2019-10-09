import React from 'react';
import tokens from '../src/components/Tokens'

const tokensJSON = JSON.stringify(tokens, null, 2);

export default {
  title: 'Design Tokens',
};

export const designTokens = () => <pre>{tokensJSON}</pre>;
