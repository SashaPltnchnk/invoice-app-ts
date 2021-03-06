import React from 'react';
import { Route } from 'react-router-dom';
import Customers from './components/Customers/Customers';
import Products from './components/Products/Products';
import Invoices from './components/Invoices/InvoicesList/InvoicesList';
import CreateInvoice from './components/Invoices/CreateInvoice/CreateInvoice';
import EditInvoice from './components/Invoices/EditInvoice/EditInvoice';
import ViewInvoice from './components/Invoices/ViewInvoice/ViewInvoice';




const Router: React.FC = () => {
    return (
      <>
        <Route exact path='/' component={Invoices} />
        <Route exact path='/customers' component={Customers} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/invoices' component={Invoices} />
        <Route exact path='/invoice/new' component={CreateInvoice} />
        <Route exact path='/invoice/:id/edit' component={EditInvoice} />
        <Route exact path='/invoice/:id/view' component={ViewInvoice} />
      </>
    );
}

export default Router;