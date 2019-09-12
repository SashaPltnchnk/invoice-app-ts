import { Epic } from 'redux-observable';
import { Action } from 'typesafe-actions';

import { Observable } from 'rxjs';

import { asyncActionHandlerFactory } from '../../utils/async-action-helper';

import { requestsService } from '../service';

const { effect, reducer, ActionTypes, Actions } = asyncActionHandlerFactory(
  'GET_INVOICES_REQUEST',
);

const epic: Epic = (actions$: Observable<Action>) => effect(actions$, () => requestsService.getInvoices());

export { epic, reducer, Actions, ActionTypes };