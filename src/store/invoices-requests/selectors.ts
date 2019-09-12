import { createSelector } from 'reselect';

import { RootState } from '../index';
import { State } from './index';

export const getState = (state: RootState) => state.invoicesRequests;


export const getGetInvoicesRequestState = createSelector(
  getState,
  (state: State) => state.getInvoices,
);

export const getIsInvoicesLoading = createSelector(
  getGetInvoicesRequestState,
  (state) => state.loading,
);